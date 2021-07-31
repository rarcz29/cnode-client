import styled from 'styled-components';

export const Aside = styled.aside`
  width: 224px;
  margin-right: 24px;
`;

export const List = styled.ul`
  list-style-type: none;

  & > li {
    margin-bottom: 1.75rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
