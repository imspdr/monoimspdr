import React from 'react';
import styled from '@emotion/styled';

const DemoContainer = styled.div`
  padding: 20px;
  background: var(--imspdr-background-bg2);
  border: 1px solid var(--imspdr-mint-mint1);
  border-radius: 8px;
  margin: 20px;
`;

const DemoText = styled.p`
  color: var(--imspdr-foreground-fg1);
  font-size: 16px;
`;

const TokenBox = styled.div<{ colorVar: string }>`
  width: 50px;
  height: 50px;
  background: var(${(props) => props.colorVar});
  border-radius: 4px;
  display: inline-block;
  margin-right: 10px;
`;

const ColorDemo = () => {
  return (
    <DemoContainer>
      <DemoText>Color Token Usage Example (using CSS Variables)</DemoText>
      <div style={{ marginTop: '10px' }}>
        <TokenBox colorVar="--imspdr-mint-mint1" title="Mint 1" />
        <TokenBox colorVar="--imspdr-mint-mint2" title="Mint 2" />
        <TokenBox colorVar="--imspdr-background-bg3" title="Bg 3" />
      </div>
      <DemoText style={{ fontSize: '12px', color: 'var(--imspdr-foreground-fg3)' }}>
        These boxes use <code>var(--imspdr-...)</code> directly.
      </DemoText>
    </DemoContainer>
  );
};

export default ColorDemo;
