import { AuthForm } from 'domain/account/AuthForm';
import React from 'react';
import { PageWrapper } from './style';

export const SigninView: React.FC = () => {
  return (
    <PageWrapper>
      <AuthForm type="login" />
    </PageWrapper>
  );
};
