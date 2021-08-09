import React from 'react';
import { Link } from 'react-router-dom';

interface IconLink {
  icon: React.ReactNode, // TODO: type
  text: string,
  to: string,
}

const IconLink : React.FC<IconLink> = ({ icon, text, to }) => {
  return (
    <Link to={to}>
      <span>{icon}</span>
      <p>{text}</p>
    </Link>
  );
};

export default IconLink;
