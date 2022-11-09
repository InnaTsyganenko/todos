import styled, { css } from 'styled-components';
import { Container, PageTitle as Title } from 'components/common/common';
import { Link as RouterLink } from 'components/common/common';

const NotFoundScreenWrapper = styled(Container)`
  width: 60%;
  height: 60%;
  margin: 10%;
  text-align: left;
`;

const NotFoundScreenTitle = styled(Title)`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.font.formsHeading};
  font-weight: 500;
  color: ${({ theme }) => theme.color.gray};
`;

const NotFoundScreenLink = styled(RouterLink)<{$isActiveLink: boolean}>`
  display: block;
  font-size: ${({ theme }) => theme.font.medium};
  font-weight: 600;
  text-decoration: underline;

  color: ${({ theme }) => theme.color.eclipse};

  ${({ $isActiveLink }) =>
    $isActiveLink &&
    css`
      color: ${({ theme }) => theme.color.lightGray};
    `}

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.carrotOrange};
  }

  &:active {
    color: ${({ theme }) => theme.color.eclipse};
  }
`;

export {
  NotFoundScreenWrapper,
  NotFoundScreenTitle,
  NotFoundScreenLink,
};
