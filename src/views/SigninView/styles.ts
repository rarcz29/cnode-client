import COLORS from 'constants/colors';
import styled, { css } from 'styled-components';

const SharedLinkStyle = css`
    font-size: 0.875rem;
    text-decoration: underline;
    text-underline-offset: 0.1rem;
    color: ${COLORS.FOREGROUND.DARKER};
`;

export const Header = styled.header`
    font-size: 4rem;
    color: ${COLORS.MAIN_COLOR};
    position: absolute;
    top: 19px;
    left: 38px;
`;

export const MainContainer = styled.div`
    max-width: 367px;

    & > * {
        margin-bottom: 1rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;

export const BottomContainer = styled.div`
    width: 100%;
    height: 42px;
    display: flex;
    justify-content: space-between;
`;

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    ${SharedLinkStyle}
`;

export const BottomLinkContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.875rem;
    ${SharedLinkStyle}
`;
