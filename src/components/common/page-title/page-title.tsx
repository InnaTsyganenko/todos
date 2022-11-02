import { PropsWithChildren } from 'react';
import * as S from './page-title.styled';

type PageTitleProps = PropsWithChildren<{
  children?: any;
}>;

const PageTitle = ({ children, ...props }: PageTitleProps) => (
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
