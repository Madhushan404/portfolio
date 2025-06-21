import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  IconButton,
  Link
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useThemeContext } from '../../theme/ThemeProvider';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { keyframes } from '@mui/system';


const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


const SectionContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundColor: '#0f0f0f',
  color: '#ffffff',
  position: 'relative',
}));

const HeadingContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  textAlign: 'center',
  marginBottom: theme.spacing(8),
  paddingBottom: theme.spacing(2),
}));

const BackgroundText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '6rem',
  fontWeight: 800,
  opacity: 0.6,
  color: theme.palette.primary.main,
  whiteSpace: 'nowrap',
  zIndex: 1,
  [theme.breakpoints.down('lg')]: {
    fontSize: '5rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '4rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '3rem',
  },
}));

const ForegroundText = styled(Typography)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  textTransform: 'uppercase',
  fontSize: '2.5rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.75rem',
  },
}));

const HeaderLine = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: 3,
  width: '70%',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  marginBottom: theme.spacing(2),
}));

const SecondHeaderLine = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: 3,
  width: '70%',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: theme.palette.primary.main,
}));

const InfoItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1.2, 0),
  '& .MuiListItemText-primary': {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#aaaaaa',
  },
  '& .MuiListItemText-secondary': {
    fontSize: '0.95rem',
    color: '#ffffff',
  },
}));

const InfoIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 40,
  color: theme.palette.primary.main,
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  border: `2px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  fontWeight: 600,
  padding: theme.spacing(1, 3),
  paddingLeft: theme.spacing(1),
  borderRadius: 25,
  transition: 'all 0.3s ease',
  textTransform: 'none',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderColor: theme.palette.primary.main,
    transform: 'translateY(-3px)',
    boxShadow: `0 10px 20px rgba(0, 0, 0, 0.2)`,
    '& .icon-circle': {
      animation: `${pulse} 1.5s infinite`,
      backgroundColor: theme.palette.primary.main,
    },
    '& .download-icon': {
      animation: `${rotate} 1s ease-in-out`,
    }
  },
}));

const IconCircle = styled(Box)(({ theme }) => ({
  width: 36,
  height: 36,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: theme.spacing(1.5),
  transition: 'all 0.3s ease',
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: '#ffffff',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  margin: theme.spacing(0, 0.5),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    transform: 'translateY(-3px)',
    boxShadow: `0 5px 15px rgba(0, 0, 0, 0.3)`,
  }
}));


interface SocialButtonProps {
  'aria-label': string;
  onClick: () => void;
  children: React.ReactNode;
}

const AboutSection: React.FC = () => {
  const theme = useTheme();
  const { colorPalette } = useThemeContext();


  const personalInfo = {
    name: 'Buddhika Madhushan Jayathilake',
    birthDay: '11 / 08 /2000',
    email: 'buddhikamadhushan97@gmail.com',
    contactNumber: '+94 729 65 18 10',
    country: 'Sri Lanka',
    language: 'English | Sinhala'
  };

  const handleDownloadCV = () => {

    window.open('/resume.pdf', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${personalInfo.email}`;
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Madhushan404', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/buddhika-madhushan-b5067b319', '_blank');
  };

  return (
    <SectionContainer id="about">
      <Container maxWidth="lg">
        <HeadingContainer>
          <BackgroundText variant="h2" sx={{letterSpacing:'10px'}}>READ ME</BackgroundText>
          <ForegroundText variant="h2" sx={{fontWeight:'800'}}>
            ABOUT ME
          </ForegroundText>
          <HeaderLine />
          <SecondHeaderLine />
        </HeadingContainer>

        <Grid container spacing={6}>
          <Grid container={false} size={{ xs: 12, sm: 6, md: 6 }}>
            <Box>
              <List>
                <InfoItem>
                  <InfoIcon>
                    <PersonIcon />
                  </InfoIcon>
                  <ListItemText 
                    primary="Name :" 
                    secondary={` ${personalInfo.name}`} 
                    primaryTypographyProps={{ 
                      component: 'span'
                    }}
                    secondaryTypographyProps={{ 
                      component: 'span' 
                    }}
                  />
                </InfoItem>
                
                <InfoItem>
                  <InfoIcon>
                    <CalendarMonthIcon />
                  </InfoIcon>
                  <ListItemText 
                    primary="Birth Day :" 
                    secondary={` ${personalInfo.birthDay}`} 
                    primaryTypographyProps={{ 
                      component: 'span'
                    }}
                    secondaryTypographyProps={{ 
                      component: 'span'
                    }}
                  />
                </InfoItem>
                
                <InfoItem>
                  <InfoIcon>
                    <EmailIcon />
                  </InfoIcon>
                  <ListItemText 
                    primary="E-mail Address :" 
                    secondary={` ${personalInfo.email}`}
                    primaryTypographyProps={{ 
                      component: 'span'
                    }}
                    secondaryTypographyProps={{ 
                      component: 'span'
                    }}
                  />
                </InfoItem>
                
                <InfoItem>
                  <InfoIcon>
                    <PhoneIcon />
                  </InfoIcon>
                  <ListItemText 
                    primary="Contact Number :" 
                    secondary={` ${personalInfo.contactNumber}`}
                    primaryTypographyProps={{ 
                      component: 'span'
                    }}
                    secondaryTypographyProps={{ 
                      component: 'span'
                    }}
                  />
                </InfoItem>
                
                <InfoItem>
                  <InfoIcon>
                    <LocationOnIcon />
                  </InfoIcon>
                  <ListItemText 
                    primary="Country :" 
                    secondary={` ${personalInfo.country}`}
                    primaryTypographyProps={{ 
                      component: 'span'
                    }}
                    secondaryTypographyProps={{ 
                      component: 'span'
                    }}
                  />
                </InfoItem>
                
                <InfoItem>
                  <InfoIcon>
                    <LanguageIcon />
                  </InfoIcon>
                  <ListItemText 
                    primary="Language :" 
                    secondary={` ${personalInfo.language}`}
                    primaryTypographyProps={{ 
                      component: 'span'
                    }}
                    secondaryTypographyProps={{ 
                      component: 'span'
                    }}
                  />
                </InfoItem>
              </List>
            </Box>
          </Grid>
          
          <Grid container={false} size={{ xs: 12, sm: 6, md: 6 }}>
            <Box>
              <Typography variant="body1" paragraph sx={{ mb: 4,
                fontSize: '14px', fontStyle:'italic',letterSpacing:'1px',fontWeight:'100'
              }}>
              I am an enthusiastic undergraduate software engineer with a strong desire to apply the skills I learn in a practical, real-world setting. I constantly strive to experiment with new technologies, expand my knowledge base, and stay up-to-date in today's rapidly evolving tech world. My goal is to grow not only as a developer, but also as a well-rounded professional.
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ mb: 5, fontSize: '14px', fontStyle:'italic',letterSpacing:'1px',fontWeight:'100' }}>
              My time management skills are top-notch and I can adapt quickly to any situation. I am also able to find solutions to various problems from different angles. I have a strong focus on delivering high-quality products with an optimal user experience, and I am always open to using modern tools and technologies to achieve the best results. My mindset is rooted in continuous improvement, innovation, and user-centered design.
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                <DownloadButton 
                  variant="outlined" 
                  onClick={handleDownloadCV}
                >
                  <IconCircle className="icon-circle">
                    <DownloadIcon fontSize="small" className="download-icon" sx={{ color: '#fff' }} />
                  </IconCircle>
                  Download CV
                </DownloadButton>
                
                <Box sx={{ display: 'flex' }}>
                  <SocialIconButton 
                    aria-label="Email " 
                    onClick={handleEmailClick}
                  >
                    <EmailOutlinedIcon />
                  </SocialIconButton>
                  <SocialIconButton 
                    aria-label="GitHub" 
                    onClick={handleGitHubClick}
                  >
                    <GitHubIcon />
                  </SocialIconButton>
                  <SocialIconButton 
                    aria-label="LinkedIn" 
                    onClick={handleLinkedInClick}
                  >
                    <LinkedInIcon />
                  </SocialIconButton>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default AboutSection; 