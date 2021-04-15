import { Button, TextInput } from 'components/common';
import React from 'react';
import {
    BottomContainer,
    BottomLinkContainer,
    Header,
    LinksContainer,
    MainContainer,
} from './styles';

const SigninView = () => {
    return (
        <>
            <Header>Sign in</Header>
            <MainContainer>
                <TextInput
                    width="100%"
                    height="40px"
                    placeholder="username..."
                />
                <TextInput
                    width="100%"
                    height="40px"
                    placeholder="password..."
                    type="password"
                />
                <BottomContainer>
                    <Button fontSize="1.125rem" height="inherit">
                        Sign in
                    </Button>
                    <LinksContainer>
                        <p>Forgot password?</p>
                        <p>Don’t have an account?</p>
                    </LinksContainer>
                </BottomContainer>
                <BottomLinkContainer>
                    <p>Continue without an account</p>
                </BottomLinkContainer>
            </MainContainer>
        </>
    );
};

export default SigninView;
