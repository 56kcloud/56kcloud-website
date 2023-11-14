/**
 * service controller
 */

import {factories} from '@strapi/strapi'
import {findOne, getAllPublishedSlugs} from '../../../utils/toolbox'

const uid = 'api::service.service'

export default factories.createCoreController(uid, () => ({
  findOne: (ctx) => findOne(ctx, uid),
  slugs: () => getAllPublishedSlugs(uid)
}))
