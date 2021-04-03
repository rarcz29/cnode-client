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
