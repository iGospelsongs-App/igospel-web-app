import React from 'react';
import LoginComp from "../../components/LoginComp";
import AuthPageLayout from '../../components/AuthPageLayout'

function Login() {
  return (
    <AuthPageLayout>
      <LoginComp />
    </AuthPageLayout>
  );
}

export default Login;
