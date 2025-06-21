import React from 'react';
import { Box, Typography, IconButton, useTheme, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const themeColor = 'var(--primary-color)';
const themeGradient = 'var(--primary-gradient)';

const FooterRoot = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: '#1a1a1a',
  color: '#aaa',
  padding: theme.spacing(0, 0, 6, 0),
  minHeight: 260,
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 0, 4, 0),
    minHeight: 200,
  },
  [theme.breakpoints.down('xs')]: {
    minHeight: 180,
  },
}));

const AnimatedBorder = styled('div')<{
  positionType: 'top' | 'bottom';
}>(({ positionType }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  height: '3px',
  zIndex: 2,
  background: 'none',
  overflow: 'hidden',
  [positionType === 'top' ? 'top' : 'bottom']: 0,
  '&::before': {
    content: '""',
    display: 'block',
    height: '100%',
    margin: positionType === 'top' ? '0 auto' : '0',
    background: themeGradient,
    borderRadius: 2,
    animation: positionType === 'top' ? 'borderExpandCenter 3s forwards' : 'borderCollapseSides 3s forwards',
    width: positionType === 'top' ? '0%' : '100%',
    transition: 'width 3s',
  },
  '@keyframes borderExpandCenter': {
    '0%': { width: '0%' },
    '100%': { width: '100%' },
  },
  '@keyframes borderCollapseSides': {
    '0%': { width: '100%' },
    '100%': { width: '0%' },
  },
}));

const GradientName = styled(Typography)(({ theme }) => ({
  background: themeGradient,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 900,
  letterSpacing: 2,
  fontSize: '2.2rem',
  marginTop: 24,
  marginBottom: 4,
  textTransform: 'uppercase',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
    marginTop: 16,
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.5rem',
    marginTop: 12,
  },
}));

const JobTitle = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontWeight: 400,
  fontSize: '1.1rem',
  marginBottom: 32,
  letterSpacing: 1,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginBottom: 24,
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.9rem',
    marginBottom: 16,
  },
}));

const NavRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(3),
  margin: theme.spacing(3, 0, 4, 0),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2),
    margin: theme.spacing(2, 0, 3, 0),
  },
  [theme.breakpoints.down('xs')]: {
    gap: theme.spacing(1),
    margin: theme.spacing(1.5, 0, 2, 0),
    flexWrap: 'wrap',
    maxWidth: '90%',
  },
}));

const NavButton = styled(IconButton)(({ theme }) => ({
  width: 54,
  height: 54,
  borderRadius: '50%',
  background: '#232323',
  boxShadow: `0 2px 12px 0 ${themeColor}33`,
  border: `2px solid ${themeColor}`,
  color: themeColor,
  transition: 'all 0.3s',
  '&:hover': {
    background: themeGradient,
    color: '#fff',
    boxShadow: `0 0 16px 2px ${themeColor}99`,
    transform: 'scale(1.12)',
  },
  [theme.breakpoints.down('sm')]: {
    width: 45,
    height: 45,
    '& svg': {
      fontSize: '1.2rem',
    },
  },
  [theme.breakpoints.down('xs')]: {
    width: 40,
    height: 40,
    '& svg': {
      fontSize: '1rem',
    },
  },
}));

const FooterText = styled(Typography)(({ theme }) => ({
  color: '#888',
  fontSize: '1rem',
  maxWidth: 900,
  margin: '0 auto',
  textAlign: 'center',
  marginTop: theme.spacing(2),
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.95rem',
    padding: theme.spacing(0, 3),
    marginTop: theme.spacing(1.5),
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.85rem',
    padding: theme.spacing(0, 2),
    marginTop: theme.spacing(1),
  },
}));

const navItems = [
  { label: 'Home', icon: <HomeIcon />, href: '#home' },
  { label: 'Info', icon: <InfoIcon />, href: '#about' },
  { label: 'BarChart', icon: <BarChartIcon />, href: '#skills' },
  { label: 'Mail', icon: <EmailIcon />, href: '#contact' },
  { label: 'Call', icon: <CallIcon />, href: 'tel:+94729651810' },
  { label: 'GitHub', icon: <GitHubIcon />, href: 'https://github.com/Madhushan404' },
  { label: 'LinkedIn', icon: <LinkedInIcon />, href: 'https://linkedin.com/in/buddhika-madhushan-b5067b319' },
];

const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <FooterRoot>
      <AnimatedBorder positionType="top" />
      <Box sx={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 2 }}>
        <GradientName>MADHUSHAN</GradientName>
        <JobTitle>Software Developer</JobTitle>
        <NavRow>
          {navItems.map((item) => (
            <Tooltip title={item.label} key={item.label} arrow>
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={item.label}
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                <NavButton>
                  {item.icon}
                </NavButton>
              </a>
            </Tooltip>
          ))}
        </NavRow>
        <FooterText>
        </FooterText>
      </Box>
      <AnimatedBorder positionType="bottom" />
    </FooterRoot>
  );
};

export default Footer; 