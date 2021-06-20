import React from 'react';
import { Icon, StyledLink } from './style';

type NavItemProps = {
  to: string;
  children: React.ReactNode;
  icon: React.ReactNode;
};

const NavItem: React.FC<NavItemProps> = ({ to, children, icon }) => (
  <StyledLink to={to}>
    <Icon>{icon}</Icon>
    <span>{children}</span>
  </StyledLink>
);

export default NavItem;
