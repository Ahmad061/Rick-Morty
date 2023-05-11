import React from 'react'
import { Route, Redirect } from 'react-router-dom'
//import { ability } from './Can'
 
export const PrivateRoute = ({ Component, action, type, ...rest }) => (
  <Route {...rest} render={props => (
     <Component {...props} />
   /*  ability.can(action, type)
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/403', state: { from: props.location } }} /> */
  )} /> 
)
