import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { StyledIcon, StyledLink } from './IconLink.style';

interface IconLink {
  icon: IconDefinition,
  text: string,
  to: string,
}

const IconLink: React.FC<IconLink> = ({ icon, text, to }) => {
  return (
    <StyledLink to={to}>
      <StyledIcon icon={icon} />
      <p>{text}</p>
    </StyledLink>
  );
};

export default IconLink;
