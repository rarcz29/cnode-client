import styled from 'styled-components';
// TODO: change path
import { MARGINS, MEDIA_QUERIES } from '../../../constants';

export const Wrapper = styled.div`
  max-width: 1920px;
  padding: 0 ${MARGINS.margin24}px;
  margin: 0 auto;

  @media ${MEDIA_QUERIES.tabletMax} {
    padding: 0 ${MARGINS.margin16}px;
  }

  @media ${MEDIA_QUERIES.mobileMax} {
    padding: 0 ${MARGINS.margin8}px;
  }
`;
