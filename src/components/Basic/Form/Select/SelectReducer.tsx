interface SelectState { }

enum SelectStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type SelectStateAction = {
  type: SelectStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const selectStateInit = (
  initialState: SelectState,
): SelectState => {
  return {
    ...initialState
  };
};

const selectReducer = (
  state: SelectState,
  action: SelectStateAction,
): SelectState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  SelectStateActionType,
  selectStateInit,
  selectReducer,
};