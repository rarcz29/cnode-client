import React from 'react';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from 'ui/components';
import {
  ContactWrapper,
  StatusIndicator,
  TextWrapper,
  StyledButton,
} from './style';

export const ContactTile: React.FC = () => {
  return (
    <ContactWrapper>
      <Avatar />
      <TextWrapper>
        <h1>John Smith</h1>
        <p>Active now</p>
      </TextWrapper>
      <StyledButton>
        <FontAwesomeIcon icon={faEllipsisV} />
      </StyledButton>
      <StatusIndicator />
    </ContactWrapper>
  );
};
