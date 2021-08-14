import React from 'react';
import { StyledLink } from './IconLink.style';

interface IconLink {
  icon: React.ReactNode, // TODO: type
  text: string,
  to: string,
}

const IconLink: React.FC<IconLink> = ({ icon, text, to }) => {
  return (
    <StyledLink to={to}>
      <span>{icon}</span>
      <p>{text}</p>
    </StyledLink>
  );
};

export default IconLink;
