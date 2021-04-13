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
    padding: 40px;
`;

export const Right = styled.div`
    display: flex;

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
    background-color: ${COLORS.BACKGROUND.DARK_2};
    transition: ${TRANSITIONS.FAST}ms;

    &:hover {
        cursor: pointer;
        background-color: ${COLORS.BACKGROUND.DARK_3};
    }
`;
