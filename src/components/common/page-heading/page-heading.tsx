import { PropsWithChildren } from 'react';
import * as S from './page-heading.styled';

type PageHeadingProps = PropsWithChildren<{
  children?: JSX.Element;
}>;

const PageHeading = ({ children, ...props }: PageHeadingProps) => (
  <S.PageHeading {...props}>{children}</S.PageHeading>
);

export default PageHeading;
