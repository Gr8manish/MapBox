interface PrivateRouteState { }

enum PrivateRouteStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type PrivateRouteStateAction = {
  type: PrivateRouteStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const privateRouteStateInit = (
  initialState: PrivateRouteState,
): PrivateRouteState => {
  return {
    ...initialState
  };
};

const privateRouteReducer = (
  state: PrivateRouteState,
  action: PrivateRouteStateAction,
): PrivateRouteState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  PrivateRouteStateActionType,
  privateRouteStateInit,
  privateRouteReducer,
};