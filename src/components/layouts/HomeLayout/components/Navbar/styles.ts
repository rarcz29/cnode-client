import COLORS from 'constants/colors';
import DIMENSIONS from 'constants/dimensions';
import TRANSITIONS from 'constants/transitions';
import styled from 'styled-components';

export const NavBarExternal = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid ${COLORS.LAYOUT_SEPARATOR};
    position: sticky;
    top: ${DIMENSIONS.HEADER_HEIGHT}px;
    background-color: ${COLORS.BACKGROUND.DARK_1};
`;

export const NavBarInternal = styled.header`
    width: 100%;
    height: inherit;

    & > ul {
        height: inherit;
        list-style: none;
        display: flex;
        align-items: center;

        & > li {
            margin-right: 3rem;

            &:last-child {
                margin-right: 0;
            }

            & > a {
                transition: color ease-in-out ${TRANSITIONS.FAST}ms;

                &:link,
                &:visited,
                &:active {
                    text-decoration: none;
                    color: ${COLORS.FOREGROUND.DARKER};
                }

                &:hover {
                    color: ${COLORS.FOREGROUND.MAIN};
                }
            }
        }
    }
`;
