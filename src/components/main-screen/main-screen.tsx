import { PageTitle } from 'components/common/common';
import { TodoList } from './components/components';
import * as S from './main-screen.styled';

const MainScreen = () => (
  <S.Main forwardedAs="main">
    <PageTitle>todos</PageTitle>
    <TodoList />
  </S.Main>
);

export default MainScreen;
