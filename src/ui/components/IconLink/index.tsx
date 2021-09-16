import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { StyledButton, StyledIcon, StyledLink, StyleProps } from './style';

interface IconLinkProps extends StyleProps {
  icon: IconDefinition,
  text: string,
  to?: string,
  onClick?: () => void;
}

export const IconLink: React.FC<IconLinkProps> = ({
  icon,
  text,
  to,
  size,
  onClick,
}) => {
  const renderContent = () => (
    <>
      <StyledIcon icon={icon} />
      <p>{text}</p>
    </>
  );

  return to ? (
    <StyledLink to={to} size={size} onClick={onClick}>
      {renderContent()}
    </StyledLink>
  ) : (
    <StyledButton onClick={onClick}>
      {renderContent()}
    </StyledButton>
  );
};
