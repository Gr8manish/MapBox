interface TypographyState { }

// TODO: Replace DO_SOMETHING with appropriate action or remove if no actions are needed.
enum TypographyStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

/** TODO: Replace actionSpecificArg with appropriate argument for the action or remove if not needed.
  * Use union types (|) to specify signatures for other actions.
  */
type TypographyStateAction = {
  type: TypographyStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const typographyStateInit = (
  initialState: TypographyState,
): TypographyState => {
  return {
    ...initialState
  };
};

const typographyReducer = (
  state: TypographyState,
  action: TypographyStateAction,
): TypographyState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  TypographyStateActionType,
  typographyStateInit,
  typographyReducer,
};