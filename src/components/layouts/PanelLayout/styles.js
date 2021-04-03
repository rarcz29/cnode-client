import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DIMENSIONS from 'constants/dimensions';
import styled from 'styled-components';

export const PanelContainer = styled.div`
    display: flex;
`;

export const MainContainer = styled.div`
    width: calc(100vw - ${2 * DIMENSIONS.SIDE_PANEL_WIDTH}px);
    height: 2000px;
    padding: 1rem 4rem;
    background-color: pink;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`;

export const TreeContainer = styled.div`
    margin-top: 2rem;
    margin-left: 1rem;
    background-color: blue;
`;

export const TreeFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 1.2em;
    margin-right: 0.4em;
`;
