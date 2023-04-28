import type { Preview } from "@storybook/react";
import '../src/styles/global.css';
import { RouterContext } from "next/dist/shared/lib/router-context";

const preview: Preview = {
  parameters: {
    nextjs: {
      router: {
        locale: 'en',
        locales: ['en', 'fr'],
        basePath: '/profile',
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
