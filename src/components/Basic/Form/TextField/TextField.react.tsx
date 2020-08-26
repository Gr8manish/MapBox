import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import TextFieldView from './TextFieldView.react';

interface Props {
  history?: History;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  type?: string;
  register?: object;
  error?: boolean;
  helperText?: React.ReactNode;
  defaultValue?: any;
  InputLabelProps?: object;
}

const TextField: React.FC<Props> = (props: Props, ...rest) => {
  return <TextFieldView {...props} />;
};

TextField.defaultProps = {
  error: false,
};

export default compose<Props, Props>(withRouter)(TextField);
