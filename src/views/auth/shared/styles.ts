import COLORS from 'constants/colors';
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
    max-width: 367px;

    & > form > * {
        margin-bottom: 1rem;
    }
`;

export const BottomContainer = styled.div`
    width: 100%;
    height: 42px;
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

    &:link,
    &:visited,
    &:active {
        color: ${COLORS.FOREGROUND.MAIN};
    }
`;
