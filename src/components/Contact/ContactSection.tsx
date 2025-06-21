import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  Paper,
  useTheme,
  IconButton,
  Snackbar,
  Alert,
  Link
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useThemeContext } from '../../theme/ThemeProvider';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';

const float = keyframes`
  0% { transform: translateY(0px); box-shadow: 0 4px 24px 0 rgba(0,255,0,0.10); }
  50% { transform: translateY(-8px); box-shadow: 0 12px 32px 0 rgba(156,246,38,0.18); }
  100% { transform: translateY(0px); box-shadow: 0 4px 24px 0 rgba(0,255,0,0.10); }
`;


const SectionContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundColor: theme.palette.background.default,
  position: 'relative',
  overflow: 'hidden',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontWeight: 700,
  position: 'relative',
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -8,
    left: 0,
    width: '40%',
    height: 4,
    backgroundImage: 'var(--primary-gradient)',
    borderRadius: 4,
  },
}));

const ContactPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: 16,
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  height: '100%',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
}));

const ContactInfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
}));

const ContactInfoIcon = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
  backgroundImage: 'var(--primary-gradient)',
  color: '#fff',
}));

const SocialIconsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginTop: theme.spacing(3),
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  width: 45,
  height: 45,
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
  '&:hover': {
    backgroundImage: 'var(--primary-gradient)',
    color: '#fff',
  },
}));

const ContactForm = styled('form')(({ theme }) => ({
  width: '100%',
}));

const ContactContainer = styled(Box)(({ theme }) => ({
  width: '90%',
  maxWidth: 1200,
  margin: '40px auto',
  borderRadius: 16,
  background: '#232323',
  boxShadow: '0 2px 24px 0 rgba(0,0,0,0.4)',
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(4),
  justifyContent: 'center',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    width: '100%',
    padding: theme.spacing(2),
    gap: theme.spacing(2),
    margin: '20px 0',
  },
}));

const FloatingBox = styled(Box)(({ theme }) => ({
  flex: 1,
  borderRadius: 12,
  background: '#222',
  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.25)',
  minHeight: 380,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    minHeight: 260,
    width: '100%',
    padding: theme.spacing(1),
  },
}));

const NeonContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  background: '#232323',
  borderRadius: 32,
  marginBottom: theme.spacing(3),
  boxShadow: `0 6px 0 0 ${theme.palette.primary.main}, 0 2px 24px 0 rgba(0,0,0,0.25)`,
  padding: theme.spacing(1.5, 3),
  color: '#bdbdbd',
  fontSize: '1.1rem',
  fontWeight: 500,
  position: 'relative',
  transition: 'box-shadow 0.3s',
}));

