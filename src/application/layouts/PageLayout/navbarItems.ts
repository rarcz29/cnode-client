import {
  faHome,
  faProjectDiagram,
  faUsers,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

export type NavbarItemType = 'default' | 'tabletAndMobileOnly';

export interface NavbarItem {
  text: string;
  icon: IconDefinition;
  url: string;
  type: NavbarItemType;
}

export const navbarItems: NavbarItem[] = [
  {
    text: 'Home',
    icon: faHome,
    url: '#',
    type: 'default',
  },
  {
    text: 'Accounts',
    icon: faProjectDiagram,
    url: '#',
    type: 'default',
  },
  {
    text: 'Repositories',
    icon: faProjectDiagram,
    url: 'repositories',
    type: 'default',
  },
  {
    text: 'Contacts',
    icon: faUsers,
    url: 'contacts',
    type: 'tabletAndMobileOnly',
  },
  {
    text: 'Teams',
    icon: faUsers,
    url: './',
    type: 'tabletAndMobileOnly',
  },
];
