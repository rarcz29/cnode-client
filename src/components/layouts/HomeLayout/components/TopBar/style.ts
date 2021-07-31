import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
`;

export const LogoContainer = styled.div`
  width: 248px;
`;

export const RightContainer = styled.div`
  width: calc(100% - 248px);
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 1.5rem;
  }

  form {
    width: calc(100% - 200px);
  }
`;
