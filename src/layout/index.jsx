import React from 'react';

import { Box } from '@mui/material';

import IPTracker from '../views/mainSection/IPTracker';
import Header from '../views/headerSection/Header';

const Layout = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Header />
      <IPTracker />
    </Box>
  );
};

export default Layout;
