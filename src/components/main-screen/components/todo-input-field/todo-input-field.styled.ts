import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
  justify-items: start;
  margin-top: 1em;
  background: ${({ theme }) => theme.color.white};

  &:hover,
  &:focus-within {
    outline: none;
    box-shadow:
      0 1px 0 0 ${({ theme }) => theme.color.carrotOrange},
      1px 0 0 0 ${({ theme }) => theme.color.carrotOrange},
      -1px 0 0 0 ${({ theme }) => theme.color.carrotOrange},
      0 -1px 0 0 ${({ theme }) => theme.color.carrotOrange},
      0 6px 5px 0 ${({ theme }) => theme.color.whiteSmoke},
      0 -4px 8px 0 ${({ theme }) => theme.color.whiteSmoke},
      -1px 0 4px 0 ${({ theme }) => theme.color.eclipse},
      1px 0 4px 0 ${({ theme }) => theme.color.eclipse};
  }
`;

const InputLabel = styled.label`
  position: relative;
  justify-self: center;
  width: 100%;
  height: 100%;
  background: red;

  .ebsUoQ::before {
    position: absolute;
    top: 35px;
    left: 10px;
    display: block;
    grid-column: 1;
    content: '';
    border-radius: 50%;
    width: 1.4em;
    height: 1.4em;
    border: 1px solid rgb(190,190,190);
    margin-right: 10px;
    z-index: 100;
}
  /* position: relative;
  grid-column: 1;
  display: flex;
  align-items: center;
  justify-items: center;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.color.white};
  cursor: pointer;

  &:hover,
  &:focus {
    path {
      fill:  ${({ theme }) => theme.color.carrotOrange};
    }
  }

  &:disabled {
    background: ${({ theme }) => theme.color.gray};
  } */
`;

const InputDatalistIcon = styled.svg`
  rotate: 90deg;

  &:hover,
  &:focus {
    path {
      fill:  ${({ theme }) => theme.color.carrotOrange};
    }
  }
`;

const InputDatalistOption = styled.option`
`;

const InputField = styled.input`
  position: relative;
  grid-column: 2;
  border: none;
  font-family: inherit;
  padding: 0.8em;
  padding-left: 0;
  font-family: inherit;
  color: ${({ theme }) => theme.color.gray};
  font-size: 1.5em;
  appearance: none;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  &::placeholder {
    font-family: inherit;
    font-style: italic;
    font-weight: 400;
    color: ${({ theme }) => theme.color.whisper};
  }

  &:hover,
  &:focus {
    outline: none;
  }

  &:disabled {
    background: ${({ theme }) => theme.color.gray};
  }

  &:disabled::placeholder {
    opacity: 0;
  }
`;

export {
  InputContainer,
  InputLabel,
  InputDatalistIcon,
  InputDatalistOption,
  InputField,
};
