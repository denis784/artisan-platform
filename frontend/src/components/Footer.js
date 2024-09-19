import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        px: 2, 
        mt: 'auto', 
        backgroundColor: '#f5f5f5', 
        width: '100%' 
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          EmpServe Artisan Platform
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <Link href="/about" color="inherit" sx={{ mx: 2 }}>
            About Us
          </Link>
          <Link href="/contact" color="inherit" sx={{ mx: 2 }}>
            Contact Us
          </Link>
          <Link href="/privacy" color="inherit" sx={{ mx: 2 }}>
            Privacy Policy
          </Link>
        </Box>
        <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} EmpServe. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
