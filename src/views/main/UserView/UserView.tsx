import { logout, update } from 'actions/authActions';
import axios from 'axiosConfig';
import { Button, TextInput } from 'components/common';
import API_URLS from 'constants/apiUrls';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from 'store';
import * as yup from 'yup';
import { ButtonsContainer, StyledPageHeader, StyledSection } from './styles';

type FormInput = {
  username: string;
  email: string;
};

type Inputs = {
  label: string;
  placeholder: string;
  name: 'username' | 'email';
  type: string;
};

const inputs: Inputs[] = [
  {
    label: 'Username',
    placeholder: 'username...',
    name: 'username',
    type: 'text',
  },
  {
    label: 'Email',
    placeholder: 'email',
    name: 'email',
    type: 'email',
  },
];

const validationSchema = yup.object().shape({
  username: yup.string().required().min(3).max(100),
  email: yup.string().required().email().max(65),
});

const UserView = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state: RootStore) => state.auth);

  const formik = useFormik({
    initialValues: {
      username: authState.username ?? '',
      email: authState.email ?? '',
    },
    validationSchema,
    onSubmit: (values: FormInput) => {
      dispatch(update(values.username, values.email));
    },
  });

  async function handleRemove() {
    try {
      await axios.delete(API_URLS.USER);
      dispatch(logout());
    } catch (e) {
      alert(e);
    }
  }

  return (
    <>
      <StyledPageHeader>
        <h1>My account</h1>
      </StyledPageHeader>
      <form onSubmit={formik.handleSubmit}>
        {inputs.map((item, index) => {
          return (
            <StyledSection key={index}>
              <h1>{item.label}</h1>
              <TextInput
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                value={formik.values[item.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched[item.name] &&
                  formik.errors[item.name] !== undefined
                }
                rounded
              />
            </StyledSection>
          );
        })}
        <ButtonsContainer>
          <Button size="big" type="submit" color="secondary">
            {authState.loading ? 'Loading...' : 'Update'}
          </Button>
          <Button size="big" onClick={handleRemove} type="button">
            {authState.loading ? 'Loading...' : 'Delete'}
          </Button>
        </ButtonsContainer>
      </form>
    </>
  );
};

export default UserView;
