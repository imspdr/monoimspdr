import React from 'react';
import { Button } from '@imspdr/ui';
import { Global, css } from '@emotion/react';

const App = () => {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            font-family:
              -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
              Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-color: #f0f2f5;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
        `}
      />
      <div style={{ textAlign: 'center' }}>
        <h1>KOSPI 200 Dashboard</h1>
        <p>This is a starting project for KOSPI 200 data analysis.</p>
        <Button onClick={() => alert('Hello from @imspdrui!')}>Click Me</Button>
      </div>
    </>
  );
};

export default App;
