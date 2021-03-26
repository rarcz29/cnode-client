import { TOP_BAR_HEIGHT } from 'constants/sizes';
import styled from 'styled-components';
import COLORS from 'themes/colors';

export const Header = styled.header`
    width: 100%;
    height: ${TOP_BAR_HEIGHT}px;
    background-color: ${COLORS.BACKGROUND.darker};
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const RightSideContainer = styled.div`
    display: flex;
`;

export const List = styled.ul`
    list-style-type: none;
    display: flex;
`;

export const ListElement = styled.li`
    margin-right: 3rem;
`;

export const Link = styled.a`
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: 0.05em;
    transition: color 0.3s;

    &:visited,
    &:link {
        color: ${COLORS.FOREGROUND.darker1};
    }

    &:hover {
        color: ${COLORS.FOREGROUND.main};
    }
`;
