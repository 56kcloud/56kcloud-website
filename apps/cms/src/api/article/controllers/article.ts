/**
 * article controller
 */

import {bodyHandler, getAllSlugs} from '../../../utils/toolbox'
import {factories} from '@strapi/strapi'

const uid = 'api::article.article'

async function getBySlug(ctx) {
  const article = await strapi.db.query('api::article.article').findOne({
    where: {slug: ctx.params.id},
    populate: [
      'content',
      'author.avatar',
      'image',
      'tags',
      'relatedArticles',
      'relatedArticles.image',
      'relatedArticles.author',
      'relatedArticles.author.avatar',
      'relatedPartners',
      'relatedPartners.logo',
      'relatedServices',
      'relatedServices.image',
      'relatedSolutions',
      'relatedSolutions.image'
    ]
  })
  article.body = [
    {
      __component: 'article.article-content',
      content: article.content,
      image: article.image,
      title: article.title,
      tags: article.tags
    },
    {
      __component: 'article.article-author',
      teamMember: article.author
    }
  ]
  await bodyHandler(article, 'en', true)
  return article
}

export default factories.createCoreController(uid, () => ({
  findOne: getBySlug,
  slugs: () => getAllSlugs(uid)
}))