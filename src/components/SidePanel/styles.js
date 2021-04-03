import DIMENSIONS from 'constants/dimensions';
import Scrollbars from 'react-custom-scrollbars';
import styled from 'styled-components';

export const StyledAside = styled.aside`
    width: ${DIMENSIONS.SIDE_PANEL_WIDTH}px;
    height: calc(100vh - ${DIMENSIONS.HEADER_HIGHT}px);
    position: sticky;
    top: ${DIMENSIONS.HEADER_HIGHT}px;
`;

export const StyledScrollbars = styled(Scrollbars)`
    width: 100%;
    height: 100%;
`;

export const Content = styled.div`
    padding: 1rem;
`;
