import COLORS from 'constants/colors';
import DIMENSIONS from 'constants/dimensions';
import TRANSITIONS from 'constants/transitions';
import React from 'react';
import styled, { css } from 'styled-components';

////////////////////////////////
// Props
////////////////////////////////

type AddBtAndFiltersContainerProps = {
    filtersWidth: string;
};

type AddBtContainerProps = {
    onMouseLeave: React.DOMAttributes<HTMLDivElement>;
    width: string;
};

//////////////////////////////
// locale
//////////////////////////////

const paddings = css`
    padding: 1rem;
`;

const SidePanel = styled.aside`
    width: ${DIMENSIONS.SIDE_PANEL_WIDTH}px;
    height: calc(100vh - ${DIMENSIONS.HEADER_HEIGHT}px);
    position: sticky;
    top: ${DIMENSIONS.SIDE_PANEL_WIDTH}px;
`;

/////////////////////////////
// exports
/////////////////////////////

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

export const SearchAndFilter = styled.div`
    ${paddings}
    border-bottom: 1px solid ${COLORS.LAYOUT_SEPARATOR};
    overflow: hidden;

    & > * {
        margin-bottom: 1.375rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;

export const AddBtAndFiltersContainer = styled.div<AddBtAndFiltersContainerProps>`
    display: flex;
    justify-content: space-between;
    width: ${(props: AddBtAndFiltersContainerProps) => props.filtersWidth};
    transition: width ease-in-out ${TRANSITIONS.SLOW}ms;
`;

export const AddBtContainer = styled.div<AddBtContainerProps>`
    width: ${(props: AddBtContainerProps) => props.width};
    border-radius: 100vh;
    overflow: hidden;
    transition: width ease-in-out ${TRANSITIONS.SLOW}ms;

    & > div {
        height: 100%;
        width: calc(${DIMENSIONS.SIDE_PANEL_WIDTH}px - 2rem);
        display: flex;
        justify-content: space-between;
        border-radius: inherit;
    }
`;

export const NavBarExternal = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid ${COLORS.LAYOUT_SEPARATOR};
    position: sticky;
    top: ${DIMENSIONS.HEADER_HEIGHT}px;
`;

export const NavBarInternal = styled.header`
    width: 100%;
    height: inherit;

    & > ul {
        height: inherit;
        list-style: none;
        display: flex;
        align-items: center;

        & > li {
            margin-right: 3rem;

            &:last-child {
                margin-right: 0;
            }
        }
    }
`;
