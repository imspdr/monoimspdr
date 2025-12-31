import React from 'react';
import { ThemeToggleButton } from '@imspdr/ui';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <ThemeToggleButton />
      </div>
      <Dashboard />
    </div>
  );
};

export default App;
