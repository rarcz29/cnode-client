import { BREAKPOINTS_MQ } from 'constants/breakpoints';
import COLORS from 'constants/colors';
import DIMENSIONS from 'constants/dimensions';
import TRANSITIONS from 'constants/transitions';
import styled from 'styled-components';

type LSidePanelProps = {
    isHidden: boolean;
};

export const LSidePanel = styled.aside<LSidePanelProps>`
    position: sticky;
    top: ${DIMENSIONS.HEADER_HEIGHT}px;
    width: ${DIMENSIONS.SIDE_PANEL_WIDTH}px;
    height: calc(100vh - ${DIMENSIONS.HEADER_HEIGHT}px);
    border-right: 1px solid ${COLORS.LAYOUT_SEPARATOR};
    background-color: ${COLORS.BACKGROUND.DARK_1};
    overflow: hidden;
    z-index: 100;
    transition: width ease-in-out ${TRANSITIONS.SLOW}ms;

    @media ${BREAKPOINTS_MQ.laptop} {
        width: 60px;
        width: ${(props: LSidePanelProps) =>
            props.isHidden ? '60px' : DIMENSIONS.SIDE_PANEL_WIDTH + 'px'};
        position: fixed;
    }
`;

export const HiddenPanel = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SearchAndFilter = styled.div`
    padding: 1rem;
    border-bottom: 1px solid ${COLORS.LAYOUT_SEPARATOR};
    overflow: hidden;
    transition: height ease-in-out ${TRANSITIONS.FAST}ms;

    & > * {
        margin-bottom: 1.375rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;

export const AddBtAndFiltersContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    transition: width ease-in-out ${TRANSITIONS.SLOW}ms;
`;
