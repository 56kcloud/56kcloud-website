/**
 * partner-page controller
 */

import {factories} from '@strapi/strapi'
import {findOne} from '../../../utils/toolbox'

const uid = 'api::partners-page.partners-page'
export default factories.createCoreController(uid, () => ({
  find: (ctx) => findOne({ctx, uid})
}))
