import React, { Suspense, lazy } from 'react';
import { useTheme, Button, ThemeToggleButton } from '@imspdr/ui';
import { Layout, Header, HeaderTitle, HeaderSubTitle, Main, RemoteContainer } from './styled';

// @ts-ignore
const Kospi200App = lazy(() => import('kospi200/App'));

const App = () => {
  const { mode } = useTheme();

  return (
    <Layout>
      <Header>
        <div>
          <HeaderTitle>IMSPDR Shell ({mode.toUpperCase()})</HeaderTitle>
          <HeaderSubTitle>Micro-Frontend Orchestrator</HeaderSubTitle>
        </div>
        <ThemeToggleButton />
      </Header>

      <Main>
        <Suspense fallback={<div>Loading KOSPI 200 Remote...</div>}>
          <RemoteContainer>
            <Kospi200App />
          </RemoteContainer>
        </Suspense>
      </Main>
    </Layout>
  );
};

export default App;
