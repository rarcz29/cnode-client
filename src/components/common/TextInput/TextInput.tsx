import COLORS from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

type Props = {
    width?: string;
    height?: string;
    placeholder?: string;
    type?: string;
    color?: 'primary' | 'secondary';
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    rounded?: boolean;
};

const handleColor = (color?: string) => {
    switch (color) {
        case 'secondary':
            return COLORS.BACKGROUND.DARK_2;
        case 'primary':
        default:
            return COLORS.BACKGROUND.DARK_3;
    }
};

const StyledInput = styled.input<Props>`
    width: ${(props: Props) => props.width || '300px'};
    height: ${(props: Props) => props.height || '40px'};
    border-radius: ${(props: Props) => (props.rounded ? '100vh' : '0')};
    padding: 0 2rem;
    font-size: 0.875rem;
    background-color: ${(props: Props) => handleColor(props.color)};
    color: ${COLORS.FOREGROUND.MAIN};
    border-width: 0;
`;

const TextInput: React.FC<Props> = (props) => {
    return <StyledInput {...props} />;
};

export default TextInput;
