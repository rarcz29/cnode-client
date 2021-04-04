import { TreeItem as MaterialTreeItem } from '@material-ui/lab';
import React from 'react';
import styled from 'styled-components';

export const StyledTreeItem = styled(MaterialTreeItem)`
    && {
        margin-bottom: ${(props) => props.marginBottom || '2px'};

        & div {
            background-color: transparent;

            &:hover {
                background-color: transparent;
            }
        }
    }
`;

const TreeItem = (props) => {
    return <StyledTreeItem {...props} />;
};

export default TreeItem;
