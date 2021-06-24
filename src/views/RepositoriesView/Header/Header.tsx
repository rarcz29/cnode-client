import { Button } from 'components/common';
import React from 'react';
import styled from 'styled-components';

type HeaderProps = {};

const StyledHeader = styled.header`
  display: flex;
  margin-bottom: 30px;
`;

const LeftContainer = styled.div`
  display: inherit;

  & > * {
    margin-right: 14px;

    &:last-child {
      margin-right: 14px;
    }
  }
`;

const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledHeader>
      <LeftContainer>
        <Button>Repository</Button>
        <Button>Account</Button>
      </LeftContainer>
    </StyledHeader>
  );
};

export default Header;
