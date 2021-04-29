import { BREAKPOINTS_MQ } from 'constants/breakpoints';
import DIMENSIONS from 'constants/dimensions';
import styled from 'styled-components';

export const LayoutContainer = styled.div`
    display: flex;
`;

export const LayoutContent = styled.div`
    width: calc(100% - ${2 * DIMENSIONS.SIDE_PANEL_WIDTH}px);
    min-height: calc(100vh - ${DIMENSIONS.HEADER_HEIGHT}px);

    @media ${BREAKPOINTS_MQ.laptopM} {
        width: calc(100% - ${DIMENSIONS.SIDE_PANEL_WIDTH}px);
    }
`;

export const PageContent = styled.div`
    margin: 2rem 0;
`;
