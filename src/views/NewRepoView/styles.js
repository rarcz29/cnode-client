import { Chip } from '@material-ui/core';
import TextInput from 'components/common/TextInput';
import COLORS from 'constants/colors';
import styled from 'styled-components';

export const StyledTextInput = styled(TextInput)`
    height: 40px;
    background-color: ${COLORS.DARK_GREY};
    color: ${COLORS.FOREGROUND.MAIN};
`;

export const ChipsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
`;

export const StyledChip = styled(Chip)`
    height: ${(props) => props.height};
    background-color: ${(props) => props.backgroundColor || 'black'};
    color: ${(props) => props.color || 'white'};
    margin-top: 0.5rem;
    margin-right: 0.8rem;

    &:hover {
        background-color: ${(props) => props.backgroundColor || 'black'};
    }

    &:active,
    :focus {
        background-color: ${(props) => props.backgroundColor || 'black'};
    }

    & svg {
        color: ${(props) => props.color || 'white'};
    }
`;

export const CheckboxContainer = styled.div`
    margin-top: 1rem;

    & > * {
        margin-bottom: 0.5rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;
