import styled from 'styled-components';

const InputField = styled.textarea`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 1em;
  padding: 0.5em;
  box-shadow: 0 -1px 2px 1px #eadcdb;
  border: none;
  font-family: inherit;
  align-content: center;
  align-items: center;
  vertical-align: middle;

  &::placeholder {
    display: inline-flex;
    align-self: center;
    border: 2px solid red;
    align-content: center;
    align-items: center;
    vertical-align: middle;
    margin: auto 0;

  }

  &:hover,
  &:focus {
    border: 2px solid red;
  }

  &:hover::placeholder,
  &:focus::placeholder,
  &:active::placeholder {
    transform: scale(0);
    opacity: 0;
  }

  &:disabled {
    border: 2px solid gray;
  }

  &:disabled::placeholder {
    opacity: 0;
  }
`;

export {
  InputField,
};
