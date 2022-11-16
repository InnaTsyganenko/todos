import { useAppDispatch, useAppSelector } from 'hooks';
import { getMockTasks } from 'mock';
import { PropsWithChildren } from 'react';
import { getFiltredMovies, getTasks } from 'store/task-operations/selectors';
import { changeTaskStatus } from 'store/task-operations/task-operations';
import TodoFooter from '../todo-footer/todo-footer';
import TodoInputField from '../todo-input-field/todo-input-field';
import * as S from './todo-list.styled';

type TodoListProps = PropsWithChildren<{
  children?: JSX.Element;
}>;

const TodoList = ({ children, ...props }: TodoListProps) => {

  const tasksInList = useAppSelector(getTasks);

  const dispatch = useAppDispatch();

  const handleChangeStatus = (id: string) => dispatch(changeTaskStatus(id));

  const filtredItems = useAppSelector(getFiltredMovies);

  console.log(filtredItems)

  return (
    <S.TaskListWrapper>
      <TodoInputField />
      <S.TaskList>
        {((tasksInList.length === 0) ?
          getMockTasks :
          tasksInList)
          .map((item) => (
            <S.TaskItem
              key={item.id as keyof object}
              onClick={() => handleChangeStatus(item.id)}
            >
              <S.TaskInputCheckbox
                onChange={() => handleChangeStatus(item.id)}
                checked={item.isActive}
              >
              </S.TaskInputCheckbox>
              <S.TaskLabel>{item.value}</S.TaskLabel>
            </S.TaskItem>
          ))}
      </S.TaskList>
      <TodoFooter></TodoFooter>
    </S.TaskListWrapper>
  );
};


export default TodoList;
