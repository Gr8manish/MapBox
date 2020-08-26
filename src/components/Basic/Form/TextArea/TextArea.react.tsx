import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import TextAreaView from './TextAreaView.react';

interface Props {
  history?: History;
  label: string;
  className?: string;
  rows?: number;
}

const TextArea: React.FC<Props> = (props: Props) => {
  return <TextAreaView {...props} />;
};

TextArea.defaultProps = {};

export default compose<Props, Props>(withRouter)(TextArea);
