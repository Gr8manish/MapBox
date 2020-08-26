import { TextField } from '@material-ui/core';
import { History } from 'history';
import React, { Dispatch, SetStateAction } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './LatitudeLongitudeDropdowns.module.scss';
import {
  latitudeLongitudeDropdownsReducer,
  latitudeLongitudeDropdownsStateInit,
} from './LatitudeLongitudeDropdownsReducer';

interface Props {
  history?: History;
  lng: number;
  lat: number;
  setCoordinates: Dispatch<SetStateAction<[number, number]>>;
}

const LatitudeLongitudeDropdownsView: React.FC<Props> = (props: Props) => {
  const [latitudeLongitudeDropdownsState, dispatch] = React.useReducer(
    latitudeLongitudeDropdownsReducer,
    {},
    latitudeLongitudeDropdownsStateInit,
  );

  const isLatLongValid = str => {
    var reg = new RegExp('^-?([1-8]?[1-9]|[1-9]0).{1}d{1,6}');
    return reg.test(str);
  };

  return (
    <div className={s.LatitudeLongitudeDropdowns}>
      <div>
        <TextField
          label="Latitude"
          type="number"
          variant={'outlined'}
          value={props.lat}
          className={s.Latitude}
          onChange={e => {
            if (/^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,15}/g.test(e.target.value)) {
              props.setCoordinates([props.lng, Number(e.target.value)]);
            }
          }}
        />
        <TextField
          label="Longitude"
          type="number"
          variant={'outlined'}
          value={props.lng}
          onChange={e => {
            if (/^-?(([-+]?)([\d]{1,3})((\.)(\d+))?)/g.test(e.target.value)) {
              props.setCoordinates([Number(e.target.value), props.lat]);
            }
          }}
        />
      </div>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(
  LatitudeLongitudeDropdownsView,
);
