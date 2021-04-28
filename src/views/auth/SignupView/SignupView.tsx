import { yupResolver } from '@hookform/resolvers/yup';
import { register as registerAction } from 'actions/authActions';
import { Button, TextInput } from 'components/common';
import ValidationErrorMsg from 'components/ValidationErrorMsg';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
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
    username: string;
    email: string;
    password: string;
    confirm: string;
};

type Inputs = {
    placeholder: string;
    name: 'username' | 'email' | 'password' | 'confirm';
    type: string;
};

const schema = yup.object().shape({
    username: yup.string().required().min(3).max(100),
    email: yup.string().required().email().max(65),
    password: yup.string().required().min(6).max(50),
    confirm: yup
        .string()
        .required()
        .oneOf([yup.ref('password')], 'Passwords must match'),
});

const inputs: Inputs[] = [
    {
        placeholder: 'username...',
        name: 'username',
        type: 'text',
    },
    {
        placeholder: 'email...',
        name: 'email',
        type: 'email',
    },
    {
        placeholder: 'password...',
        name: 'password',
        type: 'password',
    },
    {
        placeholder: 'confirm...',
        name: 'confirm',
        type: 'password',
    },
];

const SignupView = () => {
    const dispatch = useDispatch();
    const authState = useSelector((state: RootStore) => state.auth);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInput>({ resolver: yupResolver(schema) });

    const onSubmit = async (data: FormInput) =>
        await dispatch(
            registerAction(data.username, data.email, data.password)
        );

    return (
        <>
            <Header>Sign up</Header>
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
                            <ValidationErrorMsg
                                message={errors[item.name]?.message}
                            />
                        </>
                    ))}
                </form>
                <BottomContainer>
                    <Button
                        form="auth-form"
                        size="big"
                        disabled={authState.loading}
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
