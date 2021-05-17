import { register } from 'actions/authActions';
import { Button, TextInput } from 'components/common';
import ValidationErrorMsg from 'components/ValidationErrorMsg';
import { BREAKPOINTS } from 'constants/breakpoints';
import { useFormik } from 'formik';
import { useMediaQuery } from 'hooks';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
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

const validationSchema = yup.object().shape({
  username: yup.string().required().min(3).max(100),
  email: yup.string().required().email().max(65),
  password: yup.string().required().min(6).max(50),
  confirm: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirm: '',
};

const SignupView = () => {
  const isInitialMount = useRef(true);
  let navigate = useNavigate();
  const isLaptop = useMediaQuery(BREAKPOINTS.laptop);
  const isMobileM = useMediaQuery(BREAKPOINTS.mobileM);
  const dispatch = useDispatch();
  const authState = useSelector((state: RootStore) => state.auth);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: FormInput) => {
      dispatch(register(values.username, values.email, values.password));
    },
  });

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else if (!authState.loading) {
      // TODO: error message
      authState.success ? navigate('../login') : alert('Ups');
    }
  }, [authState.loading]);

  return (
    <>
      {isLaptop && <Header>Sign up</Header>}
      <MainContainer>
        <form id="auth-form" onSubmit={formik.handleSubmit}>
          {inputs.map((item, index) => (
            <React.Fragment key={index}>
              <TextInput
                name={item.name}
                placeholder={item.placeholder}
                type={item.type}
                value={formik.values[item.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched[item.name] &&
                  formik.errors[item.name] !== undefined
                }
                rounded
              />
              {formik.touched[item.name] && formik.errors[item.name] && (
                <ValidationErrorMsg message={formik.errors[item.name]} />
              )}
            </React.Fragment>
          ))}
        </form>
        <BottomContainer>
          <Button
            form="auth-form"
            size="big"
            type="submit"
            disabled={authState.loading}
          >
            {authState.loading ? 'loading...' : 'Sign up'}
          </Button>
          <LinksContainer>
            <StyledLink to="../login">
              {isMobileM ? 'Already have an account?' : 'Sign in'}
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
