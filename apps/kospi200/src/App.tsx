import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, ToastProvider, ModalProvider, ThemeToggleButton } from '@imspdr/ui';
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
            </div>
          </ModalProvider>
        </ToastProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
