/**
 * blog-page controller
 */

import {factories} from '@strapi/strapi'
import {findOne, getInfo} from '../../../utils/toolbox'

const uid = 'api::about-page.about-page'
export default factories.createCoreController(uid, () => ({
  find: (ctx) => findOne({ctx, uid}),
  info: (ctx) => getInfo({ctx, uid})
}))
