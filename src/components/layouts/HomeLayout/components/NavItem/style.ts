import COLOUR from 'constants/colour';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.125rem;

  &:link,
  &:visited,
  &:active {
    color: ${COLOUR.foreground1};
    text-decoration: none;
  }
`;

export const Icon = styled.div`
  width: 58px;
  font-size: 1.5rem;
`;
