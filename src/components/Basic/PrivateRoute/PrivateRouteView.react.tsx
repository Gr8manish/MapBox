import { History } from 'history';
import React from 'react';
import { RouteProps, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import LoadingView from '../LoadingView';

interface Props extends RouteProps {
  history?: History;
  isLoading: boolean;
}

const PrivateRouteView: React.FC<Props> = ({ isLoading, ...props }) => {
  const Component = props.component as React.ComponentType;

  if (isLoading) {
    return <LoadingView />;
  } else {
    return <Component {...props} />;
  }
};

export default compose<Props, Props>(withRouter)(PrivateRouteView);
