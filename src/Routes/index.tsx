import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Dashboard from '../Pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/cadastrar" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
