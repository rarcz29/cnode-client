import COLORS from 'constants/colors';
import TRANSITIONS from 'constants/transitions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
    font-size: 4rem;
    color: ${COLORS.MAIN_COLOR};
    position: absolute;
    top: 19px;
    left: 38px;
`;

export const MainContainer = styled.div`
    width: 367px;

    & > form > p {
        margin-bottom: 1rem;
    }
`;

export const BottomContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
`;

export const BottomLinkContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.875rem;
`;

export const StyledLink = styled(Link)`
    font-size: 0.875rem;
    transition: color ease-in-out ${TRANSITIONS.FAST}ms;

    &:link,
    &:visited,
    &:active {
        color: ${COLORS.FOREGROUND.DARKER};
    }

    &:hover {
        color: ${COLORS.FOREGROUND.MAIN};
    }
`;
