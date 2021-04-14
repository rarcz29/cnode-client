import React from 'react';
import styled from 'styled-components';

type Props = {
    width?: string;
    height?: string;
    placeholder?: string;
};

const StyledInput = styled.input<Props>`
    width: ${(props: Props) => props.width || '200px'};
    height: ${(props: Props) => props.height || '40px'};
    border-radius: ${(props: Props) => props.height ?? '20px'};
    padding: 0 1.5rem;
    font-size: 0.875rem;
`;

const TextInput: React.FC<Props> = (props) => {
    return <StyledInput {...props} />;
};

export default TextInput;
