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

const InputList = styled.ul`
  display: block;
  justify-self: center;
  position: absolute;
  top: calc(100%);
  z-index: 1000;

  width: calc(100% - 2em);
  min-height: 100%;
  margin: 0;
  padding: 0;

  color: ${({ theme }) => theme.color.eclipse};
  list-style: none;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 19px;
  background: inherit;
  text-align: left;
  box-shadow: 0 0 3px 1px ${({ theme }) => theme.color.lightGray};

  -webkit-appearance: none;
    -moz-appearance: none;
          appearance: none;
`;

const InputListItem = styled.li`
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
  padding: 0.5em 1em;

  &:last-of-type {
    border-bottom: none;
  }
`;

const InputInputLabel = styled.label`
  grid-column: 1;
  justify-self: center;
  margin-top: 10px;
`;

const InputFieldIcon = styled.svg`
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
  padding: 0.8em;
  padding-left: 0;
  width: 100%;
  font-family: inherit;
  border: none;
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
  InputFieldIcon,
  InputList,
  InputListItem,
  InputInputLabel,
  InputField,
};
