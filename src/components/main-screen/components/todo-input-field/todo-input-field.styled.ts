import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 50px 1fr;
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

const InputButton = styled.button`
  position: relative;
  grid-column: 1;
  display: grid;
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
  }
`;

const InputButtonIcon = styled.svg`
    rotate: 90deg;

    &:hover,
    &:focus {
      path {
        fill:  ${({ theme }) => theme.color.carrotOrange};
      }
    }
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
  InputButton,
  InputButtonIcon,
  InputField,
};
