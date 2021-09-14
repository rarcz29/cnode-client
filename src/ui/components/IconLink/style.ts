import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { iconLinks, IconLinksProps } from 'ui/theme/system/iconLinks';

export interface StyleProps extends IconLinksProps {}

// TODO: icon font size
export const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
`;

export const StyledLink = styled(Link)`
  ${iconLinks}
  position: relative;
  text-decoration: none;
  color: ${props => props.theme.colors.foreground1};

  &:link,
  &:visited {
    color: inherit;
  }

  & > p {
    margin-left: ${props => props.theme.margins.margin64.str};
  }
`;
