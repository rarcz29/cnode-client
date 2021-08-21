import styled from 'styled-components';

export const StyledHr = styled.hr`
  border-width: 0.5px;
  border-color: ${props => props.theme.colors.foreground4};
  margin: ${props => props.theme.margins.margin32.str} 0;
`;
