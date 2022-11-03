import { PropsWithChildren } from 'react';
import * as S from './todo-input-field.styled';

type TodoListProps = PropsWithChildren<{
  children?: JSX.Element;
}>;

const TodoInputField = ({ children, ...props }: TodoListProps) => (
  <S.InputField
    placeholder='What'
    value={''}
  >children
  </S.InputField>
);


export default TodoInputField;
