import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import { LogoSection, RightSection, StyledHeader } from './style';

type TopBarProps = {};

const TopBar: React.FC<TopBarProps> = () => (
  <StyledHeader>
    <LogoSection>Logo</LogoSection>
    <RightSection>
      <SearchForm />
    </RightSection>
  </StyledHeader>
);

export default TopBar;
