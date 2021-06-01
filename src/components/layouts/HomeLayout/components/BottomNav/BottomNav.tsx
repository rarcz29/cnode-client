import {
  faHome,
  faPhoneSquare,
  faPlusSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import COLORS from 'constants/colors';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  height: 80px;
  width: 100%;
  background-color: ${COLORS.BACKGROUND.DARK_2};
  font-size: 1.5rem;

  a {
    &:link,
    &:visited,
    &:active {
      text-decoration: none;
      color: ${COLORS.FOREGROUND.MAIN};
    }
  }
`;

const BottomNav = () => {
  return (
    <Wrapper>
      <Link to="new">
        <FontAwesomeIcon icon={faPlusSquare} />
      </Link>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <FontAwesomeIcon icon={faPhoneSquare} />
    </Wrapper>
  );
};

export default BottomNav;
