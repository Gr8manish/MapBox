/* eslint-disable react-hooks/rules-of-hooks */
import Seo from 'components/Basic/Seo';
import { History, Location } from 'history';
import React from 'react';
import { match, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './Home.module.scss';
import { homeReducer, homeStateInit } from './HomeReducer';

interface Props {
  location?: Location;
  match?: match;
  history?: History;
}

const HomeView: React.FC<Props> = (props: Props) => {
  const [homeState, dispatch] = React.useReducer(
    homeReducer,
    {},
    homeStateInit,
  );

  return (
    <div className={s.Home}>
      <Seo />
      Home
    </div>
  );
};

export default compose<Props, Props>(withRouter)(HomeView);
