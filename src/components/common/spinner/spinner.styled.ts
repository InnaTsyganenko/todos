import styled from 'styled-components';

const SpinnerWrapper = styled.div`
  position: relative;
  margin: 50px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  perspective: 800px;
`;

const SpinnerInner = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const SpinnerFirstParticle = styled(SpinnerWrapper)`
  left: 0%;
  top: 0%;
  animation: rotate-one 1s linear infinite;
  border-bottom: 8px solid #000000;

  @keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}
`;

const SpinnerSecondParticle = styled(SpinnerWrapper)`
  right: 0%;
  top: 0%;
  animation: rotate-two 1s linear infinite;
  border-right: 8px solid #000000;

  @keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}
`;

const SpinnerThirdParticle = styled(SpinnerWrapper)`
  right: 0%;
  bottom: 0%;
  animation: rotate-three 1s linear infinite;
  border-top: 8px solid #000000;

  @keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
`;

export {
  SpinnerWrapper,
  SpinnerInner,
  SpinnerFirstParticle,
  SpinnerSecondParticle,
  SpinnerThirdParticle
};
