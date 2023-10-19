type PathList = Array<string>

export function pathMatch (url: string, path: string): boolean{
  const urlParts = url.split('/').filter(Boolean)
  const pathParts = path.split('/').filter(Boolean)
  if (urlParts.length !== pathParts.length) return false
  return pathParts.every((part, i) => part.startsWith('[') && part.endsWith(']') || part === urlParts[i])
}

export function closestMatch(url: string, paths: PathList): string | undefined {
  return paths.find(path => pathMatch(url, path))
}

export function kebabToCamel(kebabCase: string): string {
  return kebabCase.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
}

export async function bodyHandler(contentType, locale = 'en', needRelatedSections = false) {
  contentType.body = Array.isArray(contentType.body) ? contentType.body : []
  if (needRelatedSections) {
    contentType.body = contentType.body.concat(addRelatedSections(contentType))
  }
  // const headerComponentName = 'header.header'
  // const header = await strapi.entityService.findMany(`api::${headerComponentName}`, {
  //   populate: 'deep' as any,
  //   locale: locale
  // })
  // header['__component'] = headerComponentName
  // contentType.body.unshift(header)
  const footerComponentName = 'footer.footer'
  const footer = await strapi.entityService.findMany(`api::${footerComponentName}`, {
    populate: '*',
    locale: locale  
  })
  footer['__component'] = footerComponentName
  contentType.body.push(footer)
}

export function addRelatedSections(contentType) {
  const relatedSections = []
  if (contentType.relatedArticles?.length > 0) {
    relatedSections.push({
      __component: 'list.related-articles',
      articles: contentType.relatedArticles
    })
  }
  if (contentType.relatedPartners?.length > 0) {
    relatedSections.push({
      __component: 'list.related-partners',
      partners: contentType.relatedPartners
    })
  }
  if (contentType.relatedServices?.length > 0) {
    relatedSections.push({
      __component: 'list.related-services',
      services: contentType.relatedServices
    })
  }
  if (contentType.relatedSolutions?.length > 0) {
    relatedSections.push({
      __component: 'list.related-solutions',
      solutions: contentType.relatedSolutions
    })
  }
  return relatedSections
}

function generatePaths(keys, options, depth) {
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


export function createPopulateArray(depth = 2) {
  let props = [
    'image',
    'cover',
    'author',
    'author.avatar',
    'avatar',
    'icon',
    'logo',
  ]
  const basePaths = [
    'relatedArticles',
    'relatedPartners',
    'relatedServices',
    'relatedSolutions',
    'body'
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

export async function getContentTypeBySlug(ctx, uid) {
  let contentType = await strapi.db.query(uid).findOne({where: {slug: ctx.params.id}, populate: ['localizations']})
  const localeSlug = contentType.localizations?.find(localization => localization.locale === ctx.query.locale)?.slug ||
   ctx.params.id
  contentType = await strapi.db.query(uid).findOne({
    where: {slug: localeSlug},
    populate: createPopulateArray()
  })
  await bodyHandler(contentType, ctx.query.locale, true)
  return contentType
}

export async function findSingleType(ctx, uid) {
  let singleType = await strapi.service(uid).find({
    populate: ['localizations']
  })
  const locale = 
    singleType.localizations?.find(localization => localization.locale === ctx.query.locale)?.locale || 'en'
  singleType = await strapi.service(uid).find({
    populate: createPopulateArray(),
    locale
  })
  await bodyHandler(singleType, locale)
  return singleType
}

export async function getAllSlugs(uid) {
  const contentType = await strapi.db.query(uid).findMany({
    select: ['slug']
  })
  return contentType.filter(content => content.slug)
}
