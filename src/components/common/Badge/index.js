import { Badge as MaterialBadge } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export const StyledBadge = styled(MaterialBadge)`
    && {
        & > span {
            font-family: 'Karla', sans-serif !important;
            background-color: ${(props) => props.color || 'green'};
        }
    }
`;

const Badge = (props) => {
    return <StyledBadge {...props} />;
};

export default Badge;
