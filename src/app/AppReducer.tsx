import produce from 'immer';

export interface AppState {
  isLoading: boolean;
}

enum AppStateActionType {
  SET_AUTH_USER = 'SET_AUTH_USER',
}

export interface AppStateAction {
  type: AppStateActionType;
}

const appStateInit = (initialState: AppState): AppState => {
  return {
    isLoading: false,
    ...initialState,
  };
};

const appReducer = (state: AppState, action: AppStateAction): AppState =>
  produce(state, draft => {
    switch (action.type) {
      case AppStateActionType.SET_AUTH_USER:
        break;
      default:
        draft.isLoading = false;
    }
  });

export { AppStateActionType, appStateInit, appReducer };
