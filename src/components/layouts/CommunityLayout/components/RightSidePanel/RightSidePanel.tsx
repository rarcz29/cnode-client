import COLORS from 'constants/colors';
import DIMENSIONS from 'constants/dimensions';
import React from 'react';
import styled from 'styled-components';

const RSidePanel = styled.aside`
    position: sticky;
    top: ${DIMENSIONS.HEADER_HEIGHT}px;
    width: ${DIMENSIONS.SIDE_PANEL_WIDTH}px;
    height: calc(100vh - ${DIMENSIONS.HEADER_HEIGHT}px);
    border-left: 1px solid ${COLORS.LAYOUT_SEPARATOR};
`;

const RightSidePanel = () => {
    return <RSidePanel>asdf</RSidePanel>;
};

export default RightSidePanel;
