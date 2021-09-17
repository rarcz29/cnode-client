import { AuthForm } from 'domain/account/AuthForm';
import React from 'react';
import { Link } from 'react-router-dom';
import { PageWrapper } from './style';

export const SigninView: React.FC = () => {
  return (
    <PageWrapper>
      <AuthForm type="login" />
      <Link to="../register">or sign up</Link>
    </PageWrapper>
  );
};
