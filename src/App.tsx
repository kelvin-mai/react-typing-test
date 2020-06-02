import React from 'react';

import { TypingProvider } from './state/context';
import { UserInput } from './components/UserInput';
import { Preview } from './components/Preview';
import { SpeedInfo } from './components/SpeedInfo';

export const App = () => (
  <TypingProvider>
    <h1>Typing Speed Test</h1>
    <div className='container'>
      <div className='typing-test'>
        <Preview />
        <UserInput />
      </div>
      <SpeedInfo />
    </div>
  </TypingProvider>
);
