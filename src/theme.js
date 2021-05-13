import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#373637',
    },
    secondary: {
      main: '#7F0000',
    },
    background: {
      default: 'grey',
    },
  },
});

export default theme;
