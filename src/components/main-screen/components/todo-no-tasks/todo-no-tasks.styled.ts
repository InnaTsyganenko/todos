import styled, { keyframes } from 'styled-components';

const TodoNoTasksContainer = styled.div`
  margin: auto;
  padding: 0;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color.whisper};
  border-bottom: 1px solid ${({ theme }) => theme.color.whisper};
  padding: 1em;
`;

export {
  TodoNoTasksContainer,
};
