import React from 'react';
import {
  RouteProps as ReactDOMRouterProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouterProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  // **** isPrivate === !!user ******
  // true/true = OK
  // true/false = Redirect to signIn
  // false/true = Redirect to dashboard
  // false/false OK
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => (isPrivate === !!user ? (
        <Component />
      ) : (
        <Redirect to={{
          pathname: isPrivate ? '/' : '/dashboard',
          state: { from: location },
        }}
        />
      ))}
    />
  );
};

export default Route;
