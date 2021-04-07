import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import COLORS from 'constants/colors';
import DIMENSIONS from 'constants/dimensions';
import styled from 'styled-components';

export const PanelContainer = styled.div`
    display: flex;
`;

export const MainContainer = styled.div`
    width: calc(100% - ${2 * DIMENSIONS.SIDE_PANEL_WIDTH}px);
    padding: 1.375rem 4rem 1rem 4rem;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`;

export const TreeContainer = styled.div`
    margin-top: 2rem;
    margin-left: 1rem;
`;

export const TreeFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 1.2em;
    margin-right: 0.4em;
`;

export const StyledSection = styled.section`
    width: 100%;
    margin-bottom: 2rem;

    & > h1 {
        font-size: 1.125rem;
        margin-bottom: 1rem;
        letter-spacing: 0.04rem;
    }

    & > p {
        color: ${COLORS.FOREGROUND.SECONDARY};
        font-size: 0.75em;

        & > span {
            font-weight: bold;
        }
    }
`;
