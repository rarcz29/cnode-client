import styled from 'styled-components';

export interface StyleProps {
  direction?: 'row' | 'column';
}

export const StyledList = styled.ul<StyleProps>`
  display: flex;
  flex-direction: ${p => p.direction ?? 'row'};
  list-style: none;
`;
