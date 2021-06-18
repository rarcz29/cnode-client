import {
  faBars,
  faBell,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from 'components/Logo/Logo';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import { LogoContainer, RightContainer, StyledHeader } from './style';

type TopBarProps = {};

const TopBar: React.FC<TopBarProps> = () => (
  <StyledHeader>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <RightContainer>
      <SearchForm />
      <FontAwesomeIcon icon={faBell} />
      <FontAwesomeIcon icon={faBars} />
      <FontAwesomeIcon icon={faUserCircle} />
    </RightContainer>
  </StyledHeader>
);

export default TopBar;
