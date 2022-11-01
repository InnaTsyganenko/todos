import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../main-screen/main-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { ThemeProvider } from 'styled-components';
import { appTheme } from './common';
import * as S from './app.styled';

function App(): JSX.Element {

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
