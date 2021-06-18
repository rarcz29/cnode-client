import COLOUR from 'constants/colour';
import React from 'react';
import styled from 'styled-components';

interface InputProps {
  fullWidth?: boolean;
  rounded?: boolean;
}

interface TextInputProps extends InputProps {
  name?: string;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
}

const Input = styled.input<InputProps>`
  height: 40px;
  width: ${(props: InputProps) => (props.fullWidth ? '100%' : 'auto')};
  border-radius: ${(props: InputProps) => (props.rounded ? '20px' : '3px')};
  border-width: 0;
  padding: 0 1.5rem;
  background-color: ${COLOUR.darkGrey1};
  color: ${COLOUR.foreground1};
`;

const TextInput: React.FC<TextInputProps> = (props) => (
  <Input {...props} autoComplete="off" />
);

export default TextInput;
