import { getMockTasks } from 'mock';
import { PropsWithChildren } from 'react';
import TodoInputField from '../todo-input-field/todo-input-field';
import * as S from './todo-list.styled';

type TodoListProps = PropsWithChildren<{
  children?: JSX.Element;
}>;

const TodoList = ({ children, ...props }: TodoListProps) => {

  const onActiveLinkClick = (activeItem) => {
    // setIsActiveLink(activeItem);
    // if (activeItem === DEFAULT_TYPE) {
    //   dispatch(resetState());
    // } else {
    //   dispatch(getTypeForFilterQuests(Object.keys(defineQuestType).find(key => defineQuestType[key] === activeItem)));
    // }
  };

  return (
    <S.TasksWrapper>
      <TodoInputField />
      <S.TaskList>
        {getMockTasks.map((item) => (
          <S.TaskContainer key={item as keyof object}>
            <S.TaskInputCheckbox
              onClick={() => {
                onActiveLinkClick(item);
              }}
              checked={item.isActive}
            >
            </S.TaskInputCheckbox>
            <S.TaskLabel>{item.value}</S.TaskLabel>
          </S.TaskContainer>
        ))}
      </S.TaskList>
    </S.TasksWrapper>
  );
};


export default TodoList;
