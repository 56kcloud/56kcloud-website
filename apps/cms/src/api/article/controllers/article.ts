/**
 * article controller
 */

import {factories} from '@strapi/strapi'
import {findOne, getAllPublishedSlugs} from '../../../utils/toolbox'

const uid = 'api::article.article'

export default factories.createCoreController(uid, () => ({
  findOne: (ctx) => findOne({
    ctx,
    uid,
    contentTypeHandler: (article) => {
      article.body = [
        {
          __component: 'article.article-content',
          content: article.content,
          image: article.image,
          title: article.title,
          tags: article.tags,
          publishedOn: article.publishedOn,
          author: article.author
        },
        {
          __component: 'team-member-section.team-member-card',
          teamMember: article.author
        }
      ]
    },
    where: {
      slug: ctx.params.id
    }
  }),
  slugs: (ctx) => getAllPublishedSlugs(ctx, uid)
}))
