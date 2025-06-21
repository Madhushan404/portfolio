import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../../theme/ThemeProvider';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: 'relative',
  borderRadius: '50%',
  padding: 10,
  transition: 'all 0.3s ease-in-out',
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: '50%',
    padding: 2,
    background: 'var(--primary-gradient)',
    WebkitMask: 
      'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    pointerEvents: 'none',
  },
  '&:hover': {
    transform: 'scale(1.1) rotate(10deg)',
    boxShadow: '0 0 15px var(--primary-color)',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
  },
}));

const ThemeToggle: React.FC = () => {
  const { mode, toggleMode } = useThemeContext();
  
  return (
    <Tooltip title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
      <StyledIconButton 
        onClick={toggleMode} 
        color="primary"
        aria-label="toggle dark/light mode"
        sx={{ 
          '& svg': { 
            fontSize: '1.5rem',
            transition: 'all 0.3s ease'
          }
        }}
      >
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </StyledIconButton>
    </Tooltip>
  );
};

export default ThemeToggle; 