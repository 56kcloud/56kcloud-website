/**
 * home-page controller
 */

import {factories} from '@strapi/strapi'
import {findSingleType} from '../../../utils/toolbox'

const uid = 'api::home-page.home-page'
export default factories.createCoreController(uid, () => ({
  find: (ctx) => findSingleType(ctx, uid)
}))
