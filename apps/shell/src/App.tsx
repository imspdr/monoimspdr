import React, { Suspense, lazy } from 'react';
import { Global, css } from '@emotion/react';

// @ts-ignore
const Kospi200App = lazy(() => import('kospi200/App'));

const App = () => {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            font-family: sans-serif;
            background-color: #eef2f6;
          }
        `}
      />
      <div style={{ padding: '20px' }}>
        <header style={{ borderBottom: '2px solid #333', marginBottom: '20px' }}>
          <h1>IMSPDR Shell (Host)</h1>
          <nav>
            <p>Welcome to the Micro-Frontend Shell. Below is the KOSPI 200 remote.</p>
          </nav>
        </header>

        <Suspense fallback={<div>Loading KOSPI 200 Remote...</div>}>
          <div style={{ border: '2px dashed #666', padding: '10px' }}>
            <Kospi200App />
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default App;
