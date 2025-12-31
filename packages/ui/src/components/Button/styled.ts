import styled from '@emotion/styled';

export const StyledButton = styled.button`
  background-color: var(--imspdr-mint-mint1);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--imspdr-mint-mint2);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
