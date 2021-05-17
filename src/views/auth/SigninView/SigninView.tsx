import { Button, TextInput } from 'components/common';
import { BREAKPOINTS } from 'constants/breakpoints';
import { useFormik } from 'formik';
import { useMediaQuery } from 'hooks';
import React, { useEffect } from 'react';
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

// type FormInput = {
//     userIdentifier: string;
//     password: string;
// };

type Inputs = {
  placeholder: string;
  name: 'userIdentifier' | 'password';
  type: string;
};

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

const validationSchema = yup.object().shape({
  userIdentifier: yup.string().required(),
  password: yup.string().required(),
});

const initialValues = {
  userIdentifier: '',
  password: '',
};

const SigninView = () => {
  const isLaptop = useMediaQuery(BREAKPOINTS.laptop);
  const isMobileM = useMediaQuery(BREAKPOINTS.mobileM);
  const dispatch = useDispatch();
  const authState = useSelector((state: RootStore) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    authState.isLoggedIn && navigate('/');
  }, [authState.isLoggedIn]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      {isLaptop && <Header>Sign in</Header>}
      <MainContainer>
        <form id="auth-form" onSubmit={formik.handleSubmit}>
          {inputs.map((item, index) => (
            <>
              <TextInput
                key={index}
                name={item.name}
                placeholder={item.placeholder}
                type={item.type}
                value={formik.values[item.name]}
                onChange={formik.handleChange}
                rounded
              />
              {/* {errors[item.name] && (
                                <ValidationErrorMsg
                                    message={errors[item.name]?.message}
                                />
                            )} */}
            </>
          ))}
        </form>
        <BottomContainer>
          <Button
            size="big"
            form="auth-form"
            type="submit"
            disabled={authState.loading}
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
