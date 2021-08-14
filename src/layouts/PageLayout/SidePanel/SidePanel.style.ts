/* eslint-disable max-len */
import styled from 'styled-components';

export interface StyleProps {
  width: string
}

export const Aside = styled.aside<StyleProps>`
  width: ${(props) => props.width};
  height: calc(100vh - ${props => props.theme.margins.margin64.number + props.theme.margins.margin32.number}px);
  position: sticky;
  top: ${props => props.theme.margins.margin64.number + props.theme.margins.margin32.number}px;
  background-color: pink;
`;
