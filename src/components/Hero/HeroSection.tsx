import React from 'react';
import { Box, Container, Grid, useTheme, useMediaQuery, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from './Header';
import ProfileImage from './ProfileImage';
import Logo from '../common/Logo';
import ThemeToggle from '../common/ThemeToggle';
import Navigation from '../common/Navigation';
import ColorSelector from '../common/ColorSelector';
import { useThemeContext } from '../../theme/ThemeProvider';
import EmailIcon from '@mui/icons-material/Email';

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default,
  backgroundImage: 'url(/images/hero1.jpeg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255, 255, 255, 0.85)',
    backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(50, 50, 50, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
    zIndex: -1,
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: '100dvh',
  },
}));

const TopBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2, 0),
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5, 0),
  },
}));

const MobileControls = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(0.5),
  },
}));

const DesktopControls = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const ControlButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1),
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'scale(1.1)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.75),
  },
}));

const DesktopLayout = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  height: 'calc(100vh - 80px)',
  width: '100%',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    height: 'auto',
    minHeight: 'calc(100vh - 60px)',
    padding: theme.spacing(2, 0),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 0),
    gap: theme.spacing(2),
  },
}));


const ImageSection = styled(Box)(({ theme }) => ({
  width: '30%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    width: '100%',
    order: 1,
    padding: theme.spacing(1),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.5),
  },
}));


const NavigationSection = styled(Box)(({ theme }) => ({
  width: '10%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));


const ContentSection = styled(Box)(({ theme }) => ({
  width: '60%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    width: '100%',
    order: 2,
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}));

const ProfileImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  maxWidth: 500,
  maxHeight: 600,
  borderRadius: '15px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  border: '3px solid transparent',
  backgroundColor: theme.palette.background.paper,
  position: 'relative',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: 400,
    maxHeight: 500,
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: 280,
    maxHeight: 350,
    borderRadius: '10px',
  },
}));

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const { colorPalette } = useThemeContext();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const profileImagePath = '/images/user.png';
  
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <HeroContainer id="home" className="animate-fade-in" data-testid="hero-container">
      <Container maxWidth="xl" sx={{ height: '100%' }}>
        <TopBar>
          <Logo data-testid="logo" />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <MobileControls>
              <ControlButton 
                onClick={handleContactClick}
                data-testid="contact-button"
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.1)',
                  }
                }}
              >
                <EmailIcon />
              </ControlButton>
              <ControlButton>
                <ThemeToggle data-testid="theme-toggle" />
              </ControlButton>
              <ControlButton>
                <ColorSelector data-testid="color-selector" />
              </ControlButton>
            </MobileControls>
            <DesktopControls>
              <ThemeToggle data-testid="theme-toggle" />
            </DesktopControls>
          </Box>
        </TopBar>
        
        <DesktopLayout>
          <ImageSection>
            <ProfileImageContainer>
              <ProfileImage imageSrc={profileImagePath} data-testid="profile-image" />
            </ProfileImageContainer>
          </ImageSection>
          
          <ContentSection>
            <Header onContactClick={handleContactClick} />
          </ContentSection>
        </DesktopLayout>
        
        {isMobile}
      </Container>
      
      {/* Desktop color selector */}
      <Box sx={{ 
        position: 'fixed', 
        bottom: theme.spacing(3),
        right: theme.spacing(3),
        display: { xs: 'none', md: 'block' },
        zIndex: 1000,
      }}>
        <ColorSelector />
      </Box>
    </HeroContainer>
  );
};

export default HeroSection; 