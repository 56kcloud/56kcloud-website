import {Common} from '@strapi/strapi'

const defaultLocale = process.env.STRAPI_PLUGIN_I18N_INIT_LOCALE_CODE

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export async function seoHandler(contentType, uid: string) {
  const isDynamicPage = ['article', 'solution', 'service']
  let title = contentType.seo?.title || contentType.title
  if (isDynamicPage.some(id => uid.endsWith(id))) {
    const needSuffix = ['.solution', '.service'].some(id => uid.endsWith(id))
    const suffix = needSuffix ? `${capitalizeFirstLetter(uid.slice(uid.lastIndexOf('.')+1))} - ` : ''
    title = `${suffix}${title} - 56k.Cloud`
  }
  contentType.seo = {
    title,
    description: contentType.seo?.description || contentType.description,
    image: contentType.image || await strapi.entityService.findOne('plugin::upload.file', 2335) //Default Image
  }
}

export async function bodyHandler(contentType, locale = 'en') {
  contentType.body = Array.isArray(contentType.body) ? contentType.body : []
  const contactComponentIndex = contentType.body.map(el => el.__component)
    .indexOf('contact-sections.contact-split-with-pattern')
  if (contactComponentIndex >= 0) {
    const locations = await strapi.entityService.findMany('api::location.location', {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      populate: 'deep' as any,
      locale: locale
    })
    contentType.body[contactComponentIndex].locations = locations
  }

  const footerComponentName = 'footer.footer'
  const footer = await strapi.entityService.findMany(`api::${footerComponentName}`, {
    populate: '*',
    locale: locale
  })
  footer['__component'] = footerComponentName
  contentType.body.push(footer)
}

function generatePaths(keys: Array<string>, options: Array<string>, depth: number) {
  if (depth === 0) {
    return []
  }

  const paths = []
  for (const key of keys) {
    paths.push(key)
    for (const option of options) {
      paths.push(`${key}.${option}`)
    }
  }

  if (depth > 1) {
    const subPaths = generatePaths(paths, options, depth - 1)
    paths.push(...subPaths.map((subPath) => `${subPath}`))
  }

  return paths
}

export function createPopulateArray(depth=2) {
  let props = [
    'image',
    'cover',
    'author.avatar',
    'avatar',
    'icon'
  ]
  const basePaths = [
    'image',
    'author',
    'tags',
    'body',
    'seo'
  ]
  Object.keys(strapi.components).forEach(key => {
    const component = strapi.components[key]
    Object.keys(component.attributes).forEach(attribute => {
      if (!attribute.includes('related')) {
        props.push(`${attribute}`)
      }
    })
  })
  props = [...new Set(props)]
  return generatePaths(basePaths, props, depth)
}

const cleanUnnecessaryProps = (contentType) => {
  const necessaryProps = ['id', 'slug', 'publishedAt', 'updatedAt', 'createdAt', 'body', 'seo', 'locale']
  Object.keys(contentType).filter(key => !necessaryProps.includes(key)).forEach(key => {
    delete contentType[key]
  })
}

// eslint-disable-next-line no-unused-vars
export async function findOne(ctx, uid: string, contentTypeHandler?: (contentType: Record<string, unknown>) => void) {
  try {
    let contentType = await strapi.db.query(uid).findOne({where: {slug: ctx.params.id}, populate: ['localizations']})
    const slug = ctx.query.locale !== contentType.locale 
      ? contentType.localizations?.find(
        localization => localization.locale === ctx.query.locale
      )?.slug || ctx.params.id
      : ctx.params.id
    contentType = await strapi.db.query(uid).findOne({
      where: {slug},
      populate: createPopulateArray()
    })
    if (!ctx.query.seoOnly) {
      contentTypeHandler && contentTypeHandler(contentType)
      await bodyHandler(contentType, ctx.query.locale)
    }
    await seoHandler(contentType, uid)
    cleanUnnecessaryProps(contentType)
    return contentType
  } catch (e) {
    console.log(e)
    ctx.status = 404
    ctx.body = {error: 'not found'}
  }
}

export async function findSingleType(ctx, uid: Common.UID.Service) {
  try {
    console.log(uid)
    let contentType = await strapi.service(uid).find({
      populate: ['localizations']
    })
    console.log(contentType)
    const locale = contentType.localizations?.find(localization => {
      return localization.locale === ctx.query.locale}
    )?.locale || defaultLocale
    contentType = await strapi.service(uid).find({
      populate: createPopulateArray(),
      locale
    })
    await seoHandler(contentType, uid.toString())
    if (!ctx.query.seoOnly) {
      await bodyHandler(contentType, ctx.query.locale)
    }
    cleanUnnecessaryProps(contentType)
    return contentType
  } catch (e) {
    ctx.status = 404
    ctx.body = {error: 'not found'}
  }
}

async function findManyContentTypes(uid: string, select: Array<string>, showDrafts: boolean = false) {
  const publishedAt = showDrafts ? {} : {publishedAt: null}
  return await strapi.db.query(uid).findMany({
    select,
    where: {
      $not: publishedAt
    }
  })
}

export async function getAllPublishedSlugs(ctx, uid: Common.UID.Service) {
  const showDrafts = ctx.query['show-drafts'] === 'true'
  try {
    const contentTypes = await findManyContentTypes(uid, ['slug', 'locale'], showDrafts)
    return contentTypes.filter(content => content.slug)
  } catch (e) {
    const contentTypes = await findManyContentTypes(uid, ['slug'], showDrafts)
    return contentTypes.filter(content => content.slug).map(content => (
      {
        slug: content.slug,
        locale: defaultLocale
      }
    ))
  }
}
