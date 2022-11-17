import { FilterItems } from 'const';
import { useAppDispatch, useAppSelector } from 'hooks';
import { PropsWithChildren } from 'react';
import { getActiveFilter, getTasks } from 'store/task-operations/selectors';
import { clearCompleted, filterItems } from 'store/task-operations/task-operations';
import * as S from './todo-footer.styled';

type TodoFooterProps = PropsWithChildren<{
  children?: JSX.Element;
}>;

const TodoFooter = ({ children, ...props }: TodoFooterProps) => {

  const tasksInList = useAppSelector(getTasks);
  const selectedFilter = useAppSelector(getActiveFilter);

  const dispatch = useAppDispatch();

  const countTasksLeft = tasksInList.reduce((acc: number, el) => {
    if (!el.isCompleted) {acc++;}
    return acc;
  }, 0);

  const handleFilterCLick = (valueFilter: string) => {
    if (valueFilter === selectedFilter) {return;}
    dispatch(filterItems(valueFilter));
  };

  const arr = [0,1,2,3,4,5];

  return (
    <S.TodoFooterWrapper>
      <S.TodoFooterCards></S.TodoFooterCards>
      <S.TodoInfoLeft>{countTasksLeft} items left</S.TodoInfoLeft>
      <S.TodoFiltersContainer>
        {FilterItems.map((item) => (
          <S.TodoFilterButton
            key={item}
            onClick={() => handleFilterCLick(item)}
            isSelected={selectedFilter === item}
          >{item}
          </S.TodoFilterButton>
        ))}
      </S.TodoFiltersContainer>
      <S.TodoClearCompletedButton
        onClick={() => dispatch(clearCompleted())}
        isSelected
      >Clear completed
      </S.TodoClearCompletedButton>
    </S.TodoFooterWrapper>

  );
};

export default TodoFooter;
