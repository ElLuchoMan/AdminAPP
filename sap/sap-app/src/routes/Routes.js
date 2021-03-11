import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Resumen from '../pages/Resumen'


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/admin" component={Resumen}/>
     </Switch>
   </BrowserRouter>
  );
}

export default Routes;
