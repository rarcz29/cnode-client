/* eslint-disable max-len */
import { List } from 'components';
import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  height: calc(100% - ${props => props.theme.margins.margin64.number + props.theme.margins.margin32.number}px);
`;

// TODO: remove color
// TODO: remove height
// TODO: change custom media query
export const Main = styled.main`
  width: calc(100% - 632px);
  margin: 0 ${props => props.theme.margins.margin64.str};
  background-color: red;
  height: 3000px;

  @media ${props => props.theme.mediaQueries.laptopMax} {
    width: calc(100% - 246px);
    margin-right: 0;
  }

  @media ${props => props.theme.mediaQueries.tabletMax} {
    width: 100%;
    margin: 0;
  }

  @media (min-width: 1366px) {
    width: 664px;
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
