export interface State {
  text: string;
  input: string;
  characters: number;
  seconds: number;
  timerId?: number;
}

export const initialState: State = {
  text:
    'Just some typing speed initial state words. Add some other text later, ok?',
  input: '',
  characters: 0,
  seconds: 0,
  timerId: undefined,
};

export enum ActionTypes {
  ON_INPUT,
}

export interface Action<T> {
  type: ActionTypes;
  payload?: T;
}

type Transducer = (state: State, action: Action<any>) => State;
type Reducer<T = any> = (state: State, payload: T) => State;

export const changeInput: Reducer<string> = (state, input) => ({
  ...state,
  input,
});

export const reducer: Transducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ON_INPUT:
      return changeInput(state, action.payload);
    default:
      return state;
  }
};
