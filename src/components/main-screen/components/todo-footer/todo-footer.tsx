import { DEFAULT_FILTER, FilterItems } from 'const';
import { useAppDispatch, useAppSelector } from 'hooks';
import { PropsWithChildren } from 'react';
import { getTasks } from 'store/task-operations/selectors';
import { clearCompleted, filterItems } from 'store/task-operations/task-operations';
import * as S from './todo-footer.styled';

type TodoFooterProps = PropsWithChildren<{
  children?: JSX.Element;
}>;

const TodoFooter = ({ children, ...props }: TodoFooterProps) => {

  const tasksInList = useAppSelector(getTasks);

  const dispatch = useAppDispatch();

  const countTasksLeft = tasksInList.reduce((acc: number, el) => {
    if (!el.isCompleted) {acc++;}
    return acc;
  }, 0);

  const handleFilterCLick = (id: string) => dispatch(filterItems(id));

  return (
    <S.TodoFooterWrapper>
      <S.TodoInfoLeft>{countTasksLeft} items left</S.TodoInfoLeft>
      {FilterItems.map((item) => (
        <S.TodoFilterButton
          key={item}
          onClick={() => handleFilterCLick(item)}
        >{item}
        </S.TodoFilterButton>
      ))}
      <S.TodoClearCompletedButton
        onClick={() => {
          dispatch(clearCompleted());
          handleFilterCLick(DEFAULT_FILTER);
        }}
      >Clear completed
      </S.TodoClearCompletedButton>
    </S.TodoFooterWrapper>
  );
};


export default TodoFooter;
