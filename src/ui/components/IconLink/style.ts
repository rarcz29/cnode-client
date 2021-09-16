import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { iconLinks, IconLinksProps } from 'ui/theme/system/iconLinks';

export interface StyleProps extends IconLinksProps {}

const styledBase = css`
  ${iconLinks}
  position: relative;
  color: ${props => props.theme.colors.foreground1};

  & > p {
    margin-left: ${props => props.theme.margins.margin64.str};
  }
`;

// TODO: icon font size
export const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
`;

export const StyledLink = styled(Link)`
  ${styledBase}
  text-decoration: none;

  &:link,
  &:visited {
    color: inherit;
  }
`;

export const StyledButton = styled.button`
  ${styledBase}
  background: transparent;
  display: flex;
  border-width: 0;
  cursor: pointer;
  font-family: ${props => props.theme.fonts.family.default}, sans-serif;
`;
