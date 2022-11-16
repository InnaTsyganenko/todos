import { DEFAULT_FILTER } from 'const';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getMockTasks } from 'mock';
import { PropsWithChildren } from 'react';
import { getActiveFilter, getFiltredMovies, getTasks } from 'store/task-operations/selectors';
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

  const selectedFilter = useAppSelector(getActiveFilter);
  const filtredItems = useAppSelector(getFiltredMovies);

  return (
    <S.TaskListWrapper>
      <TodoInputField />
      <S.TaskList>
        {((tasksInList.length === 0)
          ? getMockTasks
          : (selectedFilter === DEFAULT_FILTER)
            ? tasksInList
            : filtredItems)
              .map((item) => (
                <S.TaskItem
                  key={item.id as keyof object}
                  onClick={() => handleChangeStatus(item.id)}
                >
                  <S.TaskInputCheckbox
                    onChange={() => handleChangeStatus(item.id)}
                    checked={item.isCompleted}
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
