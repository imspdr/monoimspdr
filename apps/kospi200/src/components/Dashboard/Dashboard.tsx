import React from 'react';
import { Button, useTheme, Stack } from '@imspdr/ui';
import { Title, Description, ButtonGroup } from './styled';

const Dashboard = () => {
  const { mode } = useTheme();

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      padding="40px"
      gap="20px"
      margin="20px"
      width="100%"
      style={{
        backgroundColor: 'var(--imspdr-card-card1)',
        borderRadius: '12px',
        border: '1px solid var(--imspdr-background-bg3)',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      }}
    >
      <Title>KOSPI 200 Dashboard</Title>
      <Description>
        Current Theme: <strong>{mode}</strong>
      </Description>
      <ButtonGroup>
        <Button onClick={() => alert('Hello from KOSPI 200 Dashboard!')}>Action</Button>
      </ButtonGroup>
    </Stack>
  );
};

export default Dashboard;
