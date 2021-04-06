import COLORS from 'constants/colors';
import styled from 'styled-components';

const PANEL_WIDTH = 270;
const PANEL_HEIGHT = 160;
const HEADER_HEIGHT = 60;

export const StyledDiv = styled.div`
    width: ${PANEL_WIDTH + 'px'};
    height: ${PANEL_HEIGHT + 'px'};
    border-radius: 14px 14px 0 0;
    position: fixed;
    bottom: ${(props) =>
        props.show ? '0' : -PANEL_HEIGHT + HEADER_HEIGHT + 'px'};
    right: 1rem;
    background-color: ${(props) =>
        props.show ? COLORS.DARK_GREY : COLORS.BACKGROUND.MAIN};
    z-index: 100;
    transition: bottom ease-in-out 500ms, background-color ease-in-out 500ms;
`;

export const IconsContainer = styled.div`
    width: 100%;
    height: ${HEADER_HEIGHT + 'px'};
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: inherit;

    & svg {
        font-size: 30px;
    }
`;

export const ContentContainer = styled.div`
    width: calc(100% - 2rem);
    height: calc(100% - 2rem - ${HEADER_HEIGHT + 'px'});
    margin: 1rem;

    & > * {
        margin-bottom: 1rem;

        &:last-child {
            display: flex;
            justify-content: center;
            margin-bottom: 0;

            & > * {
                color: ${COLORS.FOREGROUND.SECONDARY};
                transition: color ease-in-out 250ms;

                &:hover {
                    cursor: pointer;
                    color: ${COLORS.FOREGROUND.MAIN};
                }
            }
        }
    }
`;
