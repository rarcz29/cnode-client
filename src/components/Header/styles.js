import DIMENSIONS from 'constants/dimensions';
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
            margin-left: 3rem;

            &:first-child {
                margin-left: 0;
            }

            &:last-child {
                margin-right: 4rem;
            }
        }
    }
`;
