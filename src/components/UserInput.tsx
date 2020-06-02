import React, { FunctionComponent } from 'react';

import { useTyping } from '../state';

export const UserInput: FunctionComponent = () => {
  const {
    state: { input },
    onInput,
  } = useTyping();

  return <textarea value={input} onChange={(e) => onInput(e.target.value)} />;
};
