import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type NavItemProps = {
  to: string;
  children: React.ReactNode;
  icon: React.ReactNode;
};

const StyledLink = styled(Link)`
  display: flex;
`;

const NavItem: React.FC<NavItemProps> = ({ to, children, icon }) => (
  <StyledLink to={to}>
    {icon}
    {children}
  </StyledLink>
);

export default NavItem;
