/**
 * service controller
 */

import {factories} from '@strapi/strapi'
import {findOne, getAllPublishedSlugs, getInfo} from '../../../utils/toolbox'

const uid = 'api::service.service'

export default factories.createCoreController(uid, () => ({
  findOne: (ctx) => findOne({ctx, uid, where: {slug: ctx.params.id}}),
  slugs: (ctx) => getAllPublishedSlugs(ctx, uid),
  info: (ctx) => getInfo({ctx, uid})
}))
