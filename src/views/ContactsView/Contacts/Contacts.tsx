import React from 'react';
import styled from 'styled-components';
import Contact from '../Contact';

type ContactsProps = {};

const Wrapper = styled.div`
  & > * {
    margin-bottom: 28px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Contacts: React.FC<ContactsProps> = () => {
  return (
    <Wrapper>
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </Wrapper>
  );
};

export default Contacts;
