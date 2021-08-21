import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { StyledIcon, StyledLink, StyleProps } from './style';

interface IconLink extends StyleProps {
  icon: IconDefinition,
  text: string,
  to: string,
}

const IconLink: React.FC<IconLink> = ({ icon, text, to, size }) => {
  return (
    <StyledLink to={to} size={size}>
      <StyledIcon icon={icon} />
      <p>{text}</p>
    </StyledLink>
  );
};

export default IconLink;
