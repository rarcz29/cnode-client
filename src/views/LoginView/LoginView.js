import AuthForm from 'components/AuthForm';
import TextInput from 'components/common/TextInput';
import COLORS from 'constants/colors';
import React from 'react';
import { Container } from './styles';

const LoginView = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('asdf');
    };

    return (
        <Container>
            <AuthForm submitText="Sign in" width="100%" onSubmit={handleSubmit}>
                <TextInput
                    width="100%"
                    height="40px"
                    backgroundColor={COLORS.DARK_GREY}
                    color={COLORS.FOREGROUND.MAIN}
                    placeholder="username or email..."
                ></TextInput>
                <TextInput
                    type="password"
                    width="100%"
                    height="40px"
                    backgroundColor={COLORS.DARK_GREY}
                    color={COLORS.FOREGROUND.MAIN}
                    placeholder="password..."
                ></TextInput>
            </AuthForm>
        </Container>
    );
};

export default LoginView;
