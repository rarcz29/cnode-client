import { TreeItem } from '@material-ui/lab';
import styled from 'styled-components';

export const StyledTreeItem = styled(TreeItem)`
    && {
        & div {
            background-color: transparent;
            font-family: 'Lato', sans-serif !important;

            &:hover {
                background-color: transparent;
            }
        }
    }
`;
