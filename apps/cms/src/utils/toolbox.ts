import {Common} from '@strapi/strapi'

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
    'openGraph'
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
  const necessaryProps = ['id', 'slug', 'publishedAt', 'updatedAt', 'createdAt', 'body', 'openGraph']
  Object.keys(contentType).filter(key => !necessaryProps.includes(key)).forEach(key => {
    delete contentType[key]
  })
}

// eslint-disable-next-line no-unused-vars
export async function findOne(ctx, uid: string, contentTypeHandler?: (contentType: Record<string, unknown>) => void) {
  try {
    let contentType = await strapi.db.query(uid).findOne({where: {slug: ctx.params.id}, populate: ['localizations']})
    const localeSlug = contentType.localizations?.find(
      localization => localization.locale === ctx.query.locale
    )?.slug || ctx.params.id
    contentType = await strapi.db.query(uid).findOne({
      where: {slug: localeSlug},
      populate: createPopulateArray()
    })
    contentTypeHandler && contentTypeHandler(contentType)
    await bodyHandler(contentType, ctx.query.locale)
    cleanUnnecessaryProps(contentType)
    return contentType
  } catch (e) {
    ctx.status = 404
    ctx.body = {error: 'not found'}
  }
}

export async function findSingleType(ctx, uid: Common.UID.Service) {
  try {
    let contentType = await strapi.service(uid).find({
      populate: ['localizations']
    })
    const locale = 
    contentType.localizations?.find(localization => localization.locale === ctx.query.locale)?.locale || 'en'
    contentType = await strapi.service(uid).find({
      populate: createPopulateArray(),
      locale
    })
    await bodyHandler(contentType, locale)
    cleanUnnecessaryProps(contentType)
    return contentType
  } catch (e) {
    ctx.status = 404
    ctx.body = {error: 'not found'}
  }
}

export async function getAllPublishedSlugs(uid: Common.UID.Service) {
  const contentType = await strapi.db.query(uid).findMany({
    select: ['slug'],
    where: {
      $not: {
        publishedAt: null
      }
    }
  })
  return contentType.filter(content => content.slug)
}
