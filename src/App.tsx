import React from 'react';

import { TypingProvider } from './state/context';
import { UserInput } from './components/UserInput';
import { Preview } from './components/Preview';

export const App = () => (
  <TypingProvider>
    <div>Hello world</div>
    <Preview />
    <UserInput />
  </TypingProvider>
);
