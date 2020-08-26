import React from 'react';
import { TypographyColor, TypographyType } from '.';
import TypographyView from './TypographyView.react';

interface Props {
  children: React.ReactNode;
  className?: string;
  type?: TypographyType;
  bold?: boolean;
  uppercase?: boolean;
  color?: TypographyColor;
  style?: React.CSSProperties;
}

const Typography: React.FC<Props> = (props: Props) => {
  return <TypographyView {...props} />;
};

Typography.defaultProps = {};

export default Typography;
