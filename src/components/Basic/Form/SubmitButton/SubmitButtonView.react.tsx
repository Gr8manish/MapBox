import { Button, CircularProgress } from '@material-ui/core';
import cx from 'classnames';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SubmitButtonType } from '.';
import s from './SubmitButton.module.scss';
import {
  submitButtonReducer,
  submitButtonStateInit,
} from './SubmitButtonReducer';

interface Props {
  history?: History;
  children: React.ReactNode;
  className?: string;
  type?: SubmitButtonType;
  disabled?: boolean;
  loading?: boolean;
}

const SubmitButtonView: React.FC<Props> = (props: Props) => {
  const [submitButtonState, dispatch] = React.useReducer(
    submitButtonReducer,
    {},
    submitButtonStateInit,
  );

  return (
    <Button
      type="submit"
      className={cx(s.Submit, {
        [props.className]: props.className,
        [s[props.type]]: props.type,
        [s.Disabled]: props.disabled,
      })}
      disabled={props.disabled}
    >
      {props.children}
      {props.loading && <CircularProgress className={s.LoadingIndicator} />}
    </Button>
  );
};

export default compose<Props, Props>(withRouter)(SubmitButtonView);
