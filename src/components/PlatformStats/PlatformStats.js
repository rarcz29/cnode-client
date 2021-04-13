import React from 'react';
import { Container, Header, Icon, Stat } from './styles';

const PlatformStats = ({ width, height, icon, name, iconColor }) => {
    return (
        <Container width={width} height={height}>
            <Header>
                <Icon iconColor={iconColor}>{icon}</Icon>
                <h1>{name}</h1>
                <Stat>
                    <span>Accounts:</span>
                    <span>0</span>
                </Stat>
                <Stat>
                    <span>Repositories:</span>
                    <span>0</span>
                </Stat>
            </Header>
        </Container>
    );
};

export default PlatformStats;
