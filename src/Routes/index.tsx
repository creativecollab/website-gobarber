import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/cadastrar" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
