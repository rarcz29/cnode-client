import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
    font-size: ${props => props.theme.fonts.h5.fontSize};
    line-height: ${props => props.theme.fonts.h5.lineHeight};
    margin-left: ${props => props.theme.margins.margin64.str};
    display: absolute;
  }
`;
