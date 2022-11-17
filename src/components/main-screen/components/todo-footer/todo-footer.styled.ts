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
  border-bottom: 1px solid lightgray;
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
  TodoInfoLeft,
  TodoFiltersContainer,
  TodoFilterButton,
  TodoClearCompletedButton
};
