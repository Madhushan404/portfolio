import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, IconButton, Button, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GitHub, Link as LinkIcon } from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  background: '#232323',
  borderRadius: '18px',
  boxShadow: '0 8px 32px 0 rgba(0,0,0,0.45), 0 1.5px 0px 0 #222',
  overflow: 'visible',
  position: 'relative',
  border: 'none',
  transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s cubic-bezier(.25,.8,.25,1)',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.03)',
    boxShadow: '0 16px 40px 0 rgba(0,0,0,0.65), 0 2px 0px 0 #222',
  },
  minHeight: 370,
  marginBottom: theme.spacing(2),
  // Neon border animation
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    height: '6px',
    width: '50%',
    background: theme.palette.primary.main,
    boxShadow: `0 0 16px 2px ${theme.palette.primary.main}`,
    borderRadius: '0 0 18px 18px',
    transition: 'transform 3s cubic-bezier(.4,1.5,.5,1)',
    zIndex: 2,
    transform: 'scaleX(0)',
  },
  '&::before': {
    left: 0,
    transformOrigin: 'left',
  },
  '&::after': {
    right: 0,
    transformOrigin: 'right',
  },
  '&:hover::before, &:hover::after': {
    transform: 'scaleX(1)',
  },
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  height: 160,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderTopLeftRadius: '18px',
  borderTopRightRadius: '18px',
  
}));

const TechStackBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  marginTop: theme.spacing(1),
}));

interface ProjectCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, subtitle, description, techStack, githubUrl, liveUrl }) => {
  const theme = useTheme();
  return (
    <StyledCard elevation={0} data-testid="project-card">
      <StyledCardMedia image={image} title={title} data-testid="project-image" />
      <CardContent sx={{ pb: 2 }}>
        <Typography variant="h6" fontWeight={700} color="#fff" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle2" color={theme.palette.primary.main} fontWeight={600} gutterBottom>
          {subtitle}
        </Typography>
        <Typography variant="body2" color="#bdbdbd" fontSize={12} sx={{ mb: 1, minHeight: 48 }}>
          {description}
        </Typography>
        <TechStackBox>
          {techStack.map((tech) => (
            <Chip key={tech} label={tech} size="small" sx={{ bgcolor: '#181818', color: '#bdbdbd', fontWeight: 500, borderRadius: '6px', fontSize: '0.85rem' }} />
          ))}
        </TechStackBox>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: 2, gap: 1 }}>
          {githubUrl && (
            <IconButton 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              color="primary" 
              size="small"
              data-testid="github-link"
            >
              <GitHub />
            </IconButton>
          )}
          {liveUrl && (
            <Button
              variant="text"
              color="primary"
              size="small"
              endIcon={<LinkIcon />}
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontWeight: 600 }}
              data-testid="live-link"
            >
              Demo
            </Button>
          )}
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ProjectCard; 