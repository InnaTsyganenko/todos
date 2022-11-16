import styled from 'styled-components';

const TodoFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  padding: 0.4em;
  color: ${({ theme }) => theme.color.eclipse};
  font-size: ${({ theme }) => theme.font.mini};

  box-shadow:
    0 5px 0 -3px ${({ theme }) => theme.color.whiteSmoke},
    0 6px 0 -2px ${({ theme }) => theme.color.whisper};
  border-bottom: 1px solid lightgray;
`;

const TodoInfoLeft = styled.span`
  margin: auto;
  padding: 0;
`;

const TodoFilterButton = styled.button`
  margin: 0;
  padding: 0;
  border-top: 1px solid ${({ theme }) => theme.color.whisper};
  padding: 0.9em 0.6em;

  &:last-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.color.whisper};
  }
`;

const TodoClearCompletedButton = styled.button`
  margin: 0;
  padding: 0;
  border-top: 1px solid ${({ theme }) => theme.color.whisper};
  padding: 0.9em 0.6em;

  &:last-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.color.whisper};
  }
`;

const TaskInputCheckbox = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  z-index: -1;
  opacity: 0;


  &:focus span,
  &:hover span {
    border-bottom: 2px solid ${({ theme }) => theme.color.tangerine};
  }
`;

export {
  TodoFooterWrapper,
  TodoInfoLeft,
  TodoFilterButton,
  TodoClearCompletedButton,
  TaskInputCheckbox
};
