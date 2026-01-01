import React, { useState, useEffect } from 'react';
import { Button, useTheme, Stack } from '@imspdr/ui';
import { Title, Description, ButtonGroup, Table, Th, Td, BuySignal } from './styled';
import { useStocks, useStockDetail, Stock } from '../../hooks/useKospiData';

const Dashboard = () => {
  const { mode } = useTheme();
  const { data: stocks, isLoading, isError, refetch } = useStocks();
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  // Example of using the detail hook
  const { data: detail } = useStockDetail(selectedCode);

  useEffect(() => {
    if (detail) {
      console.log('Stock Detail updated:', detail);
    }
  }, [detail]);

  const handleRowClick = (code: string) => {
    setSelectedCode(code);
    alert(`Selected ${code}. Loading details (check console)...`);
  };

  if (isError) {
    return (
      <Stack padding="40px" alignItems="center">
        <Description>Failed to load stock data.</Description>
        <Button onClick={() => refetch()}>Retry</Button>
      </Stack>
    );
  }

  return (
    <Stack
      direction="column"
      alignItems="stretch"
      justifyContent="flex-start"
      padding="40px"
      gap="20px"
      margin="20px"
      width="100%"
      style={{
        backgroundColor: 'var(--imspdr-card-card1)',
        borderRadius: '12px',
        border: '1px solid var(--imspdr-background-bg3)',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        maxWidth: '1000px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Title>KOSPI 200 Buy Signals</Title>
      <Description>
        Daily crawling data from Naver Finance. Current Theme: <strong>{mode}</strong>
      </Description>

      {isLoading ? (
        <Description>Loading stock data...</Description>
      ) : (
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Code</Th>
              <Th>Price</Th>
              <Th>Change</Th>
              <Th>Signal</Th>
            </tr>
          </thead>
          <tbody>
            {stocks?.map((stock: Stock) => (
              <tr 
                key={stock.code} 
                onClick={() => handleRowClick(stock.code)}
                style={{ 
                  cursor: 'pointer',
                  backgroundColor: selectedCode === stock.code ? 'var(--imspdr-background-bg2)' : 'transparent'
                }}
              >
                <Td>{stock.name}</Td>
                <Td>{stock.code}</Td>
                <Td>{stock.today.toLocaleString()}원</Td>
                <Td style={{ color: stock.today >= stock.last ? 'var(--imspdr-danger-danger1)' : 'var(--imspdr-primary-primary1)' }}>
                  {stock.today >= stock.last ? '+' : ''}{(stock.today - stock.last).toLocaleString()}원
                </Td>
                <Td>
                  <BuySignal toBuy={stock.to_buy}>
                    {stock.to_buy ? 'BUY' : '-'}
                  </BuySignal>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <ButtonGroup>
        <Button onClick={() => refetch()}>Refresh Data</Button>
      </ButtonGroup>
    </Stack>
  );
};

export default Dashboard;
