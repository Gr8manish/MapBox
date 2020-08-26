interface ButtonState { }

// TODO: Replace DO_SOMETHING with appropriate action or remove if no actions are needed.
enum ButtonStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

/** TODO: Replace actionSpecificArg with appropriate argument for the action or remove if not needed.
  * Use union types (|) to specify signatures for other actions.
  */
type ButtonStateAction = {
  type: ButtonStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const buttonStateInit = (
  initialState: ButtonState,
): ButtonState => {
  return {
    ...initialState
  };
};

const buttonReducer = (
  state: ButtonState,
  action: ButtonStateAction,
): ButtonState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  ButtonStateActionType,
  buttonStateInit,
  buttonReducer,
};