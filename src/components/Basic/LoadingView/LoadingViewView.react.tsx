import React from 'react';
import { Orbitals } from 'react-spinners-css';
import s from './LoadingView.module.scss';
import { loadingViewReducer, loadingViewStateInit } from './LoadingViewReducer';

interface Props {}

const LoadingViewView: React.FC<Props> = (props: Props) => {
  const [loadingViewState, dispatch] = React.useReducer(
    loadingViewReducer,
    {},
    loadingViewStateInit,
  );

  return (
    <div className={s.LoadingView}>
      <Orbitals size={100} color="#793b86" />
    </div>
  );
};

export default LoadingViewView;
