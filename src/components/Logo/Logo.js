import LogoPic from 'assets/logo.png';
import React from 'react';
import { StyledImg } from './style';

const Logo = (props) => {
    return <StyledImg src={LogoPic} height={props.height} />;
};

export default Logo;
