import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import NavItem from '../NavItem';
import { Aside } from './style';

type Item = {
  to: string;
  icon: IconDefinition;
  text: string;
};

const items: Item[] = [
  {
    to: '#',
    icon: faHome,
    text: 'Home',
  },
  {
    to: '#',
    icon: faHome,
    text: 'Repositories',
  },
  {
    to: '#',
    icon: faHome,
    text: 'Contacts',
  },
  {
    to: '#',
    icon: faHome,
    text: 'Teams',
  },
];

type SideNavProps = {};

const SideNav: React.FC<SideNavProps> = () => (
  <Aside>
    {items.map((item) => (
      <NavItem
        key={item.text}
        to={item.to}
        icon={<FontAwesomeIcon icon={item.icon} />}
      >
        {item.text}
      </NavItem>
    ))}
  </Aside>
);

export default SideNav;
