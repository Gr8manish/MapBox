import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { ButtonType } from '.';
import ButtonView from './ButtonView.react';

interface Props {
  history?: History;
  children: React.ReactNode;
  onClick?: () => void;
  type?: ButtonType;
}

const Button: React.FC<Props> = (props: Props) => {
  return <ButtonView {...props} />;
};

Button.defaultProps = {};

export default compose<Props, Props>(withRouter)(Button);
