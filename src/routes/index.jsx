// react libraries
import * as React from 'react';

// third party packages
import { Redirect, Route, Switch } from 'react-router-dom';

// components
import User from 'pages/User';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={User} />
    {/** other routes go here */}
    <Redirect to="/404"/>
  </Switch>
);

export default Routes;
