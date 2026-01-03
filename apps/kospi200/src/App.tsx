import React from 'react';
import { ModalProvider, ThemeProvider, ThemeToggleButton, ToastProvider } from '@imspdr/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ColorDemo from './components/ColorDemo';
import Dashboard from './components/Dashboard/Dashboard';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ToastProvider>
          <ModalProvider>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
                <ThemeToggleButton />
              </div>
              <Dashboard />
              <ColorDemo />
            </div>
          </ModalProvider>
        </ToastProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
