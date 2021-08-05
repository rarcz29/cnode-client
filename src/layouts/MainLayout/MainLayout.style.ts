import styled from 'styled-components';
import { MARGINS } from '../../constants'; // TODO: constants

export const LayoutContainer = styled.div`
  display: flex;
  height: calc(100% - ${MARGINS.margin64 + MARGINS.margin32}px);
`;

export const Main = styled.main`
  width: calc(100% - 632px);
  margin: 0 ${MARGINS.margin64}px;
  background-color: red;
  height: 3000px;
`;
