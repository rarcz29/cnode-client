import styled from 'styled-components';
import COLORS from 'themes/colors';

export const Container = styled.div`
    width: 350px;
    height: 100%;
    background-color: ${COLORS.BACKGROUND.darker};
    //padding: 1rem;
`;

export const ButtonsContainer = styled.div`
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
`;

export const TreeViewContainer = styled.div`
    margin: 2rem 1rem 0 1rem;
`;
