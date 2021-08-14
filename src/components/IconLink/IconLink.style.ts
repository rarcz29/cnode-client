import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// TODO: icon font size
export const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  font-size: 24px;
`;

export const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: ${props => props.theme.colors.foreground1};

  &:link,
  &:visited {
    color: inherit;
  }

  & p {
    font-size: ${props => props.theme.fonts.h5.fontSize};
    line-height: ${props => props.theme.fonts.h5.lineHeight};
    margin-left: ${props => props.theme.margins.margin64.str};
    display: absolute;
  }
`;
