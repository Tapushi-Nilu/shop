import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Ragistration from './component/Ragistration/Ragistration';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Dashboard from './component/Dashboard/Dashboard';
import Purchase from './component/Purchase/Purchase';

import Explore from './component/Explore/Explore';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path='/purchase/:serviceId'>
              <Purchase></Purchase>
            </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/ragistration">
            <Ragistration></Ragistration>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
        </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
