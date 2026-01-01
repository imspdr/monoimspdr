import React from 'react';
import { Button } from './index';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Box = () => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <Button variant="box" onClick={() => alert('Box Clicked!')}>Click Me (Box)</Button>
    <Button variant="box" disabled>Disabled Box</Button>
  </div>
);

export const Outlined = () => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <Button variant="outlined" onClick={() => alert('Outlined Clicked!')}>Click Me (Outlined)</Button>
    <Button variant="outlined" disabled>Disabled Outlined</Button>
  </div>
);

export const Comparison = () => (
  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
    <Button variant="box">Box</Button>
    <Button variant="outlined">Outlined</Button>
  </div>
);
