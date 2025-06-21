import React from 'react';
import { Box, Typography, Button, Stack, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typewriter from 'typewriter-effect';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { useThemeContext } from '../../theme/ThemeProvider';

const AnimatedHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: 0,
    width: '40px',
    height: '4px',
    background: 'var(--primary-gradient)',
  }
}));

const AnimatedButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '30px',
  padding: '12px 30px',
  fontWeight: 'bold',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)`,
    transition: 'all 0.6s',
  },
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
  },
  '&:hover::before': {
    left: '100%',
  }
}));

const TypewriterContainer = styled(Box)({
  display: 'inline-flex',
  fontWeight: 700,
  marginLeft: '8px',
  height: '40px',
});

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const theme = useTheme();
  const { colorPalette } = useThemeContext();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ mt: { xs: 4, md: 6 } }}>
      <Typography 
        variant="h4" 
        component="p" 
        className="text-gradient"
        fontWeight={800}
        gutterBottom
        sx={{ fontSize: { xs: '1.8rem', md: '4.2rem' } ,}}
      >
        I'M MADHUSHAN
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' }, mb: 2 }}>
        <AnimatedHeading 
          variant={isMobile ? "h5" : "h4"} 
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
        >
          I BUILD EXCEPTIONAL
        </AnimatedHeading>
        
        <TypewriterContainer className="text-gradient" sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
          <Typewriter
            options={{
              strings: ['FULL - STACK DEVELOPING', 'UI/UX DISIGNING'],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </TypewriterContainer>
      </Box>
      
      <Typography 
        variant="body1" 
        sx={{ 
          mb: 4, 
          maxWidth: '90%',
          color: 'text.secondary',
          fontSize: { xs: '0.95rem', md: '1.1rem' },
          lineHeight: 1.8
        }}
      >
     I design and build seamless full-stack software solutions that solve real user needs and drive tangible results. As a passionate full-stack developer, I specialize in crafting dynamic, responsive interfaces and architecting efficient, secure back-end services. Leveraging modern frameworks across the entire stack, I transform ideas into functional, maintainable products. </Typography>
      
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <AnimatedButton 
          variant="contained" 
          size="large" 
          startIcon={<DownloadIcon />}
          className="bg-gradient"
        >
          Download CV
        </AnimatedButton>
        
        <AnimatedButton 
          variant="outlined" 
          size="large" 
          startIcon={<EmailIcon />}
          onClick={onContactClick}
          className="gradient-border"
        >
          Contact Me
        </AnimatedButton>
      </Stack>
    </Box>
  );
};

export default Header; 