import { contactsDataMock } from 'domain/contacts/contactsDataMock';
import { ContactTile } from 'domain/contacts/ContactTile';
import React from 'react';
import { StyledList } from './style';

export const ContactsView: React.FC = () => {
  return (
    <div>
      <StyledList
        render={contactsDataMock.map(item =>
          <ContactTile key={item.name} />)}
        direction="column"
      />
    </div>
  );
};
