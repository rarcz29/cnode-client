import styled from 'styled-components';

export interface StyleProps {
  direction?: 'row' | 'column';
  space?: string;
}

const renderProperMargin = (props: StyleProps) => {
  return props.space && props.direction === 'column'
    ? `margin-bottom: ${props.space}`
    : `margin-rigth: ${props.space}`;
};

export const StyledList = styled.ul<StyleProps>`
  display: flex;
  flex-direction: ${p => p.direction ?? 'row'};
  list-style: none;

  & > li {
    ${props => renderProperMargin(props)};
  }
`;
