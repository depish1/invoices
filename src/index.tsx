import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from 'styles/GlobalStyle';
import { theme } from 'styles/theme';
import App from 'App';
import store from 'store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
