import { AuthForm } from 'domain/account/AuthForm';
import React from 'react';
import { Link } from 'react-router-dom';
import { PageWrapper } from './style';

export const SignupView: React.FC = () => {
  return (
    <PageWrapper>
      <AuthForm type="register" />
      <Link to="../login">or sign in</Link>
    </PageWrapper>
  );
};
