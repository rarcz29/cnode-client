import DIMENSIONS from 'constants/dimensions';
import styled from 'styled-components';

export const StyledAside = styled.aside`
    width: ${DIMENSIONS.SIDE_PANEL_WIDTH}px;
    height: calc(100vh - ${DIMENSIONS.HEADER_HIGHT}px);
    position: sticky;
    top: ${DIMENSIONS.HEADER_HIGHT}px;
    padding: 1rem;
    background-color: green;
`;
