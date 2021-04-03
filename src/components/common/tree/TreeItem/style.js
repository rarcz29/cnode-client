import { TreeItem } from '@material-ui/lab';
import styled from 'styled-components';

export const StyledTreeItem = styled(TreeItem)`
    && {
        margin-bottom: ${(props) => props.marginBottom || '2px'};

        & div {
            background-color: transparent;
            font-family: 'Karla', sans-serif !important;

            &:hover {
                background-color: transparent;
            }
        }
    }
`;
