interface LatitudeLongitudeDropdownsState { }

enum LatitudeLongitudeDropdownsStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type LatitudeLongitudeDropdownsStateAction = {
  type: LatitudeLongitudeDropdownsStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const latitudeLongitudeDropdownsStateInit = (
  initialState: LatitudeLongitudeDropdownsState,
): LatitudeLongitudeDropdownsState => {
  return {
    ...initialState
  };
};

const latitudeLongitudeDropdownsReducer = (
  state: LatitudeLongitudeDropdownsState,
  action: LatitudeLongitudeDropdownsStateAction,
): LatitudeLongitudeDropdownsState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  LatitudeLongitudeDropdownsStateActionType,
  latitudeLongitudeDropdownsStateInit,
  latitudeLongitudeDropdownsReducer,
};