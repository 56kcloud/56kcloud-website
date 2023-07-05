import type { StorybookConfig } from "@storybook/nextjs"
const path = require('path')

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ['../public'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src/'),
      }
      config.resolve.roots = [
        path.resolve(__dirname, '../public'),
        'node_modules',
      ]
    }
    return config
  },
  docs: {
    autodocs: "tag",
  },
}
export default config
