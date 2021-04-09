import COLORS from 'constants/colors';
import DIMENSIONS from 'constants/dimensions';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - ${DIMENSIONS.HEADER_HIGHT}px);
`;

export const Wrapper = styled.div`
    max-width: 750px;
    margin: 0 20px;
`;

export const MarginedContainer = styled.div`
    max-width: 85%;
    margin-left: 15%;
`;

export const StyledHeader = styled.h1`
    font-family: 'Cardo', serif;
    font-size: 3rem;
    letter-spacing: 0.05em;
    font-weight: bold;
    color: ${COLORS.FOREGROUND.MAIN};
    margin-bottom: 3.125rem;
`;

export const StyledParagraph = styled.p`
    font-size: 1.125rem;
    color: ${COLORS.FOREGROUND.SECONDARY};
    letter-spacing: 0.025em;
    max-width: 342px;
    margin-bottom: 4.125rem;
`;

export const StyledNav = styled.nav`
    & > ul {
        display: flex;
        list-style: none;

        & > li {
            margin-right: 3.125rem;
            font-size: 1.5rem;
            color: ${COLORS.RED};
            font-style: italic;
            text-transform: uppercase;

            &:last-child {
                margin-right: 0;
            }
        }
    }
`;

export const TypicalWrapper = styled.div`
    font-family: 'Cardo', serif;
    font-size: 1.5rem;
    letter-spacing: 0.05em;
    color: ${COLORS.FOREGROUND.SECONDARY};
    margin-bottom: 1.125rem;
`;
