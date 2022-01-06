import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Navigation from '../Navigation/Navigation';
import './Login.css'

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const {user, signInWithGoogle, loginUser, isLoading, authError} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const feild = e.target.name;
       const value = e.target.value;
       const newLoginData = {...loginData};
       newLoginData[feild] = value;
       setLoginData(newLoginData);
    }

    const handleSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);

    }


    return (
       <>
       <Navigation></Navigation>
        <div className="product-banner">
        <h1>LOGIN</h1>
        <h5>HOME <span className="text-danger mt-2">//Login</span></h5>
         </div>
        <Container style={{textAlign:'center', marginBottom:'20px'}}>
            <Grid container spacing={2}>
                <Grid sx={{mt:8}} item xs={12} md={12}>
                    <Typography variant="h4" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField 
                        sx={{width:'50%', m:1}}
                        name="email"
                        type="email"
                        onBlur={handleOnChange}
                        id="standard-basic"
                        label="Your Email"
                        variant="standard" />

                        <TextField 
                        sx={{width:'50%', m:1}}
                        name="password"
                        onBlur={handleOnChange}
                        id="standard-basic" 
                        label="Your Password" 
                        type="password"
                        variant="standard" />

                        <Button className="login-btn" sx={{width:'50%', m:1}} type="submit" variant="contained">Log In</Button>
                        <br/>

                        <NavLink 
                        style={{textDecoration:'none'}} 
                        to="/ragistration">
                        <Button type="submit" variant="text">New User? Please Register</Button>
                        </NavLink>

                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>---------------------</p>
                    <Button onClick={handleGoogleSignIn} type="submit" variant="contained">Google Sign In</Button>
                </Grid>
            </Grid>
        </Container>
       </>
    );
};

export default Login;