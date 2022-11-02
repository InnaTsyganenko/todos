import React, { PropsWithChildren } from 'react';
import * as S from './button.styled';

type ButtonProps = PropsWithChildren<{
  children?: string;
}>;

const Button = ({ children, ...props }: ButtonProps) => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
