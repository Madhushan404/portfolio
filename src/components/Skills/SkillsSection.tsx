import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  useTheme, 
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useThemeContext } from '../../theme/ThemeProvider';

// Styled components
const SectionContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundColor: '#0f0f0f', // Dark background from the design
  color: '#ffffff',
  position: 'relative',
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 700,
  fontSize: '3rem',
  marginBottom: theme.spacing(5),
  textTransform: 'uppercase',
  position: 'relative',
  color: '#ffffff',
  '& .highlight': {
    color: theme.palette.primary.main, // Green color for "CAN" from the design
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const TitleLine = styled(Box)(({ theme }) => ({
  width: '300px',
  height: '3px',
  backgroundColor: theme.palette.primary.main,
  margin: '0 auto',
  marginBottom: theme.spacing(8),
}));

const SkillsTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.5rem',
  marginBottom: theme.spacing(4),
  textTransform: 'uppercase',
  color: theme.palette.primary.main,
  borderBottom: `3px solid ${theme.palette.primary.main}`,
  display: 'inline-block',
  paddingBottom: theme.spacing(1),
}));

const SkillCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#1a1a1a', // Slightly lighter dark background for cards
  borderRadius: 4,
  textAlign: 'center',
  border: '1px solid rgba(33, 33, 33, 0.5)',
  transition: 'all 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  minHeight: 120,
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '3px',
    backgroundColor: theme.palette.primary.main,
    transform: 'scaleX(0)',
    transition: 'transform 0.3s ease',
    transformOrigin: 'left',
  },
  '&:hover': {
    backgroundColor: '#222222',
    transform: 'translateY(-5px)',
    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
    '&::after': {
      transform: 'scaleX(1)',
    },
  },
}));

const SoftSkillCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: 'rgba(33, 33, 33, 0.4)',
  borderRadius: 4,
  textAlign: 'center',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(33, 33, 33, 0.5)',
  marginBottom: theme.spacing(3),
  overflow: 'hidden',
  position: 'relative',
  color: theme.palette.primary.main,
  fontWeight: 600,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '3px',
    backgroundColor: theme.palette.primary.main,
    transform: 'scaleX(0)',
    transition: 'transform 0.3s ease',
    transformOrigin: 'left',
  },
  '&:hover': {
    backgroundColor: 'rgba(33, 33, 33, 0.6)',
    transform: 'translateY(-5px)',
    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
    '&::after': {
      transform: 'scaleX(1)',
    },
  },
}));

const SkillIcon = styled('img')(({ theme }) => ({
  width: 60,
  height: 60,
  objectFit: 'contain',
  marginBottom: theme.spacing(1.5),
  transition: 'transform 0.3s ease',
  filter: 'brightness(0.9)',
  '&:hover': {
    transform: 'scale(1.1)',
    filter: 'brightness(1)',
  },
}));

const SkillName = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: '#ffffff',
  fontSize: '0.9rem',
  textTransform: 'uppercase',
}));

// Coding Skills data
const codingSkills = [
  { name: 'PYTHON', icon: './icon/python.png' },
  { name: 'JAVA', icon: '/icon/java.png' },
  { name: 'JAVASCRIPT', icon: '/icon/js.png' },
  { name: 'NODE JS', icon: '/icon/nodejs.png' },
  { name: 'NEXT JS', icon: '/icon/next.png' },
  { name: 'C', icon: '/icon/c.png' },
  { name: 'HTML', icon: '/icon/html.png' },
  { name: 'CSS', icon: '/icon/css.png' },
  { name: 'PHP', icon: '/icon/php.png' },
  { name: 'REACT', icon: '/icon/react.png' },
  { name: 'MY SQL', icon: '/icon/mysql.png' },
  { name: 'MONGO DB', icon: '/icon/mongodb.png' },
  { name: 'BOOTSTRAP', icon: '/icon/bootstrap.png' },
  { name: 'J-QUERY', icon: '/icon/jquery.png' },
  { name: 'MUI', icon: '/icon/mui.png' },
  { name: 'FIGMA', icon: '/icon/figma.png' },
];

// Soft Skills data
const softSkills = [
  'Good Computer Hardware Knowledge',
  'Problem-Solving & Critical Thinking',
  'Collaboration & Teamwork',
  'Adaptability',
  'Growth Mindset & Self-Learning',
  'Better Computer Hardware Knowledge',
];

const SkillsSection: React.FC = () => {
  const theme = useTheme();
  const { colorPalette } = useThemeContext();

  return (
    <SectionContainer id="skills" data-testid="skills-section">
      <Container maxWidth="lg">
        {/* Main title */}
        <MainTitle variant="h2">
          <span className="highlight">CAN</span>DO<span className="highlight">ING</span>
        </MainTitle>
        <TitleLine />
        
        {/* Coding Skills Section */}
        <Box sx={{ mb: 8 }}>
          <SkillsTitle variant="h4">
            CODING SKILLS
          </SkillsTitle>
          <Grid container spacing={2}>
            {codingSkills.map((skill, index) => (
              <Grid container={false} size={{ xs: 6, sm: 4, md: 2 }} key={index} sx={{ mb: 2 }}>
                <SkillCard sx={{
                  borderRadius:'10px',
                  boxShadow:' 0px 4px 5px 2px black',
                }}>
                  <SkillIcon src={skill.icon} alt={skill.name} data-testid="skill-icon" />
                  <SkillName>{skill.name}</SkillName>
                </SkillCard>
              </Grid>
            ))}
          </Grid>
        </Box>
        
        {/* Soft Skills Section */}
        <Box>
          <SkillsTitle variant="h4">
            SOFT SKILLS
          </SkillsTitle>
          <Grid container spacing={3}>
            {softSkills.map((skill, index) => (
              <Grid container={false} size={{ xs: 12, sm: 6, md: index < 3 ? 4 : 6 }} key={index}>
                <SoftSkillCard sx={{boxShadow:' 0px 4px 5px 2px black',}}>
                  <Typography variant="body1" fontWeight={600}>
                    {skill}
                  </Typography>
                </SoftSkillCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default SkillsSection; 