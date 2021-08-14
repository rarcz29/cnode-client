import React from 'react';
import Logo from '../Logo';
import { HeaderWrapper } from './Header.style';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <div>something</div>
    </HeaderWrapper>
  );
};

export default Header;
