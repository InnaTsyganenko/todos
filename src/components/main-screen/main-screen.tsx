import {
  MainLayout,
  PageTitle,
  PageHeading,
} from 'components/common/common';
import { TodoList } from './components/components';
import * as S from './main-screen.styled';

const MainScreen = () => (
  <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
        <PageTitle>todos</PageTitle>
      </PageHeading>
      <TodoList />
    </S.Main>
  </MainLayout>
);

export default MainScreen;
