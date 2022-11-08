import { PropsWithChildren } from 'react';
import * as S from './todo-input-field.styled';

type TodoListProps = PropsWithChildren<{
  children?: JSX.Element;
}>;

const TodoInputField = ({ children, ...props }: TodoListProps) => (
  <S.InputContainer>
    <S.InputField
      placeholder='What needs to be done?'
      value={''}
    >children
    </S.InputField>
  </S.InputContainer>
);


export default TodoInputField;
