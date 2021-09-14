import React from 'react';
import { faSlack } from '@fortawesome/free-brands-svg-icons';
import { IconLink } from 'ui/components';

export const Logo: React.FC = () => {
  return (
    <IconLink icon={faSlack} to="#" text=".gitnode" size="large" />
  );
};
