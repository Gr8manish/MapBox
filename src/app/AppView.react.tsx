import { History } from 'history';
import React from 'react';
import { AppContext } from './App.react';
import './App.scss';
import { appReducer, appStateInit } from './AppReducer';
import AppRouter from './AppRouter.react';

interface Props {
  history?: History;
}

const AppView: React.FC<Props> = (props: Props) => {
  const [appState, dispatch] = React.useReducer(
    appReducer,
    {
      isLoading: false,
    },
    appStateInit,
  );

  return (
    <div className="theme-light">
      <AppContext.Provider value={[appState, dispatch]}>
        <AppRouter />
      </AppContext.Provider>
    </div>
  );
};

export default AppView;
