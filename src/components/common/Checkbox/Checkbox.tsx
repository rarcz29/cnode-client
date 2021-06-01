import React from 'react';
import { Checkmark, Container, StyledInput } from './styles';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  forwardRef?: React.RefObject<HTMLInputElement>;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, forwardRef, ...rest }) => {
  return (
    <Container>
      {label}
      <StyledInput {...rest} ref={forwardRef} type="checkbox" />
      <Checkmark />
    </Container>
  );
};

export default Checkbox;
