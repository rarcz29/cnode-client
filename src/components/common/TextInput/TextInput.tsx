import COLORS from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

type Props = {
    width?: string;
    height?: string;
    placeholder?: string;
    type?: string;
    backgroundColor?: string;
    color?: string;
};

const StyledInput = styled.input<Props>`
    width: ${(props: Props) => props.width || '200px'};
    height: ${(props: Props) => props.height || '40px'};
    border-radius: 100vh;
    padding: 0 2rem;
    font-size: 0.875rem;
    background-color: ${(props: Props) =>
        props.backgroundColor || COLORS.BACKGROUND.DARK_3};
    color: ${(props: Props) => props.color || COLORS.FOREGROUND.MAIN};
    border-width: 0;
`;

const TextInput: React.FC<Props> = (props) => {
    return <StyledInput {...props} />;
};

export default TextInput;
