import DIMENSIONS from 'constants/dimensions';
import React from 'react';
import styled from 'styled-components';

type Props = {
    className?: string;
};

const Panel = styled.aside`
    width: ${DIMENSIONS.SIDE_PANEL_WIDTH}px;
    height: calc(100vh - ${DIMENSIONS.HEADER_HEIGHT}px);
    position: sticky;
    top: ${DIMENSIONS.SIDE_PANEL_WIDTH}px;
`;

const SidePanel: React.FC<Props> = (props) => {
    return <Panel {...props} />;
};

export default SidePanel;
