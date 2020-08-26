import { AppContext } from 'app';
import { History } from 'history';
import React from 'react';
import { RouteProps, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import PrivateRouteView from './PrivateRouteView.react';

interface Props extends RouteProps {
  history?: History;
}

const PrivateRoute: React.FC<Props> = (props: Props) => {
  const [appState] = React.useContext(AppContext);

  return <PrivateRouteView isLoading={appState.isLoading} {...props} />;
};

PrivateRoute.defaultProps = {};

export default compose<Props, Props>(withRouter)(PrivateRoute);
