import COLORS from 'constants/colors';
import DIMENSIONS from 'constants/dimensions';
import TRANSITIONS from 'constants/transitions';
import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    height: ${DIMENSIONS.HEADER_HEIGHT}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    border-bottom: 1px solid ${COLORS.LAYOUT_SEPARATOR};
    position: sticky;
    top: 0;
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;

    & > * {
        margin-right: 32px;

        &:last-child {
            margin-right: 0;
        }
    }
`;

export const UserContainer = styled.div`
    width: 124px;
    height: 44px;
    border-radius: 22px;
    display: flex;
    align-items: center;
    padding: 0 13px;
    background-color: ${COLORS.BACKGROUND.DARK_3};
    transition: ${TRANSITIONS.FAST}ms;

    &:hover {
        cursor: pointer;
        background-color: ${COLORS.BACKGROUND.DARK_2};
    }
`;

export const MainNav = styled.nav`
    width: 290px;
    position: absolute;
    left: calc(50% - 145px);

    & > ul {
        width: inherit;
        list-style: none;
        display: flex;
        justify-content: space-between;
        font-size: 1.5rem;
    }
`;
