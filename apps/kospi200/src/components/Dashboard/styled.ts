import styled from '@emotion/styled';

export const Container = styled.div`
  text-align: center;
  background-color: var(--imspdr-card-card1);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  border: 1px solid var(--imspdr-background-bg3);
`;

export const Title = styled.h1`
  color: var(--imspdr-mint-mint1);
`;

export const Description = styled.p`
  color: var(--imspdr-foreground-fg2);
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  color: var(--imspdr-foreground-fg1);
`;

export const Th = styled.th`
  text-align: left;
  padding: 12px;
  border-bottom: 2px solid var(--imspdr-background-bg3);
  color: var(--imspdr-foreground-fg2);
`;

export const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid var(--imspdr-background-bg3);
`;

export const BuySignal = styled.span<{ toBuy: boolean }>`
  color: ${props => props.toBuy ? 'var(--imspdr-danger-danger1)' : 'inherit'};
  font-weight: ${props => props.toBuy ? 'bold' : 'normal'};
`;

export const SignalBadge = styled.span`
  background-color: var(--imspdr-danger-danger1);
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: bold;
  margin-right: 4px;
  text-transform: uppercase;
`;

export const Top10Label = styled.span`
  background-color: var(--imspdr-primary-primary1);
  color: white;
  padding: 1px 4px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: bold;
  margin-right: 8px;
  vertical-align: middle;
`;
