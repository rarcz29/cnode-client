import styled from 'styled-components';

export const StyledLayoutWrapper = styled.div`
  min-width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background1};
  color: ${props => props.theme.colors.text1};
`;
