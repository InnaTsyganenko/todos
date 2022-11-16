import styled, { keyframes } from 'styled-components';

const TaskListWrapper = styled.div`
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

const slitAnimation = keyframes`
  0% {
    -webkit-transform: translateZ(-800px) rotate3d(-1, 1, 0, -90deg);
      transform: translateZ(-800px) rotate3d(-1, 1, 0, -90deg);
    -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    opacity: 0;
  }
  54% {
    -webkit-transform: translateZ(-160px) rotate3d(-1, 1, 0, -87deg);
            transform: translateZ(-160px) rotate3d(-1, 1, 0, -87deg);
    -webkit-animation-timing-function: ease-in-out;
            animation-timing-function: ease-in-out;
    opacity: 1;
  }
  100% {
    -webkit-transform: translateZ(0) rotate3d(-1, 1, 0, 0);
            transform: translateZ(0) rotate3d(-1, 1, 0, 0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
`;

const TaskItem = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  border-top: 1px solid ${({ theme }) => theme.color.whisper};
  padding: 0.9em 0.6em;

  &:last-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.color.whisper};
  }

  > input {
    opacity: 0;
  }
  > input + label {
    display: grid;
    position: relative;
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
    text-decoration: none;

    &:before {
      display: inline-grid;
      grid-column: 1;
      grid-row: 1;
      content: '';
      border-radius: 50%;
      width: 1.4em;
      height: 1.4em;
      border: 1px solid ${({ theme }) => theme.color.lightGray};
      margin-right: 10px;
      text-decoration: none;
    }

    &:after {
      display: inline-grid;
      grid-column: 1;
      grid-row: 1;
      content: '';
      width: 1.35em;
      height: 1.35em;
    }
  }
  > input:not(:checked) + label {
      &:after {
      }
  }
  > input:disabled:not(:checked) + label {
      &:before {
        box-shadow: none;
        border-color: #bbb;
        background-color: #ddd;
      }
  }
  > input:checked + label {
      text-decoration: line-through 1px solid ${({ theme }) => theme.color.eclipse};

      &:after {
        animation: ${slitAnimation} 0.45s ease-out both;
        background: url('./img/check-mark.svg') center center no-repeat;
      }
  }

  > input:checked + label {


      &:after {
        text-decoration: none;
        opacity: 1;
        transform: scale(1);
      }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: #aaa;
  }
  > input:checked:focus + label, input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue;
    }
  }
`;

const TaskInputCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  z-index: -1;
  opacity: 0;
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

export {
  TaskListWrapper,
  TaskList,
  TaskItem,
  TaskLabel,
  TaskInputCheckbox,
};
