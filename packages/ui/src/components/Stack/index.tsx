import React from 'react';
import { StyledStack, StackProps } from './styled';

export interface Props extends StackProps, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Stack: React.FC<Props> = ({ children, ...props }) => {
  return <StyledStack {...props}>{children}</StyledStack>;
};
