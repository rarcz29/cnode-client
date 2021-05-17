import COLORS from 'constants/colors';
import TRANSITIONS from 'constants/transitions';
import React from 'react';
import styled, { css } from 'styled-components';

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
  border-width: 0;
  ${(props: TextInputProps) =>
    props.error &&
    css`
      box-shadow: 0px 0px 6px 1px ${COLORS.MAIN_COLOR};
    `};
  transition: box-shadow ease-in-out ${TRANSITIONS.FAST}ms;
`;

const TextInput: React.FC<TextInputProps> = (props) => {
  const { forwardRef, ...rest } = props;
  return <StyledInput {...rest} ref={forwardRef} />;
};

export default TextInput;
