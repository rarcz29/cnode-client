/* eslint-disable max-len */
import styled from 'styled-components';
import { List } from 'ui/components';

export const LayoutContainer = styled.div`
  display: flex;
  height: calc(100% - ${props => props.theme.margins.margin64.number + props.theme.margins.margin32.number}px);
`;

// TODO: remove color
// TODO: remove height
// TODO: change custom media query
export const Main = styled.main`
  width: calc(100% - 776px);
  margin: 0 ${props => props.theme.margins.margin64.str};

  @media ${props => props.theme.mediaQueries.laptopMax} {
    width: calc(100% - 388px);
    margin-right: 0;
  }

  @media ${props => props.theme.mediaQueries.tabletMax} {
    width: 100%;
    margin: 0;
  }

  @media (min-width: 1366px) {
    width: 540px;
    margin: 0 auto;
  }
`;

export const StyledList = styled(List)`
  & > li {
    margin-bottom: ${props => props.theme.margins.margin32.str};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

// TODO; text
// TODO: margin
export const FeedbackSection = styled.section`
  & p {
    color: ${props => props.theme.colors.foreground2};
    font-size: ${props => props.theme.fonts.p2.fontSize};
    line-height: ${props => props.theme.fonts.p2.lineHeight};
    margin-bottom: ${props => props.theme.margins.margin24.str};
  }
`;
