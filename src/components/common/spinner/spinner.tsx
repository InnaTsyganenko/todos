import * as S from './spinner.styled';

const Spinner = () => (
  <S.SpinnerWrapper>
    <S.SpinnerInner>
      <S.SpinnerFirstParticle />
    </S.SpinnerInner>
    <S.SpinnerInner>
      <S.SpinnerSecondParticle />
    </S.SpinnerInner>
    <S.SpinnerInner>
      <S.SpinnerThirdParticle />
    </S.SpinnerInner>
  </S.SpinnerWrapper>
);

export default Spinner;
