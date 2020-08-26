import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import cx from 'classnames';
import { History } from 'history';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SelectItemType } from '.';
import s from './Select.module.scss';
import { selectReducer, selectStateInit } from './SelectReducer';

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

const SelectView: React.FC<Props> = (props: Props) => {
  const [selectState, dispatch] = React.useReducer(
    selectReducer,
    {},
    selectStateInit,
  );

  return (
    <FormControl
      variant="outlined"
      className={cx(s.Select, {
        [props.className]: props.className,
      })}
      error={props.error}
      disabled={props.disabled}
    >
      <InputLabel>{props.label}</InputLabel>
      <Controller
        name={props.name}
        control={props.control}
        defaultValue={10}
        as={
          <Select label={props.label}>
            {props.data.map(item => (
              <MenuItem value={item.value}>
                {item.text != undefined ? item.text : item.value}
              </MenuItem>
            ))}
          </Select>
        }
      />
      <FormHelperText>{props.helperText}</FormHelperText>
    </FormControl>
  );
};

export default compose<Props, Props>(withRouter)(SelectView);
