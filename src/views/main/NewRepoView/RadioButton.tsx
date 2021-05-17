import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import COLORS from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: any;
  label: string;
}

const Container = styled.label`
  display: block;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 2.2rem;
  cursor: pointer;
  font-size: 0.875rem;
  user-select: none;
  width: 140px;
  height: 1.5rem;
  color: ${COLORS.FOREGROUND.DARKER};

  & > input:checked ~ span {
    background-color: ${COLORS.MAIN_COLOR};
    border-color: ${COLORS.MAIN_COLOR};
  }
`;

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const Checkmark = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  border: 1px solid ${COLORS.FOREGROUND.DARKER};
  transition: background-color ease-in-out 250ms, border-color ease-in-out 250ms;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 0;
  font-size: 1.5rem;
`;

const RadioButton: React.FC<RadioButtonProps> = ({ icon, label, ...props }) => {
  return (
    <Container>
      <StyledIcon icon={icon} />
      {label}
      <StyledInput {...props} type="radio" />
      <Checkmark />
    </Container>
  );
};

export default RadioButton;
