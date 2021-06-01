import COLORS from 'constants/colors';
import DIMENSIONS from 'constants/dimensions';
import React from 'react';
import styled from 'styled-components';

const Container = styled.aside`
    width: ${DIMENSIONS.THIN_SIDE_PANEL_WIDTH}px;
    height: calc(100vh - ${DIMENSIONS.HEADER_HEIGHT}px);
    border-right: 1px solid ${COLORS.LAYOUT_SEPARATOR};
`;

const LeftSidePanel = () => {
    return <Container>x</Container>;
};

export default LeftSidePanel;
