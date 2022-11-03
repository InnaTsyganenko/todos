import styled from 'styled-components';

const TodoListTitle = styled.h1`
  margin: 0 auto;
  padding: 0;
  font-family: Roboto Condensed, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: ${({ theme }) => theme.font.large};
  line-height: 110%;
  font-weight: 200;
  color: ${({ theme }) => theme.color.whitePink};
`;

export { TodoListTitle };
