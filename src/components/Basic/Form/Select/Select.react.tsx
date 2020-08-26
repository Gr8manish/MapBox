import { History } from 'history';
import React from 'react';
import { Control } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SelectItemType } from '.';
import SelectView from './SelectView.react';

interface Props {
  history?: History;
  label?: string;
  name: string;
  data: SelectItemType[];
  className?: string;
  control: Control<Record<string, any>>;
  error?: boolean;
  disabled?: boolean;
  helperText?: React.ReactNode;
}

const Select: React.FC<Props> = (props: Props) => {
  return <SelectView {...props} />;
};

Select.defaultProps = {};

export default compose<Props, Props>(withRouter)(Select);
