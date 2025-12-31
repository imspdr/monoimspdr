import React from 'react';
import { Button, useTheme, ThemeToggleButton } from '@imspdr/ui';
import { Container, Title, Description, ButtonGroup } from './styled';

const App = () => {
  const { mode } = useTheme();

  return (
    <Container>
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <ThemeToggleButton />
      </div>
      <Title>KOSPI 200 Dashboard</Title>
      <Description>
        Current Theme: <strong>{mode}</strong>
      </Description>
      <ButtonGroup>
        <Button onClick={() => alert('Hello from @imspdrui!')}>Action</Button>
      </ButtonGroup>
    </Container>
  );
};

export default App;
