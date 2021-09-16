import React from 'react';
import { Button } from 'ui/components';
import { CenteredItemsWrapper } from './style';

export type AuthActionType = 'login' | 'register';

interface AuthFormProps {
  type: AuthActionType;
}

const dataMock = ['Facebook', 'Google', 'GitHub', 'Bitbucket', 'GitLab'];

export const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const getActionText = () => type === 'login' ? 'Sign in' : 'Sign up';

  return (
    <CenteredItemsWrapper>
      <h1>{getActionText()}</h1>
      {dataMock.map(data => (
        <Button key={data}>{data}</Button>
      ))}
    </CenteredItemsWrapper>
  );
};
