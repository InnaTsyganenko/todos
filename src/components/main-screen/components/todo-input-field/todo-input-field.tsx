import { useAppDispatch } from 'hooks';
import { TaskExamples } from 'mock';
import { PropsWithChildren, useState } from 'react';
import { setTaskInList } from 'store/task-operations/task-operations';
import * as S from './todo-input-field.styled';

type TodoListProps = PropsWithChildren<{
  children?: JSX.Element;
}>;

const TodoInputField = ({ children, ...props }: TodoListProps) => {

  const dispatch = useAppDispatch();
  const [isDatalistOpen, setDatalistOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (evt: any) => {
    setInputValue(evt.target.value);
    setDatalistOpen(false);
  };

  const handleInputKeyDown = (evt: any) => {
    if (evt.key === 'Enter') {
      dispatch(setTaskInList(evt.target.value));
      setDatalistOpen(false);
      setInputValue('');
    }
  };

  const handleInputFocus = (evt: any) => {
    setDatalistOpen(true);
    return evt.target !== undefined ? evt.target.select() : false;
  };

  const handleListItemClick = (value: string) => {
    dispatch(setTaskInList(value));
    setDatalistOpen(false);
    setInputValue('');
  };

  const handleListItemKeyDown = (evt: any, value: string) => {
    if (evt.key === 'Enter') {
      dispatch(setTaskInList(value));
      setDatalistOpen(false);
      setInputValue('');
    }
  };

  return (
    <S.InputContainer onMouseLeave={() => setDatalistOpen(false)}>
      <S.InputInputLabel htmlFor='input-field'>
        <S.InputFieldIcon width='16' height='22' viewBox='0 0 16 22'>
          <path fill='#E6E6E6' d='M15.512 11.392 4.952 22H.584L9.56 11.392.584.832h4.368l10.56 10.56Z'/>
        </S.InputFieldIcon>
      </S.InputInputLabel>
      <S.InputField
        type='text'
        id='input-field'
        name='input-field'
        placeholder='What needs to be done?'
        autoComplete='off'
        onFocus={handleInputFocus}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        value={inputValue}
      />
      {isDatalistOpen &&
      <S.InputList id='task-examples'>
        {TaskExamples.map((item) =>
          (
            <S.InputListItem
              key={item}
              tabIndex={0}
              onKeyDown={(evt) => handleListItemKeyDown(evt, item)}
              onClick={() => handleListItemClick(item)}
            >{item}
            </S.InputListItem>
          )
        )}
      </S.InputList>}
    </S.InputContainer>
  );
};


export default TodoInputField;
