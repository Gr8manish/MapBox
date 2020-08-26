interface SeoState { }

// TODO: Replace DO_SOMETHING with appropriate action or remove if no actions are needed.
enum SeoStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

/** TODO: Replace actionSpecificArg with appropriate argument for the action or remove if not needed.
  * Use union types (|) to specify signatures for other actions.
  */
type SeoStateAction = {
  type: SeoStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const seoStateInit = (
  initialState: SeoState,
): SeoState => {
  return {
    ...initialState
  };
};

const seoReducer = (
  state: SeoState,
  action: SeoStateAction,
): SeoState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  SeoStateActionType,
  seoStateInit,
  seoReducer,
};