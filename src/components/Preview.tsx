import React, { FunctionComponent } from 'react';
import { useTyping } from '../state';

export const Preview: FunctionComponent = () => {
  const {
    state: { text },
  } = useTyping();

  return <div>{text}</div>;
};
