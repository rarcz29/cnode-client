/* eslint-disable max-len */
import styled from 'styled-components';

export const Aside = styled.aside`
  width: 324px;
  height: calc(100vh - ${props => props.theme.margins.margin64.number + props.theme.margins.margin32.number}px);
  position: sticky;
  top: ${props => props.theme.margins.margin64.number + props.theme.margins.margin32.number}px;
`;
