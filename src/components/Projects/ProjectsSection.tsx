import React from 'react';
import { Box, Container } from '@mui/material';
import { useThemeContext } from '../../theme/ThemeProvider';
import ProjectHeading from './ProjectHeading';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'CINEC Campus Shuttle Tracking System (Real world Running)',
    subtitle: 'Front-end Development',
    description: 'CINEC Shuttle Service Website, a web-based platform designed to facilitate campus transportation.',
    image: '/images/shuttle.jpg', 
    techStack: ['React', 'Vite', 'MUI'],
    liveUrl: 'https://shuttle.cinec.edu/dev#',
  },
  {
    id: 2,
    title: 'Automated Land Tax Management System Land Tax Commission Department, Western Province(Sri Lanka (GOV))',
    subtitle: 'Fulstack Development',
    description: 'Automated land tax management system with predictive analytics for the Western Provincial Land Commissioner\'s Department by integrating automated notification system and user-friendly dashboards.',
    image: '/images/wplt.jpg',
    techStack: ['React', 'Node JS', 'Express js', 'Mongo DB'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://yourportfolio.com',
  },
  {
    id: 3,
    title: 'Online Book Shop (E-commerce website) ',
    subtitle: 'fulstack',
    description: 'This is an online book-selling and buying e-commerce website.',
    image: '/images/Book.png',
    techStack: ['React', 'Node JS', 'Google Book API', 'Mongo DB',],
    githubUrl: 'https://github.com/Madhushan404/Book-Store-E-commerce-website.git',
  
  },
  {
    id: 4,
    title: 'My Personal Portfolio Website',
    subtitle: 'Front-end Development',
    description: 'This allows someone else to get to know my skills and abilities in a better way.',
    image: '/images/my.png',
    techStack: ['React', 'Node JS',],
    githubUrl: 'https://github.com/Madhushan404/portfolio.git',
    liveUrl: 'https://madhushanjayathilake.vercel.app/',
  },
  {
    id: 5,
    title: 'D-Gaming Website ',
    subtitle: 'Front-End Development',
    description: 'This is a sample E- Commerce Web UI',
    image: '/images/dgaming.png',
    techStack: ['HTML', 'CSS', 'Java Script', ],
    githubUrl: 'https://github.com/Madhushan404/D-gaming--E---Commerce-Website-Front-End.git',
   
  },
];

const ProjectsSection: React.FC = () => {
  const { colorPalette } = useThemeContext();

  return (
    <Box id="projects" data-testid="projects-section" sx={{ py: { xs: 6, md: 10 }, background: '#232323', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <ProjectHeading>PROJECTS</ProjectHeading>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 3, sm: 4 },
          }}
        >
          {projects.map((project) => (
            <Box
              key={project.id}
              sx={{
                width: { xs: '100%', sm: '48%', md: '31%' },
                maxWidth: 400,
                minWidth: 280,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                mb: { xs: 3, md: 0 },
              }}
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                techStack={project.techStack}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection; 
