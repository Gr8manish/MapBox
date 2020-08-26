import React from 'react';
import LoadingViewView from './LoadingViewView.react';

interface Props {}

const LoadingView: React.FC<Props> = (props: Props) => {
  return <LoadingViewView {...props} />;
};

LoadingView.defaultProps = {};

export default LoadingView;
