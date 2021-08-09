import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { h5 } from 'styles';
import { MARGINS } from '../../constants';

export const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;

  &:link,
  &:visited {
    color: violet;
  }

  & span {
    position: absolute;
  }

  & p {
    ${h5};
    margin-left: ${MARGINS.margin64}px;
    display: absolute;
  }
`;
