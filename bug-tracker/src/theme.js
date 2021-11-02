
import { createTheme } from '@mui/material/styles/';

const Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#05e6ee',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      paper: '#3c3c3c',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
});
export {
    Theme
}