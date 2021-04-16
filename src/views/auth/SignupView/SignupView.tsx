import { Button, TextInput } from 'components/common';
import React, { useState } from 'react';
import {
    BottomContainer,
    BottomLinkContainer,
    Header,
    MainContainer,
    StyledLink,
} from '../shared/styles';
import { LinksContainer } from './styles';

const SignupView = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const INPUTS = [
        {
            type: 'text',
            placeholder: 'username...',
            setFunc: setUsername,
        },
        {
            type: 'email',
            placeholder: 'email...',
            setFunc: setEmail,
        },
        {
            type: 'password',
            placeholder: 'password...',
            setFunc: setPassword,
        },
        {
            type: 'password',
            placeholder: 'confirm...',
            setFunc: setConfirm,
        },
    ];

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password !== confirm) {
            alert('eeeeeeeeeeeee');
        } else {
            alert('uuuuuuuuu');
        }
    };

    return (
        <>
            <Header>Sign up</Header>
            <MainContainer>
                <form onSubmit={(event) => handleSubmit(event)}>
                    {INPUTS.map((item, index) => (
                        <TextInput
                            key={index}
                            width="100%"
                            height="40px"
                            placeholder={item.placeholder}
                            type={item.type}
                            onChange={(event) =>
                                item.setFunc(event.target.value)
                            }
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
                </form>
                <BottomLinkContainer>
                    <StyledLink to="#">Continue without an account</StyledLink>
                </BottomLinkContainer>
            </MainContainer>
        </>
    );
};

export default SignupView;
