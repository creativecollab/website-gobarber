import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from '../Pages/SignIn';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
