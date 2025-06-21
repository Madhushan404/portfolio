import React, { useEffect } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import { Z_INDEX } from '../../theme/constants';

const NavigationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  right: theme.spacing(3),
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: theme.palette.background.paper,
  borderRadius: 30,
  padding: theme.spacing(1.5),
  boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.3)',
    transform: 'translateY(-50%) scale(1.02)',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
    bottom: 0,
    left: 0,
    right: 0,
    top: 'auto',
    transform: 'none',
    borderRadius: 0,
    padding: theme.spacing(1),
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    '&:hover': {
      transform: 'none',
    },



  },
}));

const NavButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(0.8),
  padding: theme.spacing(1.5),
  transition: 'all 0.3s ease',
  color: theme.palette.text.secondary,
  backgroundColor: 'transparent',
  '&:hover': {
    background: 'var(--primary-gradient)',
    color: theme.palette.primary.contrastText,
    transform: 'scale(1.2)',
  },
  '&.active': {
    background: 'var(--primary-gradient)',
    color: theme.palette.primary.contrastText,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  },
  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(1),
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },



}));

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', icon: <HomeIcon /> },
  { id: 'about', label: 'About', icon: <PersonIcon /> },
  { id: 'projects', label: 'Projects', icon: <WorkIcon /> },
  { id: 'skills', label: 'Skills', icon: <CodeIcon /> },
  { id: 'education', label: 'Education', icon: <SchoolIcon /> },
  { id: 'contact', label: 'Contact', icon: <EmailIcon /> },
];

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('home');







  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;

      const sections = navigationItems.map(item => {
        const element = document.getElementById(item.id);
        if (element) {
          return {
            id: item.id,
            offsetTop: element.offsetTop,
            offsetHeight: element.offsetHeight
          };
        }
        return null;
      }).filter(Boolean);


      const sortedSections = [...sections].sort((a, b) => (a?.offsetTop || 0) - (b?.offsetTop || 0));
      
      for (const section of sortedSections) {
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <NavigationContainer>
      {navigationItems.map((item) => (
        <Tooltip key={item.id} title={item.label} placement="left">
          <NavButton
            className={activeSection === item.id ? 'active' : ''}
            onClick={() => handleClick(item.id)}
            aria-label={item.label}
            sx={{
              '&:hover': {
                background: 'var(--primary-gradient)',
                color: '#fff',
                transform: 'scale(1.2)',
              },
              '&.active': {
                background: 'var(--primary-gradient)',
                color: '#fff',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              }
            }}
          >
            {item.icon}
          </NavButton>
        </Tooltip>
      ))}
    </NavigationContainer>
  );
};

export default Navigation; 