import Buttons from 'components/common/Button';
import COLORS from 'constants/colors';
import React from 'react';
import { ButtonsContainer, Container, HeaderContainer } from './styles';

const AuthForm = ({ submitText, onSubmit, children, width }) => {
    return (
        <Container width={width}>
            <HeaderContainer>
                <h1>{submitText}</h1>
            </HeaderContainer>
            <form onSubmit={onSubmit}>
                {children}
                <ButtonsContainer>
                    <Buttons
                        type="submit"
                        width="40%"
                        height="35px"
                        backgroundColor={COLORS.BLUE}
                        color={COLORS.FOREGROUND.MAIN}
                        rounded
                    >
                        {submitText}
                    </Buttons>
                </ButtonsContainer>
            </form>
        </Container>
    );
};

export default AuthForm;
