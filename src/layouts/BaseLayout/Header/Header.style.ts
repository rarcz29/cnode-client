import styled from 'styled-components';
import { MARGINS } from '../../../constants'; // TODO: change path

export const HeaderWrapper = styled.header`
  height: ${MARGINS.margin64}px;
  margin-bottom: ${MARGINS.margin32}px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: pink;
`;
