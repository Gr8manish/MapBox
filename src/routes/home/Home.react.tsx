import { AppContext } from 'app';
import LoadingView from 'components/Basic/LoadingView';
import { History, Location } from 'history';
import React from 'react';
import { match, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import HomeView from './HomeView.react';

interface Props {
  location: Location;
  match: match;
  history?: History;
}

const Home: React.FC<Props> = (props: Props) => {
  const [appState] = React.useContext(AppContext);
  // const homeData = useFetchHomeData(
  //   props.location.pathname,
  //   props.match.params,
  // );

  if (appState.isLoading) {
    return <LoadingView />;
  }

  return <HomeView />;
};

Home.defaultProps = {};

export default compose<Props, Props>(withRouter)(Home);
