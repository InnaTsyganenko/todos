import { Button } from 'components/common/common';
import styled from 'styled-components';

const TodoFooterWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin: auto;
  padding: 0.6em;
  color: ${({ theme }) => theme.color.eclipse};
  font-size: ${({ theme }) => theme.font.mini};
  background: white;

  &::after {
    display: inline-flex;
    position: absolute;
    content: '';
    top: 10px;
    width: 98%;
    height: 100%;
    /* box-shadow:
    0 5px 0 -3px ${({ theme }) => theme.color.whiteSmoke},
    0 6px 0 -2px ${({ theme }) => theme.color.whisper}; */
    border: 1px solid lightgray;
    z-index: -1;
    background: red;
  }
`;

const TodoFooterCards = styled.div`

`;

const TodoInfoLeft = styled.span`
  margin: 0;
  padding: 0;
`;

const TodoFiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TodoFilterButton = styled(Button)`
  ${({ isSelected }) => isSelected && 'border: 1px solid lightgray'}
`;

const TodoClearCompletedButton = styled(Button)`
  ${({ isSelected }) => isSelected && 'border: none'}
`;

export {
  TodoFooterWrapper,
  TodoFooterCards,
  TodoInfoLeft,
  TodoFiltersContainer,
  TodoFilterButton,
  TodoClearCompletedButton
};
