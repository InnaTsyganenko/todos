import { Button } from 'components/common/common';
import styled from 'styled-components';


interface TextInputProps {
  bottomCoordinate: number;
}

const TodoFooterWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0.6em;
  color: ${({ theme }) => theme.color.eclipse};
  font-size: ${({ theme }) => theme.font.mini};
  z-index: 100;
  border-top: 1px solid ${({ theme }) => theme.color.whisper};
`;

const TodoFooterCardEffect = styled.div<TextInputProps>`
  width: calc(100% - ${({ bottomCoordinate }) => bottomCoordinate - 7}px);
  height: 101%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  bottom: -${({ bottomCoordinate }) => bottomCoordinate - 8}px;
  margin: auto;
  background: inherit;
  z-index: -1;
  box-shadow:
    0px 7px 0px -3px ${({ theme }) => theme.color.whiteSmoke},
    0px 7px 0px -2px ${({ theme }) => theme.color.lightGray},
    0px 6px 3px -5px ${({ theme }) => theme.color.lightGray};
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
  TodoFooterCardEffect,
  TodoInfoLeft,
  TodoFiltersContainer,
  TodoFilterButton,
  TodoClearCompletedButton
};
