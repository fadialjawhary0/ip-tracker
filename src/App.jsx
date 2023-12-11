import React from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Layout from './layout';
import { FetchLoadingProvider, IpAddressProvider } from './contexts';

const theme = createTheme({
  typography: {
    fontFamily: '"Rubik"',
    subtitle2: {
      fontWeight: 500,
      letterSpacing: '1px',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
        h6: {
          fontSize: '20px',
          color: 'hsl(0, 0%, 17%)',
        },
        subtitle2: {
          fontSize: '12px',
          color: 'hsl(0, 0%, 59%)',
        },
      },
    },
  },
});

export const App = () => {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <IpAddressProvider>
          <FetchLoadingProvider>
            <Layout />
          </FetchLoadingProvider>
        </IpAddressProvider>
      </ThemeProvider>
    </CssBaseline>
  );
};
