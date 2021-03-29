import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
    && {
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        border-radius: ${(props) => props.borderRadius || '99999px'};
    }
`;
