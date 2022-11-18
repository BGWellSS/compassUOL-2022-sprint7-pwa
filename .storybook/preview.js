import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/GlobalStyles';
import theme from '../src/styles/themes/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.bright,
      },
      {
        name: 'dark',
        value: theme.colors.dark,
      },
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={ theme }>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  )
];
