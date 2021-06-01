import COLORS from 'constants/colors';
import styled from 'styled-components';

export const Container = styled.label`
  position: relative;
  padding-left: 2.2rem;
  cursor: pointer;
  font-size: 0.875rem;
  user-select: none;
  color: ${COLORS.FOREGROUND.DARKER};

  & > input:checked ~ span {
    background-color: ${COLORS.MAIN_COLOR};
    border-color: ${COLORS.MAIN_COLOR};
  }
`;

export const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1rem;
  width: 1rem;
  border-radius: 0.3125rem;
  border: 1px solid ${COLORS.FOREGROUND.DARKER};
  transition: background-color ease-in-out 250ms, border-color ease-in-out 250ms;
`;
