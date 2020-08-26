import LoadingView from 'components/Basic/LoadingView';
import React from 'react';
import { AppState, AppStateAction } from './AppReducer';
import { useFetchUserData } from './AppUtil';
import AppView from './AppView.react';

/**
 * Context for global state
 */
const AppContext: React.Context<[
  AppState,
  React.Dispatch<AppStateAction>,
]> = React.createContext(null);

interface Props {}

const App = (props: Props) => {
  const appData = useFetchUserData();

  if (appData.isLoading) {
    return <LoadingView />;
  }

  return <AppView {...props} />;
};

export default App;
export { AppContext };
