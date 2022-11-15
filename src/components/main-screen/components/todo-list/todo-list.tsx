import { useAppSelector } from 'hooks';
import { getMockTasks } from 'mock';
import { PropsWithChildren } from 'react';
import { getTasks } from 'store/task-operations/selectors';
import TodoInputField from '../todo-input-field/todo-input-field';
import * as S from './todo-list.styled';

type TodoListProps = PropsWithChildren<{
  children?: JSX.Element;
}>;

const TodoList = ({ children, ...props }: TodoListProps) => {

  const tasksInList = useAppSelector(getTasks);

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
        {((tasksInList.length === 0) ?
          getMockTasks :
          tasksInList)
          .map((item) => (
            <S.TaskContainer key={item.id as keyof object}>
              <S.TaskLabel>
                <S.TaskInputCheckbox
                  onClick={() => {
                    onActiveLinkClick(item);
                  }}
                  defaultChecked={item.isActive}
                >
                </S.TaskInputCheckbox>
                <S.TaskIndicator></S.TaskIndicator>
                {item.value}
              </S.TaskLabel>
            </S.TaskContainer>
          ))}
      </S.TaskList>
    </S.TasksWrapper>
  );
};


export default TodoList;
