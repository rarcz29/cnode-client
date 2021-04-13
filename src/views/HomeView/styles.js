import COLORS from 'constants/colors';
import styled from 'styled-components';

export const Warning = styled.p`
    color: ${COLORS.YELLOW} !important;
    margin-top: 0.5rem;

    & > span {
        margin-left: 0.5rem;
    }
`;

export const OrderedList = styled.ol`
    margin-left: 1.5rem;
`;

export const UnorderedList = styled.ul`
    margin-left: 1.5rem;
`;

export const Link = styled.a`
    &:link,
    &:visited {
        color: ${COLORS.BLUE};
    }
`;

export const StatsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.125rem;
`;
