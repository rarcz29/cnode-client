import React from 'react';
import { StyledList, StyleProps } from './List.style';

interface ListProps extends StyleProps {
  render?: React.ReactNode[];
}

// TODO: index as a key
const List : React.FC<ListProps> = ({ render, direction, space }) => {
  return (
    <StyledList space={space} direction={direction}>
      {render && render.map((item, index) => (
        <li key={index}>
          {item}
        </li>
      ))}
    </StyledList>
  );
};

export default List;
