import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Main} from '../screens'

export const Router = ()=> {
  return (
    <Switch>
        <Route path="/" component={Main} exact/>
    </Switch>
  )
}
