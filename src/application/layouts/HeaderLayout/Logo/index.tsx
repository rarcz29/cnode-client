import React from 'react';
import { faSlack } from '@fortawesome/free-brands-svg-icons';
import { IconLink } from 'ui/components';

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <IconLink icon={faSlack} to="#" text=".gitnode" size="large" />
  );
};

export default Logo;
