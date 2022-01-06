import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import logo from '../images/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import {
    Switch,
    Route,
    useRouteMatch,
    NavLink,
    Link,
  } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../hooks/useAuth';
import Myorder from '../Myorder/Myorder';
import AddProduct from '../AddProduct/AddProduct';
import Pay from '../Pay/Pay';
import ManageService from '../ManageService/ManageService';
import './Dashboard.css'
import Review from '../Review/Review';

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin, logOut} = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let { path, url } = useRouteMatch();


  const drawer = (
    <div className="app-bar">
      {/* <Toolbar />
      <Divider /> */}

    {
      !admin && <Box>
            <NavLink className="d-menu" to={`${url}/myorders`}>My Orders</NavLink>
            <br/>
          <NavLink className="d-menu" to={`${url}/pay`}>Pay</NavLink>
          <br/>
         <NavLink className="d-menu" to={`${url}/review`}>Review</NavLink>
      </Box>
    }

      {admin && <Box>
        <br/>
            <NavLink className="d-menu" to={`${url}/allorders`}>Manage All Orders</NavLink><br/>
            <NavLink className="d-menu" to={`${url}/makeadmin`}>Make Admin</NavLink> <br/>
            <NavLink className="d-menu" to={`${url}/addproduct`}>Add Products</NavLink> <br/> <br/>
            <button className="log-btn" onClick={logOut} color="inherit">Logout</button>
        </Box>}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{backgroundColor: '#eb3e32'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           <Link to='/home' className="dash-logo"><img className="logo" src={logo} alt="" /> Shome</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
      <Switch>
        {/* <Route exact path={path}>
        <Myorder></Myorder>
        </Route> */}
        <Route exact path={`${path}/myorders`}>
            <Myorder></Myorder>
        </Route>
        <Route path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${url}/addproduct`}>
            <AddProduct></AddProduct>
        </Route>
        <Route path={`${url}/pay`}>
          <Pay></Pay>
        </Route>
        <Route path={`${url}/allorders`}>
          <ManageService></ManageService>
        </Route>
        <Route path={`${url}/review`}>
          <Review></Review>
        </Route>
      </Switch>


      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
