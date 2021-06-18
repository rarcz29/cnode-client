import { faSlack } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

type LogoProps = {};

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoIcon = styled(FontAwesomeIcon)`
  font-size: 2.25rem;
  color: red;
  margin-right: 1rem;
`;

const LogoText = styled.p`
  font-size: 1.5rem;
`;

const Logo: React.FC<LogoProps> = () => (
  <LogoWrapper>
    <LogoIcon icon={faSlack} />
    <LogoText>.gitnode</LogoText>
  </LogoWrapper>
);

export default Logo;
