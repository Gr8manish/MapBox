import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SubmitButtonType } from '.';
import SubmitButtonView from './SubmitButtonView.react';

interface Props {
  history?: History;
  children: React.ReactNode;
  className?: string;
  type?: SubmitButtonType;
  disabled?: boolean;
  loading?: boolean;
}

const SubmitButton: React.FC<Props> = (props: Props) => {
  return <SubmitButtonView {...props} />;
};

SubmitButton.defaultProps = {};

export default compose<Props, Props>(withRouter)(SubmitButton);
