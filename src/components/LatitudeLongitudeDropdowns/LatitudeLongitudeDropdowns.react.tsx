import { History } from 'history';
import React, { Dispatch, SetStateAction } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import LatitudeLongitudeDropdownsView from './LatitudeLongitudeDropdownsView.react';

interface Props {
  history?: History;
  lng: number;
  lat: number;
  setCoordinates: Dispatch<SetStateAction<[number, number]>>;
}

const LatitudeLongitudeDropdowns: React.FC<Props> = (props: Props) => {
  return <LatitudeLongitudeDropdownsView {...props} />;
};

LatitudeLongitudeDropdowns.defaultProps = {};

export default compose<Props, Props>(withRouter)(LatitudeLongitudeDropdowns);
