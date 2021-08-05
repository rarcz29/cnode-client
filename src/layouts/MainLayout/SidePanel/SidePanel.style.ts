import styled from 'styled-components';
import { MARGINS } from '../../../constants';

export interface StyleProps {
  width: string
}

export const Aside = styled.aside<StyleProps>`
  width: ${(props) => props.width};
  height: calc(100vh - ${MARGINS.margin64 + MARGINS.margin32}px);
  position: sticky;
  top: ${MARGINS.margin64 + MARGINS.margin32}px;
  background-color: pink;
`;
