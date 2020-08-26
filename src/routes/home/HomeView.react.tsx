/* eslint-disable react-hooks/rules-of-hooks */
import markerPin from 'assets/icons/marker-pin.svg';
import Seo from 'components/Basic/Seo';
import LatitudeLongitudeDropdowns from 'components/LatitudeLongitudeDropdowns';
import { History, Location } from 'history';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import Autosuggest from 'react-autosuggest';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import { match, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './Home.module.scss';
import { homeReducer, homeStateInit } from './HomeReducer';

interface Props {
  location?: Location;
  match?: match;
  history?: History;
}

const HomeView: React.FC<Props> = (props: Props) => {
  const [homeState, dispatch] = React.useReducer(
    homeReducer,
    {},
    homeStateInit,
  );

  const MAPBOX_TOKEN =
    'pk.eyJ1IjoiamVldmFuc2lkaHUiLCJhIjoiY2tlYmtpeDRhMDlqaDJxbXZmbm1pYWppeCJ9.CR6mSrmsgrji7Z4-H4sgiQ';

  const mapRef = useRef();

  const [coordinates, setCoordinates] = useState<[number, number]>([
    -0.15591514,
    51.51830379,
  ]);

  const Map = useMemo(() => {
    return ReactMapboxGl({
      accessToken: MAPBOX_TOKEN,
    });
  }, []);

  const onClickMap = (map, evt) => {
    setCoordinates([evt.lngLat.lng, evt.lngLat.lat]);
  };

  const handleViewportChange = useCallback(newViewport => {
    console.log('newViewport) :>> ', newViewport);
  }, []);

  const handleGeocoderViewportChange = useCallback(
    newViewport => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange],
  );

  // Suggestions
  const [suggestions, setSuggestions] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const onSuggestionsFetchRequested = () => {};
  const getSuggestionValue = () => {};
  const renderSuggestion = () => {};
  const inputProps = {
    placeholder: 'Type a programming language',
    value: searchValue,
    onChange: (event, { newValue }) => setSearchValue(newValue),
  };

  return (
    <div className={s.Home}>
      <Seo />
      {/* TODO: Search by address */}
      <div className={s.AutoSuggest}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </div>

      {/* MapBox */}
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100vh',
          width: '100vw',
        }}
        center={coordinates}
        onClick={onClickMap}
        ref={mapRef}
      >
        <Marker coordinates={coordinates} anchor="bottom" className="MarkerPin">
          <img src={markerPin} className={s.MapBox__Marker} />
        </Marker>

        {/* Latitude and Longitude Input box */}
        <LatitudeLongitudeDropdowns
          lng={coordinates[0]}
          lat={coordinates[1]}
          setCoordinates={setCoordinates}
        />
      </Map>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(HomeView);
