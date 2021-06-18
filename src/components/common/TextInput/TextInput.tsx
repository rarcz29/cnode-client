import COLORS from 'constants/colors';
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
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const Input = styled.input<InputProps>`
  height: 40px;
  width: ${(props: InputProps) => (props.fullWidth ? '100%' : 'auto')};
  border-radius: ${(props: InputProps) => (props.rounded ? '20px' : '3px')};
  border-width: 0;
  padding: 0 1rem;
  background-color: ${COLORS.darkGray1};
  color: ${COLORS.foreground1};
`;

const TextInput: React.FC<TextInputProps> = (props) => <Input {...props} />;

export default TextInput;
