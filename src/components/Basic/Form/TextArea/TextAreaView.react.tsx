import { TextField } from '@material-ui/core';
import cx from 'classnames';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './TextArea.module.scss';
import { TextAreaReducer, TextAreaStateInit } from './TextAreaReducer';

interface Props {
  history?: History;
  label: string;
  className?: string;
  rows?: number;
}

const TextAreaView: React.FC<Props> = (props: Props) => {
  const [TextAreaState, dispatch] = React.useReducer(
    TextAreaReducer,
    {},
    TextAreaStateInit,
  );

  return (
    <TextField
      multiline
      variant="outlined"
      label={props.label}
      className={cx({
        [s.TextArea]: true,
        [props.className]: props.className,
      })}
      rows={props.rows}
    />
  );
};

export default compose<Props, Props>(withRouter)(TextAreaView);
