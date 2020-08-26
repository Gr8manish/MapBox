import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import SeoView from './SeoView.react';

interface Props {
  history?: History;
}

const Seo: React.FC<Props> = (props: Props) => {
  return <SeoView {...props} />;
};

Seo.defaultProps = {};

export default compose<Props, Props>(withRouter)(Seo);
