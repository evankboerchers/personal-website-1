import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#373637',
    },
    secondary: {
      main: '#9e0000',
    },
    background: {
      default: '#646464',
    },
    info: {
      main: '#DE595A',
    },
  },
});

export default theme;
