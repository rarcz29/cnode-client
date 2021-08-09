import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MARGINS } from '../../constants';

export const StyledLink = styled(Link)`
  display: flex;

  & span {
    margin-right: ${MARGINS.margin32}px;
  }
`;
