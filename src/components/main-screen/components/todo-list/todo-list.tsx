import { DEFAULT_FILTER, FilterItems } from 'const';
import { useAppDispatch, useAppSelector } from 'hooks';
import { PropsWithChildren } from 'react';
import { getActiveFilter, getCurrentHeightTaskList, getFiltredTasks, getTasks } from 'store/task-operations/selectors';
import { changeTaskStatus, filterItems, setHeightTaskLisk } from 'store/task-operations/task-operations';
import TodoFooter from '../todo-footer/todo-footer';
import TodoInputField from '../todo-input-field/todo-input-field';
import { TodoNoTasksContainer } from '../todo-no-tasks/todo-no-tasks.styled';
import * as S from './todo-list.styled';

type TodoListProps = PropsWithChildren<{
  children?: JSX.Element;
}>;

const TodoList = ({ children, ...props }: TodoListProps) => {

  const tasksInList = useAppSelector(getTasks);

  const dispatch = useAppDispatch();

  const selectedFilter = useAppSelector(getActiveFilter);

  const handleHeightListKeep = () => {
    dispatch(setHeightTaskLisk(document.getElementById('task-list')?.clientHeight));
  };

  const handleChangeStatus = (id: string) => {
    dispatch(changeTaskStatus(id));
    if (selectedFilter !== DEFAULT_FILTER) {
      dispatch(filterItems(selectedFilter));
    }
  };

  const filtredItems = useAppSelector(getFiltredTasks);

  const currentHeightTaskList = useAppSelector(getCurrentHeightTaskList);

  return (
    <S.TaskListWrapper
      id="task-list"
      onLoadCapture={handleHeightListKeep}
      currentHeight={currentHeightTaskList}
    >
      <TodoInputField />
      <S.TaskList>
        {(selectedFilter === DEFAULT_FILTER) && (tasksInList.length < 1)
          ? <TodoNoTasksContainer>No tasks</TodoNoTasksContainer>
          : false}

        {(selectedFilter === FilterItems[1]) && (filtredItems.length < 1)
          ? <TodoNoTasksContainer>No active tasks</TodoNoTasksContainer>
          : false}

        {(selectedFilter === FilterItems[2]) && (filtredItems.length < 1)
          ? <TodoNoTasksContainer>No completed tasks</TodoNoTasksContainer>
          : false}


        {((selectedFilter === DEFAULT_FILTER)
          ? tasksInList
          : filtredItems)
          .map((item) => (
            <S.TaskItem
              key={item.id as keyof object}
              onClick={() => handleChangeStatus(item.id)}
            >
              <S.TaskInputCheckbox
                onChange={() => handleHeightListKeep()}
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
