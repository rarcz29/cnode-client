import {
  faHome,
  faInfoCircle,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { RootStore } from 'store';
import { MainNav, Right, StyledHeader } from './styles';

const mainNavbarItems = [
  { icon: faHome, href: '#' },
  { icon: faUsers, href: '#' },
  { icon: faInfoCircle, href: '#' },
];

const MainLayout = () => {
  const authState = useSelector((state: RootStore) => state.auth);

  return (
    <>
      <StyledHeader>
        <div></div>
        <MainNav>
          <ul>
            {mainNavbarItems.map((item, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={item.icon} />
              </li>
            ))}
          </ul>
        </MainNav>
        <Right>
          <Link to="user">{authState.username}</Link>
        </Right>
      </StyledHeader>
      <Outlet />
    </>
  );
};

export default MainLayout;
