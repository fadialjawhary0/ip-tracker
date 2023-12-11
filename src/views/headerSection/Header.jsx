import React, { useContext, useState } from 'react';

import { useTheme } from '@emotion/react';
import {
  Box,
  Grid,
  InputAdornment,
  Skeleton,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';

import bgImage from '../../assets/pattern-bg-desktop.png';
import bgImageMobile from '../../assets/pattern-bg-mobile.png';
import ArrowIcon from '../../assets/icon-arrow.svg';
import { FetchLoadingContext, IpAddressContext } from '../../contexts/index';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const dynamicBgImage = isMobile ? bgImageMobile : bgImage;

  const [userInput, setUserInput] = useState('');

  const { ipAddressDetails, setIpAddressDetails } =
    useContext(IpAddressContext);
  const { loading } = useContext(FetchLoadingContext);

  const onTextFieldChange = e => {
    setUserInput(e.target.value);
  };

  const InfoGridItem = ({ title, content }) => {
    return (
      <>
        {loading ? (
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: { xs: '2rem', md: '7rem' },
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
              p: '0.75rem',
            }}>
            <Typography variant="subtitle2">{title}</Typography>
            <Skeleton
              variant="text"
              sx={{
                width: '10rem',
                height: '2rem',
              }}
            />
          </Grid>
        ) : (
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: { xs: '3rem', md: '7rem' },
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
              p: '0.75rem',
            }}>
            <Typography variant="subtitle2">{title}</Typography>
            <Tooltip title={content}>
              <Typography
                variant="h6"
                sx={{
                  maxWidth: { xs: '100%', md: '12rem' },
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                  whiteSpace: 'normal',
                  textOverflow: 'ellipsis',
                }}>
                {content}
              </Typography>
            </Tooltip>
          </Grid>
        )}
      </>
    );
  };

  return (
    <Box sx={{ position: 'relative', minHeight: { xs: '20rem', md: '18rem' } }}>
      <Box
        component="img"
        alt="Background image"
        src={dynamicBgImage}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          userSelect: 'none',
        }}
      />

      <Typography
        sx={{
          position: 'absolute',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '2rem',
          fontWeight: 700,
          width: '100%',
          textAlign: 'center',
        }}>
        IP Address Tracker
      </Typography>

      <TextField
        placeholder="Search for any IP address or domain"
        onChange={e => onTextFieldChange(e)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  backgroundColor: '#000000',
                  width: '4rem',
                  borderTopRightRadius: '1rem',
                  borderBottomRightRadius: '1rem',
                  cursor: 'pointer',
                }}>
                <Box
                  component="img"
                  onClick={() => setIpAddressDetails({ ipAddress: userInput })}
                  src={ArrowIcon}
                  alt="Submit arrow icon"
                  sx={{
                    width: '1rem',
                    height: '3.5rem',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </InputAdornment>
          ),
        }}
        sx={{
          position: 'absolute',
          top: { xs: '5.5rem', md: '7rem' },
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#ffffff',
          borderRadius: '1rem',
          minWidth: '16rem',
          maxWidth: '32rem',
          width: 'calc(100% - 3rem)',
          px: 0,
          '.MuiInputBase-root.MuiOutlinedInput-root': {
            paddingRight: '0',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none',
            },
            '&:hover fieldset': {
              border: 'none',
            },
            '&.Mui-focused fieldset': {
              border: 'none',
            },
          },
        }}
      />

      <Grid
        container
        sx={{
          position: 'absolute',
          top: { xs: '10.5rem', md: '13.5rem' },
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 3rem)',
          maxWidth: { xs: '40rem', md: '70rem' },
          backgroundColor: '#ffffff',
          borderRadius: 3,
          boxShadow: '1px 5px 5px #4d4d4d6d',
          px: 2,
          pt: 2,
          pb: { xs: 1, md: 2 },
          alignItems: 'center',
          zIndex: '900',
        }}>
        <InfoGridItem
          title="IP ADDRESS"
          content={ipAddressDetails?.ipAddress}
        />
        <InfoGridItem title="LOCATION" content={ipAddressDetails?.location} />
        <InfoGridItem title="TIMEZONE" content={ipAddressDetails?.timezone} />
        <InfoGridItem title="ISP" content={ipAddressDetails?.isp} />
      </Grid>
    </Box>
  );
};

export default Header;
