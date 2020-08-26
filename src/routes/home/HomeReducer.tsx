export interface HomeState {}

enum HomeStateActionTypes {}

interface HomeStateAction {
  type: HomeStateActionTypes;
}

const homeStateInit = (initialState: HomeState): HomeState => {
  return {
    ...initialState,
  };
};

const homeReducer = (state: HomeState, action: HomeStateAction): HomeState => {
  switch (action.type) {
    default:
      return state;
  }
};

export { HomeStateActionTypes, homeStateInit, homeReducer };
