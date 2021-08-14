import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1920px;
  padding: 0 ${props => props.theme.margins.margin24.str};
  margin: 0 auto;

  @media ${props => props.theme.mediaQueries.wideScreenMin} {
    max-width: 1366px;
  }

  @media ${props => props.theme.mediaQueries.tabletMax} {
    padding: 0 ${props => props.theme.margins.margin16.str};
  }

  @media ${props => props.theme.mediaQueries.mobileMax} {
    padding: 0 ${props => props.theme.margins.margin8.str};
  }
`;