const ContactSection: React.FC = () => {
  const theme = useTheme();
  const { colorPalette } = useThemeContext();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormStatus('submitting');

    try {
      const templateParams = {
        to_email: 'buddhikamadhushan@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY' 
      );

      setFormStatus('success');
      setSnackbarMessage('Message sent successfully!');
      setOpenSnackbar(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
      setSnackbarMessage('Failed to send message. Please try again.');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', background: '#181818', display: 'flex', flexDirection: 'column', alignItems: 'center', py: 6 }} data-testid="contact-section" id="contact">
      <ContactContainer>
        <FloatingBox sx={{ mr: { md: 2, xs: 0 }, mb: { xs: 2, md: 0 } }}>
          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', px: { xs: 0.5, sm: 2, md: 4 }, py: 2, display: 'flex', flexDirection: 'column', gap: 2, boxShadow: '0px 4px 4px black' }}>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              InputProps={{ style: { color: '#fff', background: '#232323', borderRadius: 8, fontSize: '1rem' } }}
              InputLabelProps={{ style: { color: '#aaa', fontSize: '1rem' } }}
              sx={{ input: { color: '#fff', fontSize: { xs: '0.95rem', sm: '1rem' } } }}
            />
            <TextField
              name="email"
              label="E Mail"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{ style: { color: '#fff', background: '#232323', borderRadius: 8, fontSize: '1rem' } }}
              InputLabelProps={{ style: { color: '#aaa', fontSize: '1rem' } }}
              sx={{ input: { color: '#fff', fontSize: { xs: '0.95rem', sm: '1rem' } } }}
            />
            <TextField
              name="subject"
              label="Subject"
              variant="outlined"
              fullWidth
              value={formData.subject}
              onChange={handleChange}
              error={!!errors.subject}
              helperText={errors.subject}
              InputProps={{ style: { color: '#fff', background: '#232323', borderRadius: 8, fontSize: '1rem' } }}
              InputLabelProps={{ style: { color: '#aaa', fontSize: '1rem' } }}
              sx={{ input: { color: '#fff', fontSize: { xs: '0.95rem', sm: '1rem' } } }}
            />
            <TextField
              name="message"
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              InputProps={{ style: { color: '#fff', background: '#232323', borderRadius: 8, fontSize: '1rem' } }}
              InputLabelProps={{ style: { color: '#aaa', fontSize: '1rem' } }}
              sx={{ textarea: { color: '#fff', fontSize: { xs: '0.95rem', sm: '1rem' } } }}
            />
            <Button
              type="submit"
              variant="contained"
              color="inherit"
              disabled={formStatus === 'submitting'}
              sx={{
                mt: 2,
                fontWeight: 700,
                borderRadius: 2,
                background: '#888',
                color: '#fff',
                border: '1px solid #fff',
                boxShadow: 'none',
                '&:hover': { background: '#aaa', color: '#222' },
                py: 1.2,
                fontSize: { xs: '0.95rem', sm: '1rem' }
              }}
              startIcon={<EmailIcon />}
            >
              {formStatus === 'submitting' ? 'SENDING...' : 'SEND MAIL'}
            </Button>
          </Box>
        </FloatingBox>
  
        <FloatingBox sx={{ ml: { md: 2, xs: 0 }, justifyContent: 'flex-start', px: { xs: 0.5, sm: 2, md: 4 }, py: 2 }}>
          <Typography variant="h5" fontWeight={900} sx={{ color: '#fff', mb: 2, letterSpacing: 1, textTransform: 'uppercase', borderBottom: '3px solid #fff', display: 'inline-block', pb: 0.5, fontSize: { xs: '1.2rem', sm: '1.4rem' } }}>
            CONTACT
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Box>
            <NeonContactItem sx={{ fontSize: { xs: '0.95rem', sm: '1.1rem' }, px: { xs: 2, sm: 3 } }}>
              <EmailIcon sx={{ fontSize: 28, mr: 2 }} />
              buddhikamadhushan@gmail.com
            </NeonContactItem>

            </Box>
            
            <NeonContactItem sx={{ fontSize: { xs: '0.95rem', sm: '1.1rem' }, px: { xs: 2, sm: 3 } }}>
              <PhoneIcon sx={{ fontSize: 28, mr: 2 }} />
              +94 72 96 51 810
            </NeonContactItem>
            <NeonContactItem sx={{ fontSize: { xs: '0.95rem', sm: '1.1rem' }, px: { xs: 2, sm: 3 } }}>
              <GitHubIcon sx={{ fontSize: 28, mr: 2 }} />
              https://github.com/Madhushan404
            </NeonContactItem>
            <NeonContactItem sx={{ fontSize: { xs: '0.95rem', sm: '1.1rem' }, px: { xs: 2, sm: 3 } }}>
              <LinkedInIcon sx={{ fontSize: 28, mr: 2 }} />
              www.linkedin.com/in/buddhika-madhushan-b5067b319
            </NeonContactItem>
          </Box>
        </FloatingBox>
      </ContactContainer>
      
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={formStatus === 'success' ? 'success' : 'error'}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection; 