interface LoadingViewState { }

// TODO: Replace DO_SOMETHING with appropriate action or remove if no actions are needed.
enum LoadingViewStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

/** TODO: Replace actionSpecificArg with appropriate argument for the action or remove if not needed.
  * Use union types (|) to specify signatures for other actions.
  */
type LoadingViewStateAction = {
  type: LoadingViewStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const loadingViewStateInit = (
  initialState: LoadingViewState,
): LoadingViewState => {
  return {
    ...initialState
  };
};

const loadingViewReducer = (
  state: LoadingViewState,
  action: LoadingViewStateAction,
): LoadingViewState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  LoadingViewStateActionType,
  loadingViewStateInit,
  loadingViewReducer,
};