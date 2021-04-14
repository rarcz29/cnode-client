import COLORS from 'constants/colors';
import DIMENSIONS from 'constants/dimensions';
import styled from 'styled-components';

const SidePanel = styled.aside`
    width: ${DIMENSIONS.SIDE_PANEL_WIDTH}px;
    height: calc(100vh - ${DIMENSIONS.HEADER_HEIGHT}px);
    position: sticky;
    top: ${DIMENSIONS.SIDE_PANEL_WIDTH}px;
`;

export const LayoutContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const LSidePanel = styled(SidePanel)`
    border-right: 1px solid ${COLORS.LAYOUT_SEPARATOR};
`;

export const RSidePanel = styled(SidePanel)`
    border-left: 1px solid ${COLORS.LAYOUT_SEPARATOR};
`;

export const LayoutContent = styled.div`
    width: calc(100% - ${2 * DIMENSIONS.SIDE_PANEL_WIDTH}px);
    min-height: calc(100vh - ${DIMENSIONS.HEADER_HEIGHT}px);
`;
