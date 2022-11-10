import { TaskExamples } from 'mock';
import { PropsWithChildren, useState } from 'react';
import * as S from './todo-input-field.styled';

type TodoListProps = PropsWithChildren<{
  children?: JSX.Element;
}>;

const TodoInputField = ({ children, ...props }: TodoListProps) => {

  const [isDatalistOpen, setDatalistOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleQuantityInput = (value: string) => {
    setInputValue(value);
  };

  return (
    <S.InputContainer>
      <S.InputFieldIcon width="16" height="22" viewBox="0 0 16 22"
        onClick={() => setDatalistOpen(!isDatalistOpen)}
      >
        <path fill="#E6E6E6" d="M15.512 11.392 4.952 22H.584L9.56 11.392.584.832h4.368l10.56 10.56Z"/>
      </S.InputFieldIcon>
      <S.InputField
        type="text"
        id="input-field"
        name="input-field"
        placeholder='What needs to be done?'
        autoComplete="off"
        value={inputValue}
        onClick={() => setDatalistOpen(!isDatalistOpen)}
        onFocus={() => setDatalistOpen(!isDatalistOpen)}
        onChange={(evt) => handleQuantityInput(evt.target.value)}
        onBlur={() => setDatalistOpen(false)}
      />
      {isDatalistOpen &&
      <S.InputList id="task-examples">
        {TaskExamples.map((item) =>
          (
            <S.InputListItem
              key={item}
              onClick={() => {
                setInputValue(item);
                setDatalistOpen(!isDatalistOpen);
              }}
            >{item}
            </S.InputListItem>
          )
        )}
      </S.InputList>}
    </S.InputContainer>
  );
};


export default TodoInputField;
