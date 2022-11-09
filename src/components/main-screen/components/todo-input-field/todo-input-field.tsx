import { TaskExamples } from 'mock';
import { PropsWithChildren, useState } from 'react';
import * as S from './todo-input-field.styled';

type TodoListProps = PropsWithChildren<{
  children?: JSX.Element;
}>;

const TodoInputField = ({ children, ...props }: TodoListProps) => {

  const [isDatalistOpen, setDatalistOpen] = useState(false);

  return (
    <S.InputContainer>
      <S.InputDatalistIcon width="16" height="22" viewBox="0 0 16 22"
        onClick={() => {
          document.getElementById('input-field')?.click();
          console.log(document.getElementById('input-field'));
        }}
      >
        <path fill="#E6E6E6" d="M15.512 11.392 4.952 22H.584L9.56 11.392.584.832h4.368l10.56 10.56Z"/>
      </S.InputDatalistIcon>
      <datalist id="data">
        {TaskExamples.map((item) =>
          <S.InputDatalistOption key={item} value={item} />
        )}
      </datalist>
      <S.InputField
        type="text"
        id="input-field"
        name="input-field"
        placeholder='What needs to be done?'
        autoComplete="off"
        list="data"
      />
    </S.InputContainer>
  );
};


export default TodoInputField;
