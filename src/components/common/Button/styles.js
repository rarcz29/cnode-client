import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
    && {
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        background-color: ${(props) => props.backgroundColor};
        color: ${(props) => props.color};
        font-family: 'Karla', sans-serif;
        text-transform: none;
        font-size: 1rem;
        border: ${(props) => (props.outlined ? '1px' : '0')} solid
            ${(props) => props.borderColor || props.color || 'white'};
        border-radius: ${(props) => (props.rounded ? '99999999999px' : 0)};

        &:hover {
            background-color: ${(props) => props.backgroundColor};
        }
    }
`;
