import { yupResolver } from '@hookform/resolvers/yup';
import { login } from 'actions/authActions';
import { Button, TextInput } from 'components/common';
import ValidationErrorMsg from 'components/ValidationErrorMsg';
import { BREAKPOINTS } from 'constants/breakpoints';
import { useMediaQuery } from 'hooks';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootStore } from 'store';
import * as yup from 'yup';
import {
    BottomContainer,
    BottomLinkContainer,
    Header,
    MainContainer,
    StyledLink,
} from '../shared/styles';
import { LinksContainer } from './styles';

type FormInput = {
    userIdentifier: string;
    password: string;
};

type Inputs = {
    placeholder: string;
    name: 'userIdentifier' | 'password';
    type: string;
};

const schema = yup.object().shape({
    userIdentifier: yup.string().required(),
    password: yup.string().required(),
});

const inputs: Inputs[] = [
    {
        placeholder: 'username or email...',
        name: 'userIdentifier',
        type: 'text',
    },
    {
        placeholder: 'password...',
        name: 'password',
        type: 'password',
    },
];

const SigninView = () => {
    const isLaptop = useMediaQuery(BREAKPOINTS.laptop);
    const isMobileM = useMediaQuery(BREAKPOINTS.mobileM);
    const dispatch = useDispatch();
    const authState = useSelector((state: RootStore) => state.auth);
    const navigate = useNavigate();
    // TODO: input ref
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInput>({ resolver: yupResolver(schema) });

    useEffect(() => {
        authState.isLoggedIn && navigate('/');
    }, [authState.isLoggedIn]);

    const onSubmit = async (data: FormInput) =>
        dispatch(login(data.userIdentifier, data.password));

    return (
        <>
            {isLaptop && <Header>Sign in</Header>}
            <MainContainer>
                <form id="auth-form" onSubmit={handleSubmit(onSubmit)}>
                    {inputs.map((item, index) => (
                        <>
                            <TextInput
                                key={index}
                                width="100%"
                                height="40px"
                                placeholder={item.placeholder}
                                type={item.type}
                                {...register(item.name)}
                                rounded
                            />
                            {errors[item.name] && (
                                <ValidationErrorMsg
                                    message={errors[item.name]?.message}
                                />
                            )}
                        </>
                    ))}
                </form>
                <BottomContainer>
                    <Button
                        size="big"
                        disabled={authState.loading}
                        form="auth-form"
                    >
                        {authState.loading ? 'loading...' : 'Sign in'}
                    </Button>
                    <LinksContainer>
                        <StyledLink to="#">Forgot password?</StyledLink>
                        <StyledLink to="../register">
                            {isMobileM ? 'Don’t have an account' : 'Sign up'}
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
