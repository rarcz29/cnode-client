import React from 'react';
import { StyledList, StyleProps } from './style';

interface ListProps extends StyleProps {
  render?: React.ReactNode[]; // TODO: proper type?
  className?: string;
}

// TODO: index as a key
const List: React.FC<ListProps> = ({ render, direction, className }) => {
  return (
    <StyledList className={className} direction={direction}>
      {render && render.map((item, index) => (
        <li key={index}>
          {item}
        </li>
      ))}
    </StyledList>
  );
};

export default List;
