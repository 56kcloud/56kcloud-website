import type {Preview} from '@storybook/react'
import '../src/styles/global.css'
import config from '../tailwind.config'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: '56kcloud',
      values: [{name: '56kcloud', value: config.theme.extend.colors.background}]
    },
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    nextjs: {
      appDirectory: true
    }
  }
}

export default preview
