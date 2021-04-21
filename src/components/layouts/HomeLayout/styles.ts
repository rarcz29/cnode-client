import DIMENSIONS from 'constants/dimensions';
import styled from 'styled-components';

export const LayoutContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const LayoutContent = styled.div`
    width: calc(100% - ${2 * DIMENSIONS.SIDE_PANEL_WIDTH}px);
    min-height: calc(100vh - ${DIMENSIONS.HEADER_HEIGHT}px);
`;
