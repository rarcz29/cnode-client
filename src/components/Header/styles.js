import COLORS from 'constants/colors';
import DIMENSIONS from 'constants/dimensions';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    height: ${DIMENSIONS.HEADER_HIGHT}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    position: sticky;
    top: 0;
    background-color: ${COLORS.BACKGROUND.MAIN};
    z-index: 999;
`;

export const RightSideContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledNav = styled.nav`
    & ul {
        list-style: none;
        display: flex;

        & > li {
            letter-spacing: 0.05em;
            text-transform: uppercase;
            margin-right: 3rem;
        }
    }
`;

export const StyledNavLink = styled(NavLink)`
    && {
        text-decoration: none;

        &,
        &:link,
        &:visited,
        &:active {
            color: ${COLORS.FOREGROUND.MAIN};
        }
    }
`;
