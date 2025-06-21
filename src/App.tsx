import React, { ErrorInfo, useState } from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import EducationSection from './components/Education/EducationSection';
import SkillsSection from './components/Skills/SkillsSection';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/common/Footer';
import { Box, Typography, Button, Container } from '@mui/material';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900.css';
import Navigation from './components/common/Navigation';
// Error boundary to catch any errors in child components
class ErrorBoundaryComponent extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by error boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ textAlign: 'center', p: 4, maxWidth: 600 }}>
            <Typography variant="h4" color="error" gutterBottom>
              Something went wrong
            </Typography>
            <Typography variant="body1" paragraph>
              There was an error loading the page. This might be due to missing resources like images or configuration files.
            </Typography>
            <Typography variant="body2" sx={{ mb: 3 }} color="textSecondary">
              Error: {this.state.error?.message}
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => window.location.reload()}
            >
              Reload Page
            </Button>
          </Box>
        </Container>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundaryComponent>
      <ThemeProvider>
        <div className="App">
          <HeroSection />
          <Navigation />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
          <Footer />
        </div>
      </ThemeProvider>
    </ErrorBoundaryComponent>
  );
}

export default App;
