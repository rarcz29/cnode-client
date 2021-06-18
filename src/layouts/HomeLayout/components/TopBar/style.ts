import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  background-color: red;
`;

export const LogoSection = styled.div`
  width: 248px;
  background-color: blue;
`;

export const RightSection = styled.div`
  width: calc(100% - 248px);
  background-color: green;
`;
