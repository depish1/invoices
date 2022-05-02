import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

  html {
    background-color: transparent;
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
 
  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }
`;
