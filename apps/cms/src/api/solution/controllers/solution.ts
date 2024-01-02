/**
 * solution controller
 */

import {factories} from '@strapi/strapi'
import {findOne, getAllPublishedSlugs} from '../../../utils/toolbox'

const uid = 'api::solution.solution'

export default factories.createCoreController(uid, () => ({
  findOne: (ctx) => findOne({ctx, uid, where: {slug: ctx.params.id}}),
  slugs: (ctx) => getAllPublishedSlugs(ctx, uid)
}))
