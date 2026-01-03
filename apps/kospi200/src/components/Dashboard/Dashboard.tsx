import React, { useState, useEffect } from 'react';
import { useTheme, Stack, Button, useToast } from '@imspdr/ui';
import { Title, Description, ButtonGroup, Table, Th, Td, SignalBadge, Top10Label } from './styled';
import { useStocks, useStockDetail, Stock } from '../../hooks/useKospiData';

const Dashboard = () => {
  const { mode } = useTheme();
  const { showToast } = useToast();
  const { data: stocks, isLoading, isError, refetch } = useStocks();
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  const handleRefresh = () => {
    refetch().then(() => {
      showToast('주식 데이터가 성공적으로 갱신되었습니다.');
    });
  };

  // Identify top 10 stocks with the biggest change magnitude
  const processedStocks = stocks ? [...stocks]
    .map(s => ({
      ...s,
      changePercent: Math.abs((s.today - s.last) / s.last) * 100
    }))
    .sort((a, b) => b.changePercent - a.changePercent) : [];

  const top10Codes = new Set(processedStocks.slice(0, 10).map(s => s.code));

  // Example of using the detail hook
  const { data: detail } = useStockDetail(selectedCode);

  useEffect(() => {
    if (detail) {
      console.log('Stock Detail updated:', detail);
    }
  }, [detail]);

  const handleRowClick = (code: string) => {
    setSelectedCode(code);
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
      <Title>KOSPI 200 Analysis</Title>
      <Description>
        Top 10 movers emphasized. Current Theme: <strong>{mode}</strong>
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
              <Th>Signals</Th>
            </tr>
          </thead>
          <tbody>
            {processedStocks.map((stock) => (
              <tr 
                key={stock.code} 
                onClick={() => handleRowClick(stock.code)}
                style={{ 
                  cursor: 'pointer',
                  backgroundColor: selectedCode === stock.code 
                    ? 'var(--imspdr-background-bg2)' 
                    : top10Codes.has(stock.code) 
                      ? 'rgba(var(--imspdr-primary-primary1-rgb), 0.05)' 
                      : 'transparent',
                  borderLeft: top10Codes.has(stock.code) ? '4px solid var(--imspdr-primary-primary1)' : 'none'
                }}
              >
                <Td>
                  {top10Codes.has(stock.code) && <Top10Label>TOP 10</Top10Label>}
                  {stock.name}
                </Td>
                <Td>{stock.code}</Td>
                <Td>{stock.today.toLocaleString()}원</Td>
                <Td style={{ color: stock.today >= stock.last ? 'var(--imspdr-danger-danger1)' : 'var(--imspdr-primary-primary1)' }}>
                  {stock.today >= stock.last ? '▲' : '▼'} {(stock.today - stock.last).toLocaleString()}원
                  ({((stock.today - stock.last) / stock.last * 100).toFixed(2)}%)
                </Td>
                <Td>
                  {stock.to_buy.length > 0 ? (
                    stock.to_buy.map(signal => (
                      <SignalBadge key={signal}>{signal}</SignalBadge>
                    ))
                  ) : '-'}
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <ButtonGroup>
        <Button onClick={handleRefresh}>데이터 갱신</Button>
      </ButtonGroup>
    </Stack>
  );
};

export default Dashboard;
