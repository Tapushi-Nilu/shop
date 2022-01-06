import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import images from '../images/image.png';
import bg from '../images/bg2.png';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const appointmentBg ={
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode:'darken, luminosity',
    marginTop:175
}


const AppointmentBanner = () => {
    return (
        <div style={appointmentBg}>
            <Container>
                   <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%', marginTop:'-110px'}} src={images} alt=""/>
                </Grid>
                <Grid item xs={12} md={6} style={{display:'flex', alignItems:'center'}}>
                    <Box>
                        <Typography style={{color: '#eb3e32',fontSize: '48px',fontWeight: 300,letterSpacing: '0.14px'}} variant="h4">
                        Saving 50%
                        </Typography>
                        <Typography style={{color:'#fff',fontSize: '80px',
                        fontWeight: 700}} variant="h3">
                        All Online Store
                        </Typography>
                        <Typography style={{color: '#fff',fontSize: '24px',marginBottom: '44px',textTransform: 'uppercase'}} variant="h6">
                        OFFER AVAILABLE ALL SHOES & PRODUCTS
                        </Typography>
                        <button style={{ backgroundColor: '#eb3e32',border: '2px solid #eb3e32',color:'#fff',display: 'inline-block',fontWeight: 600,fontSize: '18px',padding: '15px 62px 15px'
                        }}>Shop Now</button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </Container>
        </div>
    );
};

export default AppointmentBanner;