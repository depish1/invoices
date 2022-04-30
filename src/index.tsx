import { ThemeProvider } from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from 'styles/GlobalStyle';
import { theme } from 'styles/theme';
import App from 'App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
