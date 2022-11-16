import { AppRoute } from 'const';
import * as S from './not-found-screen.styled';

const NotFoundScreen = () => (
  <S.NotFoundScreenWrapper>
    <>
      <S.NotFoundScreenTitle>Oooops!</S.NotFoundScreenTitle>
      <S.NotFoundScreenTitle>404. The page does not exist.</S.NotFoundScreenTitle>
      <S.NotFoundScreenLink to={AppRoute.Root} $isCompletedLink>Go to main page?</S.NotFoundScreenLink>
    </>
  </S.NotFoundScreenWrapper>
);

export default NotFoundScreen;
