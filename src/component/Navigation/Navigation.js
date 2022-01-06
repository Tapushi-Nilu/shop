import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navigation.css'
import logo from '../images/logo.png'

const Navigation = () => {
  const {user, logOut} = useAuth();
    return (

      <div className="header">
          <div className="container">
            <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                  <a class="navbar-brand" href="/home"><img className="logo" src={logo} alt="" /> Shome</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                    <NavLink className="menu" to='/home'>Home</NavLink>
                    <NavLink className="menu" to='/explore'>Explore More</NavLink>
                      {
                        user?.email ? 
                        <div style={{marginTop:'-6px'}}>
                          <NavLink className="menu" to="/dashboard">Dashboard</NavLink>
                          <button className="log-btn" onClick={logOut} color="inherit">Logout</button>
                        </div>
                        :
                        <Link to='/login'><button className="log-btn">Login<i class="fa fa-arrow-circle-right mx-2"></i></button>
                        </Link>

                      }
                    </div>
                  </div>
                </div>
              </nav>
              
            </div>
          </div>
      </div>


  );
};

export default Navigation;