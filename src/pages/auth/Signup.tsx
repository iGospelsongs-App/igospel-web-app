import React from "react";
import SignupComp from "../../components/SignupComp";
import AuthPageLayout from "../../components/AuthPageLayout";

function Signup() {
  return (
    <AuthPageLayout>
      <SignupComp />
    </AuthPageLayout>
  );
}

export default Signup;
