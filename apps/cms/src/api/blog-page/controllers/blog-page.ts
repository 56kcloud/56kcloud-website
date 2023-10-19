import {factories} from '@strapi/strapi'
import {findSingleType} from '../../../utils/toolbox'

/**
 * blog-page controller
 */

const uid = 'api::blog-page.blog-page'
export default factories.createCoreController(uid, () => ({
  find: (ctx) => findSingleType(ctx, uid)
}))
