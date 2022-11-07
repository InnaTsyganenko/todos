import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 10% 90%;

  margin-top: 1em;
  box-shadow:
    0 7px 1px 0 ${({ theme }) => theme.color.whiteSmoke},
    0 -1px 5px 0 ${({ theme }) => theme.color.whiteSmoke},
    -2px 0 2px 0 #cbcbcb,
    2px 0 3px 0 #cbcbcb,
    0 -1px 1px 0 #eadcdb;

  align-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.white};

  &::before {
    content: '';
    z-index: 2;
    position: absolute;
    top: 50%;
    bottom: 50%;
    left: 5%;
    width: 21px;
    height: 29px;
    background: url("../img/arrow.svg");
    rotate: 90deg;
  }
`;

const InputField = styled.textarea`
  position: relative;
  grid-column: 2;
  align-self: center;
  border: none;
  font-family: inherit;
  padding: 0.9em;



  &::placeholder {
    font-family: -apple-system, 'Segoe UI', 'Open Sans', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 1.5em;
  }

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 -1px 2px 1px #eadcdb,
      0 0 1px 1px #ddaaaf;
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
  InputContainer,
  InputField,
};
