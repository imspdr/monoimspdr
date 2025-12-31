import styled from '@emotion/styled';

export const Layout = styled.div`
  padding: 20px;
  min-height: 100vh;
`;

export const Header = styled.header`
  border-bottom: 2px solid var(--imspdr-mint-mint1);
  marginBottom: 40px;
  display: flex;
  justifyContent: space-between;
  alignItems: center;
  paddingBottom: 10px;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
`;

export const HeaderSubTitle = styled.p`
  color: var(--imspdr-foreground-fg3);
  margin: 5px 0 0 0;
`;

export const Main = styled.main``;

export const RemoteContainer = styled.div`
  border: 1px dashed var(--imspdr-foreground-fg3);
  padding: 20px;
  borderRadius: 8px;
  backgroundColor: var(--imspdr-background-bg2);
`;
