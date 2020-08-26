import LoadingView from 'components/Basic/LoadingView';
import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

const Home = lazy(() => import('../routes/home'));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingView />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
