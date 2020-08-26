interface SubmitButtonState { }

enum SubmitButtonStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type SubmitButtonStateAction = {
  type: SubmitButtonStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const submitButtonStateInit = (
  initialState: SubmitButtonState,
): SubmitButtonState => {
  return {
    ...initialState
  };
};

const submitButtonReducer = (
  state: SubmitButtonState,
  action: SubmitButtonStateAction,
): SubmitButtonState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  SubmitButtonStateActionType,
  submitButtonStateInit,
  submitButtonReducer,
};