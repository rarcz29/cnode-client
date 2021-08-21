import { css } from 'styled-components';

export type IconLinksSizeType = 'medium' | 'large';

export interface IconLinksProps {
  size?: IconLinksSizeType;
}

const largeIconLink = css`
  & > svg {
    font-size: ${props => props.theme.iconLinks.large.iconSize};
  }

  & > p {
    font-size: ${props => props.theme.iconLinks.large.fontSize};
    line-height: ${props => props.theme.iconLinks.large.iconSize};
  }
`;

const mediumIconLink = css`
  & > svg {
    font-size: ${props => props.theme.iconLinks.medium.iconSize};
  }

  & > p {
    font-size: ${props => props.theme.iconLinks.medium.fontSize};
    line-height: ${props => props.theme.iconLinks.medium.iconSize};
  }
`;

const iconLinks = css<IconLinksProps>`
  ${props => {
    switch (props.size) {
      case 'large':
        return largeIconLink;
      case 'medium':
      default:
        return mediumIconLink;
    }
  }}
`;

export default iconLinks;
