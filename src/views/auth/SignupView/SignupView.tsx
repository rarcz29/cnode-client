import { register } from 'actions/authActions';
import { Button, TextInput } from 'components/common';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from 'store';
import {
    BottomContainer,
    BottomLinkContainer,
    Header,
    MainContainer,
    StyledLink,
} from '../shared/styles';
import { LinksContainer } from './styles';

const SignupView = () => {
    const dispatch = useDispatch();
    const authState = useSelector((state: RootStore) => state.auth);
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

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: form valudation
        await dispatch(register(username, email, password));
    };

    return (
        <>
            <Header>Sign up</Header>
            <MainContainer>
                <form id="auth-form" onSubmit={handleSubmit}>
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
                </form>
                <BottomContainer>
                    <Button
                        form="auth-form"
                        fontSize="1.125rem"
                        height="inherit"
                    >
                        {authState.loading ? 'loading...' : 'Sign up'}
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
