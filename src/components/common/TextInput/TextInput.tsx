import COLORS from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  forwardRef?: React.RefObject<HTMLInputElement>;
  rounded?: boolean;
  color?: 'primary' | 'secondary';
  width?: 'short' | 'max';
  error?: boolean;
}

const handleWidth = (width?: string) => {
  switch (width) {
    case 'short':
      return '300px';
    case 'max':
    default:
      return '100%';
  }
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

const StyledInput = styled.input<TextInputProps>`
  width: ${(props: TextInputProps) => handleWidth(props.width)};
  height: 40px;
  border-radius: ${(props: TextInputProps) => (props.rounded ? '100vh' : '0')};
  padding: 0 2rem;
  font-size: 0.875rem;
  background-color: ${(props: TextInputProps) => handleColor(props.color)};
  color: ${COLORS.FOREGROUND.MAIN};
  border: 1px solid ${COLORS.MAIN_COLOR};
  border-width: ${(props: TextInputProps) => (props.error ? '1px' : '0')};
`;

const TextInput: React.FC<TextInputProps> = (props) => {
  const { forwardRef, ...rest } = props;
  return <StyledInput {...rest} ref={forwardRef} />;
};

export default TextInput;
