import { PropsWithChildren } from 'react';
import TodoInputField from '../todo-input-field/todo-input-field';
import * as S from './todo-list.styled';

type TodoListProps = PropsWithChildren<{
  children?: JSX.Element;
}>;

const TodoList = ({ children, ...props }: TodoListProps) => (
  <>
    <TodoInputField />
    <S.Tabs>
      <S.TabItem>jkjk</S.TabItem>
      <S.TabItem>jkjk</S.TabItem>
      <S.TabItem>jkjk</S.TabItem>
      <S.TabBtn>qqqqqq</S.TabBtn>
    </S.Tabs>
  </>
);


export default TodoList;
