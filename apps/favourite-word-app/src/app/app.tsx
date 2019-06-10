import React from 'react';
import {Button} from '@nx-test/ui';
import './app.css';
import {submitWord} from '../api/app-api';

export const App = () => {
  return (
    <div>
      <header style={{ textAlign: 'center' }}>
        <h1>Tell us your favourite word</h1>
      </header>

    </div>
  );
};

export default App;
