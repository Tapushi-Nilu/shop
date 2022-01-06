import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import './Banner.css'


const verticalCenter = {
    display:'flex',
    alignItems:'center',
    height:'400px'
}

const Banner = () => {
    return (
      <div className="banner">
            <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{...verticalCenter, textAlign:'left'}} item xs={12} md={6}>
                    <Box className="banner-left">
                    <h3>UP TO 30% OFF</h3>
                    <h2>EXCLUSIVE</h2>
                    <h1>NEW SHOES</h1>
                    <button className="b-btn">Shop Now</button>
                    </Box>
                   
                </Grid>
            </Grid>
        </Container>
      </div>
        
    );
};

export default Banner;