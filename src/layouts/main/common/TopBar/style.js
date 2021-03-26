import styled from 'styled-components';
import COLORS from 'themes/colors';

export const StyledHeader = styled.header`
    width: 100%;
    height: 78px;
    background-color: ${COLORS.BACKGROUND.darker};
    padding: 0 47px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
