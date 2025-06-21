import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 900,
  fontSize: '2.5rem',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  position: 'relative',
  display: 'inline-block',
  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
}));

const Underline = styled(Box)(({ theme }) => ({
  width: '120px',
  height: '4px',
  background: '#fff',
  borderRadius: '2px',
  margin: '12px auto 0',
}));

const ProjectHeading: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <Box sx={{ textAlign: 'center', mb: 6 }}>
    <Heading>{children}</Heading>
    <Underline />
  </Box>
);

export default ProjectHeading; 