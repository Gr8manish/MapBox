import { AppContext } from 'app';
import { History } from 'history';
import React from 'react';
import { RouteProps, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import UnAuthenticatedRouteView from './UnAuthenticatedRouteView.react';

interface Props extends RouteProps {
  history?: History;
}

const UnAuthenticatedRoute: React.FC<Props> = (props: Props) => {
  const [appState] = React.useContext(AppContext);

  return <UnAuthenticatedRouteView isLoading={appState.isLoading} {...props} />;
};

UnAuthenticatedRoute.defaultProps = {};

export default compose<Props, Props>(withRouter)(UnAuthenticatedRoute);
