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

const INPUTS = [
    {
        type: 'text',
        placeholder: 'username...',
    },
    {
        type: 'email',
        placeholder: 'email...',
    },
    {
        type: 'password',
        placeholder: 'password...',
    },
    {
        type: 'password',
        placeholder: 'confirm...',
    },
];

const SignupView = () => {
    return (
        <>
            <Header>Sign up</Header>
            <MainContainer>
                {INPUTS.map((item, index) => (
                    <TextInput
                        key={index}
                        width="100%"
                        height="40px"
                        placeholder={item.placeholder}
                        type={item.type}
                    />
                ))}
                <BottomContainer>
                    <Button fontSize="1.125rem" height="inherit">
                        Sign up
                    </Button>
                    <LinksContainer>
                        <StyledLink to="../login">
                            Already have an account?
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

export default SignupView;
