interface TextFieldState {}

enum TextFieldStateActionType {
  DO_SOMETHING = 'DO_SOMETHING',
}

type TextFieldStateAction = {
  type: TextFieldStateActionType.DO_SOMETHING;
  actionSpecificArg: string;
};

const textFieldStateInit = (initialState: TextFieldState): TextFieldState => {
  return {
    ...initialState,
  };
};

const textFieldReducer = (
  state: TextFieldState,
  action: TextFieldStateAction,
): TextFieldState => {
  switch (action.type) {
    default:
      return state;
  }
};

export { TextFieldStateActionType, textFieldStateInit, textFieldReducer };
