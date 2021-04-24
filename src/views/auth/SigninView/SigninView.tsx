import { login } from 'actions/authActions';
import { Button, TextInput } from 'components/common';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootStore } from 'store';
import {
    BottomContainer,
    BottomLinkContainer,
    Header,
    MainContainer,
    StyledLink,
} from '../shared/styles';
import { LinksContainer } from './styles';

const SigninView = () => {
    const dispatch = useDispatch();
    const authState = useSelector((state: RootStore) => state.auth);
    const navigate = useNavigate();
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        authState.isLoggedIn && navigate('/');
    }, [authState]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: form valudation
        await dispatch(login(usernameOrEmail, password));
    };
    // TODO: form submit button
    return (
        <>
            <Header>Sign in</Header>
            <MainContainer>
                <form onSubmit={handleSubmit}>
                    <TextInput
                        width="100%"
                        height="40px"
                        placeholder="username..."
                        onChange={(event) =>
                            setUsernameOrEmail(event.target.value)
                        }
                        rounded
                    />
                    <TextInput
                        width="100%"
                        height="40px"
                        placeholder="password..."
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                        rounded
                    />
                    <BottomContainer>
                        <Button size="big" disabled={authState.loading}>
                            Sign in
                        </Button>
                        <LinksContainer>
                            <StyledLink to="#">Forgot password?</StyledLink>
                            <StyledLink to="../register">
                                Don’t have an account?
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

export default SigninView;
