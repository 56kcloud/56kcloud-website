import {factories} from '@strapi/strapi'
import {getAllPublishedSlugs} from '../../../utils/toolbox'

/**
 * team-member controller
 */
const uid = 'api::team-member.team-member'

async function getBySlug(ctx) {
  const teamMember = await strapi.db.query(uid).findOne({
    where: {slug: ctx.params.id},
    populate: [
      'avatar'
    ]
  })
  // const relatedArticles = await strapi.db.query('api::article.article').findMany({
  //   where: {author: teamMember.id},
  //   limit: 6,
  //   populate: [
  //     'content',
  //     'author.avatar',
  //     'image',
  //     'tags'
  //   ]
  // })
  // teamMember.body = [
  //   {
  //     __component: 'hero.team-member-hero',
  //     teamMember: {...teamMember}
  //   }
  // ]
  // relatedArticles.length > 0 && teamMember.body.push(
  //   {
  //     __component: 'list.related-articles',
  //     articles: relatedArticles
  //   }
  // )
  // await bodyHandler(teamMember, 'en', true)
  return teamMember
}

export default factories.createCoreController(uid, () => ({
  findOne: getBySlug,
  slugs: (ctx) => getAllPublishedSlugs(ctx, uid)
}))
