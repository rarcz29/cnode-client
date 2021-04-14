import React from 'react';
import styled from 'styled-components';

type Props = {
    width: number;
    height?: number;
    sidePadding?: number;
};

const StyledDiv = styled.div<Props>`
    width: ${(props: Props) => props.width};
    height: ${(props: Props) => props.height || 'auto'};
    padding: 0 ${(props: Props) => props.sidePadding || '20px'};
    margin: 0 auto;
`;

const Container: React.FC<Props> = (props) => {
    return <StyledDiv {...props} />;
};

export default Container;
