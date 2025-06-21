import React, { useState } from 'react';
import { Box, Container, Typography, IconButton, Paper } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const certificates = [
 
  {
    image: '/images/google (1).jpeg',
    name: 'Start the UX Design Process: Empathize, Define,and Ideate',
    subtitle: 'Google',
    detail: 'https://coursera.org/verify/Q2UB3FZTVALM',
  },
  {
    image: '/images/google (2).jpeg',
    name: 'Foundations of User Experience (UX) Design',
    subtitle: 'Google',
    detail: 'https://coursera.org/verify/Z6H5EL8LW8MR ',
  }, 
  {
    image: '/images/Udemi.jpg',
    name: 'Web Development Wizardry:HTML & CSS Course for Beginners',
    subtitle: 'Udemy',
    detail: 'UC-8631478e-ee5b-4a12-9501-94-8572a84154',
  },
  {
    image: '/images/cirs.jpg',
    name: 'The 5th CINEC International Reaserch Symposium (CIRS - 2024 )',
    subtitle: 'A smart system automatically agjusts the heat of a hot water shower based on climate change and automated washroom lighting',
    detail: 'UC-8631478e-ee5b-4a12-9501-94-8572a84154',
  },
  {
  image: '/images/mora.png',
  name: 'SPRINTX interuniversity Development Competition ',
  subtitle: '',
  detail: '',
  }, {
    image: '/images/meta.png',
    name: 'Introduction Front-End Development',
    subtitle: 'Meta',
    detail: 'https://coursera.org/verify/SX214LSSC7GU',
  },


];

const EducationSection: React.FC = () => {
  const [selected, setSelected] = useState(0);

  const handlePrev = () => {
    setSelected((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setSelected((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box id="education" sx={{ width: '100%', py: { xs: 4, md: 10 }, background: '#181818', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ width: '90%', mx: 'auto', border: '1px solid #333', borderRadius: 2, p: { xs: 2, md: 4 }, background: '#111', boxShadow: '0 2px 24px 0 rgba(0,0,0,0.4)' }}>
    
        <Typography variant="h3" fontWeight={900} align="center" sx={{ color: 'primary.main', mb: 4, letterSpacing: 2, textTransform: 'uppercase', fontSize: { xs: '2rem', sm: '2.5rem', md: '2.8rem' } }}>
          EDUCATION
        </Typography><br /><br />
      
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'flex-start', justifyContent: 'center' }}>






          <Box sx={{ flex: 1,  borderRadius: 2, p: { xs: 2, md: 3 }, mb: { xs: 3, md: 0 }, minHeight: 320 }}>
            {}
            <Typography variant="body1" sx={{ color: '#444' }}>
            BSc (Hons) Software Engineering CINEC Campus 2022 - Present
            </Typography><br />
            <Typography variant="body1" sx={{ color: '#444' }}>
            Advanced Level  Weera Keppetipola Central College, Akuramboda ( MATALE ) 2011-2019
            </Typography>
          </Box>



      
          <Box sx={{ 
            flex: 1, 
            borderRadius: 2, 
            p: { xs: 1, md: 3 }, 
            minHeight: 320,
            width: { xs: '100%', md: 'auto' }
          }}>
            <Typography variant="h6" sx={{ color: '#222', mb: 2 }}>
              certificate BOX
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <Box sx={{ 
                position: 'relative', 
                mb: 2, 
                width: { xs: '100%', sm: 450, md: 550 }, 
                maxWidth: '100%', 
                height: { xs: 280, sm: 300, md: 350 },
                px: { xs: 0, sm: 2 }
              }}>
                <IconButton 
                  onClick={handlePrev} 
                  size="large" 
                  sx={{ 
                    position: 'absolute', 
                    left: { xs: 4, sm: -56 }, 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    zIndex: 2, 
                    bgcolor: '#222', 
                    color: 'primary.main', 
                    '&:hover': { bgcolor: 'primary.main', color: '#fff' }, 
                    p: { xs: 1, sm: 2 } 
                  }}
                >
                  <ArrowBackIosNewIcon fontSize="large" />
                </IconButton>
                <Box sx={{ 
                  width: '100%', 
                  height: '100%', 
                  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.5)', 
                  borderRadius: 2, 
                  overflow: 'hidden', 
                  bgcolor: '#fff', 
                  mx: 'auto' 
                }}>
                  <img 
                    src={certificates[selected].image} 
                    alt={certificates[selected].name} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                  />
                </Box>
                <IconButton 
                  onClick={handleNext} 
                  size="large" 
                  sx={{ 
                    position: 'absolute', 
                    right: { xs: 4, sm: -56 }, 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    zIndex: 2, 
                    bgcolor: '#222', 
                    color: 'primary.main', 
                    '&:hover': { bgcolor: 'primary.main', color: '#fff' }, 
                    p: { xs: 1, sm: 2 } 
                  }}
                >
                  <ArrowForwardIosIcon fontSize="large" />
                </IconButton>
              </Box>
              <Typography variant="h6" fontWeight={800} color="#444" sx={{ mt: 1, fontSize: { xs: '1.1rem', sm: '1.2rem' } }}>
                {certificates[selected].name}
              </Typography>
              <Typography variant="subtitle2" color="primary.main" fontWeight={400} sx={{ fontSize: { xs: '0.95rem', sm: '1.05rem' } }}>
                {certificates[selected].subtitle}
              </Typography>
              <Typography variant="body2" color="#444" sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' } }}>
                {certificates[selected].detail}
              </Typography>
        
              <Box sx={{ 
                display: 'flex', 
                gap: 1, 
                mt: 3, 
                justifyContent: 'center', 
                flexWrap: 'wrap',
                width: '100%',
                px: { xs: 1, sm: 0 }
              }}>
                {certificates.map((cert, idx) => (
                  <Box
                    key={cert.image}
                    onClick={() => setSelected(idx)}
                    sx={{
                      width: { xs: 60, sm: 70 },
                      height: { xs: 45, sm: 50 },
                      borderRadius: 1,
                      overflow: 'hidden',
                      border: idx === selected ? '2px solid' : '2px solid transparent',
                      borderColor: idx === selected ? 'primary.main' : 'transparent',
                      boxShadow: idx === selected ? '0 2px 8px 0 rgba(0,255,0,0.15)' : 'none',
                      cursor: 'pointer',
                      bgcolor: '#fff',
                      transition: 'border-color 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      m: 0.5,
                    }}
                  >
                    <img src={cert.image} alt={cert.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>




        </Box>
      </Box>
    </Box>
  );
};

export default EducationSection; 