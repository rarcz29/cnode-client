import { AuthForm } from 'domain/account/AuthForm';
import React from 'react';
import { PageWrapper } from './style';

export const SignupView: React.FC = () => {
  return (
    <PageWrapper>
      <AuthForm type="register" />
    </PageWrapper>
  );
};
