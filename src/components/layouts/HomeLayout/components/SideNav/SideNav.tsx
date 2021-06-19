import { faSlack } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import NavItem from '../NavItem';

type SideNavProps = {};

const Aside = styled.aside`
  width: 248px;
`;

const SideNav: React.FC<SideNavProps> = () => (
  <Aside>
    <NavItem to="#" icon={<FontAwesomeIcon icon={faSlack} />}>
      Item
    </NavItem>
  </Aside>
);

export default SideNav;
