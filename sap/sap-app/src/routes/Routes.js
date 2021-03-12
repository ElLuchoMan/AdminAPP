import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Principal from '../pages/Principal';
import Resumen from '../pages/Resumen'
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/resumen" component={Resumen}/>
        <Route exact path="/principal" component={Principal}/>
     </Switch>
   </BrowserRouter>
  );
}

export default Routes;
