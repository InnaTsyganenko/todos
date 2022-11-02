import { PropsWithChildren } from 'react';
import * as S from './container.styled';

type ContainerProps = PropsWithChildren<{
  children?: JSX.Element;
}>;

const Container = ({ children, ...props }: ContainerProps) => (
  <S.Container {...props}>{children}</S.Container>
);

export default Container;
