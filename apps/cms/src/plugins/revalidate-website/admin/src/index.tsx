/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {prefixPluginTranslations} from '@strapi/helper-plugin'

import GlobeIcon from './components/GlobeIcon'
import Initializer from './components/Initializer'
import pluginId from './pluginId'
import pluginPkg from '../../package.json'

const name = pluginPkg.strapi.name

export default {
  register(app: any) {
    app.addMenuLink({
      to: `/plugins/${pluginId}`,
      icon: GlobeIcon,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: 'Revalidate Website'
      },
      Component: async () => {
        const component = await import('./pages/HomePage')
        return component
      },
      permissions: [
        // Uncomment to set the permissions of the plugin here
        // {
        //   action: '', // the action name should be plugin::plugin-name.actionType
        //   subject: null,
        // },
      ]
    })
    const plugin = {
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name
    }

    app.registerPlugin(plugin)
  },

  bootstrap(app: any) {},

  async registerTrads(app: any) {
    const {locales} = app

    const importedTrads = await Promise.all(
      (locales as any[]).map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({default: data}) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale
            }
          })
          .catch(() => {
            return {
              data: {},
              locale
            }
          })
      })
    )

    return Promise.resolve(importedTrads)
  }
}
