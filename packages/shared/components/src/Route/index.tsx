import React from 'react';
import {
  Route as ReactDomRoute,
  RouteProps as ReactDomRouterProps,
  RouteComponentProps,
} from 'react-router-dom';

interface RouteProps extends ReactDomRouterProps {
  isPrivate?: boolean;
  component: React.ComponentType<RouteComponentProps>;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  return (
    <ReactDomRoute
      {...rest}
      render={({ location, ...props }) => {
        return <Component location={location} {...props} />;
      }}
    />
  );
};

export default Route;
