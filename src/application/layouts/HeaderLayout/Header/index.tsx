import React from 'react';
import {
  faBars,
  faBell,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from 'ui/components';
import { Logo } from '../Logo';
import { HeaderWrapper, RightPanel } from './style';

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <RightPanel>
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faBars} />
        <Avatar />
      </RightPanel>
    </HeaderWrapper>
  );
};
