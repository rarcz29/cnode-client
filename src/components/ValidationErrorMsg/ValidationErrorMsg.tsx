import COLORS from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

type Props = {
    message?: string;
};

const StyledMessage = styled.p`
    font-size: 0.875rem;
    font-weight: normal;
    color: ${COLORS.MAIN_COLOR};
`;

const ValidationErrorMsg: React.FC<Props> = ({ message }) => {
    return <StyledMessage>{message}</StyledMessage>;
};

export default ValidationErrorMsg;
