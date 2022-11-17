import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { Normalizer } from './styles/Normalizer';
import { GlobalStyles } from './styles/GlobalStyles';
import theme from './styles/themes/theme';
import Home from './pages/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Normalizer />
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
);
