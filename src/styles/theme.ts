export const theme = {
  colors: {
    dark1: '#202020',
    dark2: '#333533',
    dark3: '#343a40',
    dark4: '#495057',
    dark5: '#636572',
    white1: '#f8f9fa',
    white2: '#e9ecef',
    white3: '#dee2e6',
    white4: '#ccd0d4',
    primary1: '#ffee32',
    primary2: '#ffd500',
    primary3: '#fdc500',
    secondary1: '#c86bfa',
    secondary2: '#5c0099',
    secondary3: '#3d0066',
    error1: '#bf211e',
    error2: '#850a0a',
  },

  fontSizes: {
    xs: '1rem',
    s: '1.4rem',
    m: '1.6rem',
    l: '1.8rem',
    xl: '2rem',
    xxl: '2.5rem',
  },

  borderRadius: '0.5rem',

  boxShadows: {
    formElement: 'rgba(0, 0, 0, 0.1) -4px 9px 25px -6px',
  },
};

export type ThemeType = typeof theme;

export type ThemeColorsType = typeof theme.colors[keyof typeof theme.colors];
