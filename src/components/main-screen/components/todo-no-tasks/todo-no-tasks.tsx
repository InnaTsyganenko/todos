import { PropsWithChildren, ReactNode } from 'react';
import * as S from './todo-no-tasks.styled';

type TodoNoTasksProps = PropsWithChildren<{
  children?: ReactNode;
}>;

function TodoNoTasks({children = ''}: TodoNoTasksProps): JSX.Element {
  return (<S.TodoNoTasksContainer>{children}</S.TodoNoTasksContainer>
  );
}

export default TodoNoTasks;
