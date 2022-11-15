import styled, { keyframes } from 'styled-components';

const TasksWrapper = styled.div`
  margin: auto;
  padding: 0;

  box-shadow:
    0 6px 1px 0 ${({ theme }) => theme.color.whiteSmoke},
    0 -5px 1px 0 ${({ theme }) => theme.color.whiteSmoke},
    -1px 0 4px 0 ${({ theme }) => theme.color.gray},
    1px 0 4px 0 ${({ theme }) => theme.color.gray};
`;

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: auto;
  padding: 0;
`;

const TaskContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  border-top: 1px solid ${({ theme }) => theme.color.whisper};
  padding: 0.9em 0.6em;

  &:last-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.color.whisper};
  }
`;

const TaskInputCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

const rotate = keyframes`
  from {
    opacity: 0;
    transform: rotate(-45deg);
  }
  to {
    opacity: 1;
    transform: rotate(0deg);
  }
`;

const TaskLabel = styled.label`
  display: grid;
  grid-template-columns: 50px 1fr;
  justify-content: start;
  justify-items: start;
  align-content: center;
  align-items: center;
  margin: 0;

  color: ${({ theme }) => theme.color.eclipse};
  font-family: Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1.4em;
  cursor: pointer;
`;

const TaskIndicator = styled.span`

  &::after {
    display: inline-grid;
    grid-column: 1;
    content: '';
    border-radius: 50%;
    width: 1.4em;
    height: 1.4em;
    border: 1px solid ${({ theme }) => theme.color.lightGray};
    margin-right: 10px;
  }

  ${TaskInputCheckbox}:not(:disabled):checked & {
    background: #d1d1d1;
  }

  ${TaskLabel}:hover &::after,
  ${TaskLabel}:focus &::after {
    border: 1px solid ${({ theme }) => theme.color.carrotOrange};
  }

  ${TaskLabel}:active &::after {
    border: 1px solid ${({ theme }) => theme.color.whisper};
  }

  ${TaskLabel} & {
    color: ${({ theme }) => theme.color.lightGray};
    text-decoration-line: overline;
  }

  ${TaskInputCheckbox}:checked + &::after {
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    background: url('./img/check-mark.svg') center center no-repeat;
  }

  ${TaskInputCheckbox}:disabled + &::after {
    cursor: not-allowed;
    border: 1px solid ${({ theme }) => theme.color.eclipse};
    background-color: ${({ theme }) => theme.color.lightGray};
  }
`;

export {
  TasksWrapper,
  TaskList,
  TaskContainer,
  TaskLabel,
  TaskInputCheckbox,
  TaskIndicator
};
