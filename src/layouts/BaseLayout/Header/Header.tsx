import React from 'react';
import { HeaderWrapper } from './Header.style';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderWrapper>
      <div>logo</div>
      <div>something</div>
    </HeaderWrapper>
  );
};

export default Header;
