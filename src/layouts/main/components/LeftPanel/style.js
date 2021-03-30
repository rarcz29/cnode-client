import { TOP_BAR_HEIGHT } from 'constants/sizes';
import styled from 'styled-components';
import COLORS from 'themes/colors';

export const Container = styled.div`
    width: 350px;
    height: calc(100vh - ${TOP_BAR_HEIGHT + 2}px);
    background-color: ${COLORS.BACKGROUND.darker};
    //padding: 1rem;
`;

export const ButtonsContainer = styled.div`
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
`;

export const TopInputsContainer = styled.div`
    margin: 1rem;
`;

export const ContentContainer = styled.div`
    margin: 2rem 0 0 2rem;
    height: calc(100% - 85px - 4rem);
    overflow-y: auto;
`;

export const TreeViewContainer = styled.div`
    margin-right: 2rem;
`;
