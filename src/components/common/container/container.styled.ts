import styled from 'styled-components';

const Container = styled.div`
  min-width: fit-content;
  width: 100%;
  max-width: 900px;
  height: 100%;
  margin: 0 auto;
  margin-top: 5em;
  text-align: center;

  @media (min-width: 400px) {
    width: 400px;
  }

  @media (min-width: 600px) {
    width: 600px;
  }
`;

export { Container };
