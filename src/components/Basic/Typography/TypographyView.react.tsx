import cx from 'classnames';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { TypographyColor, TypographyType } from '.';
import s from './Typography.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
  type?: TypographyType;
  style?: React.CSSProperties;
  bold?: boolean;
  uppercase?: boolean;
  color?: TypographyColor;
}

const TypographyView: React.FC<Props> = (props: Props) => {
  const type = props.type || TypographyType.ROBOTO_16_REGULAR;
  return (
    <div
      className={cx({
        [props.className]: props.className,
        [s[type]]: s[type],
        [s['bold']]: props.bold,
        [s['uppercase']]: props.uppercase,
        [s[props.color]]: props.color,
      })}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default compose<Props, Props>(withRouter)(TypographyView);
