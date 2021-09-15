import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { StyledButton, StyledIcon, StyledLink, StyleProps } from './style';

interface IconLinkProps extends StyleProps {
  icon: IconDefinition,
  text: string,
  to: string,
  onClick?: () => void;
}

type IconButtonProps = Omit<IconLinkProps, 'to' | 'size'>;

export const IconLink: React.FC<IconLinkProps> = ({
  icon,
  text,
  to,
  size,
  onClick,
}) => (
  <StyledLink to={to} size={size} onClick={onClick}>
    <StyledIcon icon={icon} />
    <p>{text}</p>
  </StyledLink>
);

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  text,
  onClick,
}) => (
  <StyledButton onClick={onClick}>
    <StyledIcon icon={icon} />
    <p>{text}</p>
  </StyledButton>
);
