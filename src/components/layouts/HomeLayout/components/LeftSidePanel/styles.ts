import COLORS from 'constants/colors';
import TRANSITIONS from 'constants/transitions';
import styled from 'styled-components';
import SidePanel from '../SidePanel';

// type AddBtAndFiltersContainerProps = {
//     filtersWidth: string;
// };

// type AddBtContainerProps = {
//     onMouseLeave: React.DOMAttributes<HTMLDivElement>;
//     width: string;
// };

export const LSidePanel = styled(SidePanel)`
    border-right: 1px solid ${COLORS.LAYOUT_SEPARATOR};
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
