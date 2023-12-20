'use strict'

import pluginId from './plugin-id'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getService = (name) => strapi.plugin(pluginId).service(name)
