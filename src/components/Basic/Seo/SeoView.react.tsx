import { History } from 'history';
import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

interface Props {
  history?: History;
}

const SeoView: React.FC<Props> = (props: Props) => {
  return (
    <Helmet>
      <title>React</title>
      <meta
        name="description"
        content={`Valuable property attributes combined with a simple API allow investors and insurers to  better select properties, evaluate risk, and streamline underwriting processes.`}
      />
      {/* <meta
        name="robots"
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      /> */}
      {/* <link rel="canonical" href="https://yourapp.com" /> */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="React" />
      {/* <meta property="og:description" content="Lorem Ipsum" /> */}
      {/* <meta property="og:url" content="https://yourapp.com" /> */}
      <meta property="og:site_name" content="React" />
      {/* <meta property="og:image" content="yourimage.jpg" /> */}
      {/* <meta property="og:image:secure_url" content="yourimage.jpg" /> */}
      {/* <meta property="og:image:width" content="1280" /> */}
      {/* <meta property="og:image:height" content="720" /> */}
    </Helmet>
  );
};

export default compose<Props, Props>(withRouter)(SeoView);
