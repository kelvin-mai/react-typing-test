import React, {
  createContext,
  FunctionComponent,
  useReducer,
  useContext,
  Dispatch,
} from 'react';

import { initialState, reducer, ActionTypes, Action, State } from './state';

export const typingContext = createContext<[State, Dispatch<Action<any>>]>([
  initialState,
  () => {},
]);

export const TypingProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <typingContext.Provider value={[state, dispatch]}>
      {children}
    </typingContext.Provider>
  );
};

export const useTyping = () => {
  const [state, dispatch] = useContext(typingContext);

  const onInput = (value: string) =>
    dispatch({ type: ActionTypes.ON_INPUT, payload: value });

  return { state, onInput };
};
