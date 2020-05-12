import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import FormDialog from './workinwithComponents/Dialog/Dialog';
import ButtonAppBar from './workinwithComponents/Navbar/NavBar';
import HomePage from './pages/homePage/homepage';
import LogIn from './workinwithComponents/LogIn/LogIn';
import SignUp from './workinwithComponents/Dialog/signUp';
import { AuthRoutes, PrivateRoutes } from './routes';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/homepage" />
      </Route>
      <AuthRoutes exact path="/homepage" component={HomePage} />
      <PrivateRoutes exact path="/login" component={LogIn} />
      <PrivateRoutes exact path="/signup" component={SignUp} />
    </Switch>
  </Router>
  );
}

export default App;
