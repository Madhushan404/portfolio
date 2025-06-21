import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useThemeContext } from '../../theme/ThemeProvider';

interface LogoProps {
  fontSize?: number | string;
}

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  letterSpacing: '1px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '& .highlight': {
    backgroundImage: 'var(--primary-gradient)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    transition: 'all 0.3s ease',
  },
  '&:hover .highlight': {
    filter: 'brightness(1.2) drop-shadow(0 0 8px var(--primary-color))',
  }
}));

const Logo: React.FC<LogoProps> = ({ fontSize = { xs: 24, sm: 28, md: 32 } }) => {
  const theme = useTheme();
  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <LogoText 
        variant="h4" 
        fontSize={fontSize}
        sx={{ color: theme.palette.text.primary }}
      >
        <span className="highlight">M</span>ADHUSHAN
      </LogoText>
    </Box>
  );
};

export default Logo; 