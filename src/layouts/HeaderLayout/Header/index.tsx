import React from 'react';
import {
  faBars,
  faBell,
  faSearch,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../Logo';
import { HeaderWrapper, RightPanel } from './style';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <RightPanel>
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faBars} />
        <FontAwesomeIcon icon={faUserCircle} />
      </RightPanel>
    </HeaderWrapper>
  );
};

export default Header;
