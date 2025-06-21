import React, { useState } from 'react';
import { Box, IconButton, Tooltip, Menu, MenuItem, useTheme, useMediaQuery } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import PaletteIcon from '@mui/icons-material/Palette';
import { useThemeContext } from '../../theme/ThemeProvider';
import { COLORS, COLOR_PALETTES } from '../../theme/constants';

const pulseGlow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  }
  100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ColorButton = styled(IconButton)<{ bgColor: string; gradientBg: string; isSelected: boolean }>(
  ({ theme, bgColor, gradientBg, isSelected }) => ({
    background: isSelected ? gradientBg : bgColor,
    width: 32,
    height: 32,
    margin: theme.spacing(0.5),
    transition: 'all 0.3s ease',
    border: isSelected ? `2px solid ${theme.palette.text.primary}` : 'none',
    boxShadow: isSelected ? `0 0 10px ${bgColor}` : 'none',
    '&:hover': {
      background: gradientBg,
      transform: 'scale(1.2)',
      boxShadow: `0 0 15px ${bgColor}`,
    },
  })
);

const ColorContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper,
  borderRadius: 30,
  padding: theme.spacing(1),
  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const ColorMenuItem = styled(MenuItem)<{ bgColor: string; gradientBg: string; isSelected: boolean }>(
  ({ theme, bgColor, gradientBg, isSelected }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.5),
    padding: theme.spacing(1.5, 2),
    margin: theme.spacing(0.5, 1),
    borderRadius: theme.spacing(1),
    backgroundColor: isSelected 
      ? theme.palette.mode === 'dark' 
        ? 'rgba(255, 255, 255, 0.1)' 
        : 'rgba(0, 0, 0, 0.05)'
      : theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, 0.05)'
        : 'rgba(0, 0, 0, 0.02)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: `${slideIn} 0.3s ease-out`,
    '&:hover': {
      backgroundColor: theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, 0.15)'
        : 'rgba(0, 0, 0, 0.08)',
      transform: 'translateX(4px)',
    },
    '& .MuiSvgIcon-root': {
      color: theme.palette.primary.main,
      transition: 'all 0.3s ease',
    },
  })
);

const ColorDot = styled(Box)<{ bgColor: string }>(({ bgColor }) => ({
  width: 24,
  height: 24,
  borderRadius: '50%',
  backgroundColor: bgColor,
  marginRight: 8,
  boxShadow: `0 0 10px ${bgColor}40`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: `0 0 15px ${bgColor}60`,
  },
}));

const PaletteButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1),
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  animation: `${pulseGlow} 2s infinite`,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'scale(1.1)',
    animation: 'none',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '1.5rem',
    color: theme.palette.text.primary,
    transition: 'all 0.3s ease',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.75),
    '& .MuiSvgIcon-root': {
      fontSize: '1.25rem',
    },
  },
}));

const ColorSelector: React.FC = () => {
  const { primaryColor, changePrimaryColor, mode } = useThemeContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const colorOptions = [
    { name: 'lime', color: COLORS.lime, gradient: COLOR_PALETTES.lime.gradient },
    { name: 'red', color: COLORS.red, gradient: COLOR_PALETTES.red.gradient },
    { name: 'orange', color: COLORS.orange, gradient: COLOR_PALETTES.orange.gradient },
    { name: 'darkBlue', color: COLORS.darkBlue, gradient: COLOR_PALETTES.darkBlue.gradient },
    { name: 'purple', color: COLORS.purple, gradient: COLOR_PALETTES.purple.gradient },
    { name: 'gray', color: COLORS.gray, gradient: COLOR_PALETTES.gray.gradient },
  ];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorSelect = (colorName: string) => {
    changePrimaryColor(colorName as any);
    handleClose();
  };

  if (isMobile) {
    return (
      <>
        <PaletteButton onClick={handleClick}>
          <PaletteIcon />
        </PaletteButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          PaperProps={{
            sx: {
              backgroundColor: mode === 'dark' 
                ? 'rgba(0, 0, 0, 0.3)' 
                : 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.1)' 
                : 'rgba(0, 0, 0, 0.1)'}`,
              boxShadow: mode === 'dark'
                ? '0 8px 32px rgba(0, 0, 0, 0.4)'
                : '0 8px 32px rgba(0, 0, 0, 0.2)',
              minWidth: { xs: '180px', sm: '200px' },
              padding: theme.spacing(1),
              borderRadius: theme.spacing(2),
              '& .MuiList-root': {
                padding: theme.spacing(0.5),
              },
              '& .MuiMenuItem-root': {
                animation: `${slideIn} 0.3s ease-out`,
                animationFillMode: 'both',
                '&:nth-of-type(1)': { animationDelay: '0.1s' },
                '&:nth-of-type(2)': { animationDelay: '0.15s' },
                '&:nth-of-type(3)': { animationDelay: '0.2s' },
                '&:nth-of-type(4)': { animationDelay: '0.25s' },
                '&:nth-of-type(5)': { animationDelay: '0.3s' },
                '&:nth-of-type(6)': { animationDelay: '0.35s' },
              },
            }
          }}
        >
          {colorOptions.map((option) => (
            <ColorMenuItem
              key={option.name}
              bgColor={option.color}
              gradientBg={option.gradient}
              isSelected={primaryColor === option.name}
              onClick={() => handleColorSelect(option.name)}
            >
              <ColorDot bgColor={option.color} />
              <Box sx={{ 
                flex: 1, 
                fontSize: { xs: '0.9rem', sm: '0.95rem' },
                fontWeight: primaryColor === option.name ? 600 : 400,
                color: theme.palette.text.primary,
                textShadow: mode === 'dark'
                  ? '0 0 10px rgba(255, 255, 255, 0.1)'
                  : '0 0 10px rgba(0, 0, 0, 0.1)',
              }}>
                {option.name.charAt(0).toUpperCase() + option.name.slice(1)}
              </Box>
              {primaryColor === option.name && <CheckIcon fontSize="small" />}
            </ColorMenuItem>
          ))}
        </Menu>
      </>
    );
  }

  return (
    <ColorContainer>
      {colorOptions.map((option) => (
        <Tooltip key={option.name} title={`${option.name} theme`}>
          <Box sx={{ position: 'relative' }}>
            <ColorButton
              bgColor={option.color}
              gradientBg={option.gradient}
              isSelected={primaryColor === option.name}
              onClick={() => changePrimaryColor(option.name as any)}
              aria-label={`Change to ${option.name} theme`}
            >
              {primaryColor === option.name && <CheckIcon fontSize="small" style={{ color: 'white' }} />}
            </ColorButton>
          </Box>
        </Tooltip>
      ))}
    </ColorContainer>
  );
};

export default ColorSelector; 