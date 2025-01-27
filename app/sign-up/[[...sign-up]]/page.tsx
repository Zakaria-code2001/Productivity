import { SignUp } from '@clerk/nextjs';
import React from 'react';

const SignUpPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <SignUp afterSignUpUrl="/new-user" redirectUrl="/new-user" />
    </div>
  );
};

export default SignUpPage;
