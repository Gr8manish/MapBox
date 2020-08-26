interface TextAreaState {}

enum TextAreaStateActionType {
  DO_SOMETHING = 'DO_SOMETHING',
}

type TextAreaStateAction = {
  type: TextAreaStateActionType.DO_SOMETHING;
  actionSpecificArg: string;
};

const TextAreaStateInit = (initialState: TextAreaState): TextAreaState => {
  return {
    ...initialState,
  };
};

const TextAreaReducer = (
  state: TextAreaState,
  action: TextAreaStateAction,
): TextAreaState => {
  switch (action.type) {
    default:
      return state;
  }
};

export { TextAreaStateActionType, TextAreaStateInit, TextAreaReducer };
