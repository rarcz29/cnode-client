import styled from 'styled-components';
import { MARGINS, MEDIA_QUERIES } from '../../constants'; // TODO: constants

export const LayoutContainer = styled.div`
  display: flex;
  height: calc(100% - ${MARGINS.margin64 + MARGINS.margin32}px);
`;

// TODO: remove color
// TODO: remove height
// TODO: get media query from constants
export const Main = styled.main`
  width: calc(100% - 632px);
  margin: 0 ${MARGINS.margin64}px;
  background-color: red;
  height: 3000px;

  @media ${MEDIA_QUERIES.laptopMax} {
    width: calc(100% - 246px);
    margin-right: 0;
  }

  @media ${MEDIA_QUERIES.tabletMax} {
    width: 100%;
    margin: 0;
  }

  @media (min-width: 1366px) {
    width: 664px;
    margin: 0 auto;
  }
`;
