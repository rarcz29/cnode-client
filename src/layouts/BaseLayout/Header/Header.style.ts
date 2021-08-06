import styled from 'styled-components';
// TODO: constants
import { MARGINS, MEDIA_QUERIES } from '../../../constants';

export const HeaderWrapper = styled.header`
  height: ${MARGINS.margin64}px;
  margin-bottom: ${MARGINS.margin32}px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.background1};

  @media ${MEDIA_QUERIES.mobileMax} {
    margin-bottom: ${MARGINS.margin24}px;
  }
`;
