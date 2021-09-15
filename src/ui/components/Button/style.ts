import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  height: 48px;
  border: 1px solid ${props => props.theme.colors.success};
  color: ${props => props.theme.colors.success};
  background-color: transparent;
  border-radius: 12px;
  font-size: ${props => props.theme.fonts.p2.fontSize};
  font-family: ${props => props.theme.fonts.family.default}, sans-serif;
`;
