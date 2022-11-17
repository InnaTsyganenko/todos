import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;

  max-width: 100%;
  margin: 0;
  margin-right: 20px;
  padding: 0.3em 0.5em;
  border-radius: 5px;
  background: none;
  cursor: pointer;
  border: none;

  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.lightGray};
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.color.gray};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.color.lightGray};
    border: 1px solid ${({ theme }) => theme.color.gray};
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export { Button };
