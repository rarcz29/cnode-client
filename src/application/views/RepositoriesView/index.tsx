import React from 'react';
import styled from 'styled-components';

// TODO: remove
export const StyledPage = styled.div`
  width: 100%;
  height: 2000px;
`;

export const RepositoriesView: React.FC = () => {
  return (
    <StyledPage>
      <p>Repositories Page</p>
    </StyledPage>
  );
};
