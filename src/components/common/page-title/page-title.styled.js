import styled from 'styled-components';

const PageTitle = styled.h1`
  margin: 0;
  padding: 0;

  font-size: ${({ theme }) => theme.font.large};
  line-height: 110%;
  font-weight: 800;
  color: ${({ theme }) => theme.color.whitePink};
`;

export { PageTitle };
