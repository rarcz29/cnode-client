import DIMENSIONS from 'constants/dimensions';
import React from 'react';
import styled from 'styled-components';

type ContainerProps = {};

const StyledDiv = styled.div`
  width: ${DIMENSIONS.pageWidth + 40}px;
  margin: 0 auto;
  padding: 0 20px;
  background-color: red;
`;

const Container: React.FC<ContainerProps> = ({ children }) => (
  <StyledDiv>{children}</StyledDiv>
);

export default Container;
