import TextField from '@material-ui/core/TextField';
import cx from 'classnames';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './TextField.module.scss';
import { textFieldReducer, textFieldStateInit } from './TextFieldReducer';

interface Props {
  history?: History;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  error?: boolean;
  type?: string;
  register?: object;
  helperText?: React.ReactNode;
  defaultValue?: any;
  InputLabelProps?: object;
}

const TextFieldView: React.FC<Props> = (props: Props, ...rest) => {
  const [TextFieldState, dispatch] = React.useReducer(
    textFieldReducer,
    {},
    textFieldStateInit,
  );

  return (
    <TextField
      label={props.label}
      variant="outlined"
      className={cx({
        [s.TextFieldView]: true,
        [props.className]: props.className,
      })}
      required={props.required}
      placeholder={props.placeholder || props.label}
      type={props.type}
      name={props.name}
      inputRef={props.register as React.Ref<any>}
      error={props.error}
      helperText={props.helperText}
      defaultValue={props.defaultValue}
      InputLabelProps={props.InputLabelProps}
    />
  );
};

export default compose<Props, Props>(withRouter)(TextFieldView);
