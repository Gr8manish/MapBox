interface UnAuthenticatedRouteState { }

enum UnAuthenticatedRouteStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type UnAuthenticatedRouteStateAction = {
  type: UnAuthenticatedRouteStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const unAuthenticatedRouteStateInit = (
  initialState: UnAuthenticatedRouteState,
): UnAuthenticatedRouteState => {
  return {
    ...initialState
  };
};

const unAuthenticatedRouteReducer = (
  state: UnAuthenticatedRouteState,
  action: UnAuthenticatedRouteStateAction,
): UnAuthenticatedRouteState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  UnAuthenticatedRouteStateActionType,
  unAuthenticatedRouteStateInit,
  unAuthenticatedRouteReducer,
};