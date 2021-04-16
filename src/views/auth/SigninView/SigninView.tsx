import { Button, TextInput } from 'components/common';
import React from 'react';
import {
    BottomContainer,
    BottomLinkContainer,
    Header,
    MainContainer,
    StyledLink,
} from '../shared/styles';
import { LinksContainer } from './styles';

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
                        <StyledLink to="#">Forgot password?</StyledLink>
                        <StyledLink to="../register">
                            Don’t have an account?
                        </StyledLink>
                    </LinksContainer>
                </BottomContainer>
                <BottomLinkContainer>
                    <StyledLink to="#">Continue without an account</StyledLink>
                </BottomLinkContainer>
            </MainContainer>
        </>
    );
};

export default SigninView;
