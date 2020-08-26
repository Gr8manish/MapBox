import { Button } from '@material-ui/core';
import cx from 'classnames';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { ButtonType } from '.';
import s from './Button.module.scss';
import { buttonReducer, buttonStateInit } from './ButtonReducer';

interface Props {
  history?: History;
  children: React.ReactNode;
  onClick?: () => void;
  type?: ButtonType;
}

const ButtonView: React.FC<Props> = (props: Props) => {
  const [buttonState, dispatch] = React.useReducer(
    buttonReducer,
    {},
    buttonStateInit,
  );

  return (
    <Button
      className={cx(s.Button, {
        [s[props.type]]: props.type,
      })}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default compose<Props, Props>(withRouter)(ButtonView);
