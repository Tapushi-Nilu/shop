import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Navigation from '../Navigation/Navigation';

const Ragistration = () => {
    
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnBlur = e => {
        const feild = e.target.name;
       const value = e.target.value;
       const newLoginData = {...loginData};
       newLoginData[feild] = value;
       setLoginData(newLoginData);
    }

    const handleSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert("Your password did't match")
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
<>

<Navigation></Navigation>
        <div className="product-banner">
        <h1>Register</h1>
        <h5>HOME <span className="text-danger mt-2">//Register</span></h5>
         </div>


        <Container style={{textAlign:'center', marginBottom:'20px'}}>
        <Grid container spacing={2}>
            <Grid sx={{mt:8}} item xs={12} md={12}>
                <Typography variant="h4" gutterBottom>
                    Register
                </Typography>
                { !isLoading && <form onSubmit={handleSubmit}>
                    <TextField 
                    sx={{width:'50%', m:1}}
                    name="name"
                    type="text"
                    onBlur={handleOnBlur}
                    id="standard-basic"
                    label="Your Name"
                    variant="standard" />

                    <TextField 
                    sx={{width:'50%', m:1}}
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    id="standard-basic"
                    label="Your Email"
                    variant="standard" />

                    <TextField 
                    sx={{width:'50%', m:1}}
                    name="password"
                    onBlur={handleOnBlur}
                    id="standard-basic" 
                    label="Your Password" 
                    type="password"
                    variant="standard" />

                    <TextField 
                        sx={{width:'50%', m:1}}
                        name="password2"
                        onBlur={handleOnBlur}
                        id="standard-basic" 
                        label="Retype Your Password" 
                        type="password"
                        variant="standard" />

                    <Button className="login-btn" sx={{width:'50%', m:1}} type="submit" variant="contained">Register</Button>
                    <br/>
                    <NavLink 
                    style={{textDecoration:'none'}} 
                    to="/login">
                    <Button type="submit" variant="text">Already Registered? Please Login</Button>
                    </NavLink>
                </form>}
                {isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
                
            </Grid>
        </Grid>
    </Container>
</>
    );
};

export default Ragistration;