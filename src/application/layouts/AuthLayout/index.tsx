import React from 'react';
import { Outlet } from 'react-router';
import { AuthContainer, InnerAuthContainer, ScreenContainer } from './style';

export const AuthLayout: React.FC = () => {
  return (
    <ScreenContainer>
      <AuthContainer>
        <InnerAuthContainer>
          <Outlet />
        </InnerAuthContainer>
      </AuthContainer>
    </ScreenContainer>
  );
};
