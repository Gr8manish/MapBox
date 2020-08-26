import { History } from 'history';
import React from 'react';
import { RouteProps, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import LoadingViewReact from '../LoadingView';

interface Props extends RouteProps {
  history?: History;
  isLoading: boolean;
}

const UnAuthenticatedRouteView: React.FC<Props> = ({ isLoading, ...props }) => {
  const Component = props.component as React.ComponentType;

  if (isLoading) {
    return <LoadingViewReact />;
  } else {
    return <Component {...props} />;
  }
};

export default compose<Props, Props>(withRouter)(UnAuthenticatedRouteView);
