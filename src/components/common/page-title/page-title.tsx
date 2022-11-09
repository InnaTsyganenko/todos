import { PropsWithChildren } from 'react';
import * as S from './page-title.styled';

type TodoListTitleProps = PropsWithChildren<{
  children?: string;
}>;

const PageTitle = ({ children, ...props }: TodoListTitleProps) => (
  <S.TodoListTitle {...props}>{children}</S.TodoListTitle>
);

export default PageTitle;
