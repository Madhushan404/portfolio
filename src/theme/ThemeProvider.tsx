import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { COLORS, FONT_FAMILY, COLOR_PALETTES } from './constants';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900.css';

type ThemeMode = 'light' | 'dark';
type ThemeColor = 'lime' | 'red' | 'orange' | 'darkBlue' | 'purple' | 'gray';

interface ThemeContextProps {
  mode: ThemeMode;
  toggleMode: () => void;
  primaryColor: ThemeColor;
  changePrimaryColor: (color: ThemeColor) => void;
  colorPalette: typeof COLOR_PALETTES['lime'];
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const getStoredTheme = (): ThemeMode => {
  const storedMode = localStorage.getItem('themeMode');
  return (storedMode as ThemeMode) || 'dark';
};

const getStoredColor = (): ThemeColor => {
  const storedColor = localStorage.getItem('themeColor');
  return (storedColor as ThemeColor) || 'lime';
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(getStoredTheme);
  const [primaryColor, setPrimaryColor] = useState<ThemeColor>(getStoredColor);
  const colorPalette = COLOR_PALETTES[primaryColor];

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem('themeColor', primaryColor);
    
    // Update CSS variables for gradients
    document.documentElement.style.setProperty('--primary-color', COLORS[primaryColor]);
    document.documentElement.style.setProperty('--primary-gradient', colorPalette.gradient);
    document.documentElement.style.setProperty('--primary-light', colorPalette.light);
    document.documentElement.style.setProperty('--primary-dark', colorPalette.dark);
    document.documentElement.style.setProperty('--secondary-bg', colorPalette.secondaryBg);
  }, [primaryColor, colorPalette]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const changePrimaryColor = (color: ThemeColor) => {
    setPrimaryColor(color);
  };

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: COLORS[primaryColor],
        light: colorPalette.light,
        dark: colorPalette.dark
      },
      background: {
        default: mode === 'dark' ? COLORS.darkBg : COLORS.white,
        paper: mode === 'dark' ? colorPalette.secondaryBg : '#F5F5F5',
      },
      text: {
        primary: mode === 'dark' ? COLORS.white : COLORS.black,
        secondary: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
      },
    },
    typography: {
      fontFamily: FONT_FAMILY.primary,
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 500,
      },
      h6: {
        fontWeight: 500,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 8,
            padding: '10px 20px',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            },
          },
          containedPrimary: {
            background: colorPalette.gradient,
            '&:hover': {
              background: colorPalette.gradient,
              opacity: 0.9,
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          colorPrimary: {
            color: COLORS[primaryColor],
            '&.Mui-selected': {
              background: colorPalette.gradient,
              color: '#fff',
            }
          }
        }
      }
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, primaryColor, changePrimaryColor, colorPalette }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}; 