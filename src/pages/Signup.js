import React from "react";
import PageContent from "../components/PageContent";
import main_bg from "../assets/images/pokemon_bg.jpg";
import DivisionLayout from "../components/Division";
import UserForm from "../components/UserForm";
import { signupUser } from "../auth/auth_user";
import { auth } from "../auth/firebase";

const SignupPage = () => {
  const onSignup = (user) => {
    //
    const { email, password } = user;
    signupUser(auth, email, password);
  };
  return (
    <PageContent background={main_bg}>
      <DivisionLayout>
        <UserForm title="Sign Up" onSignHandler={onSignup} mode="SignUp" />
      </DivisionLayout>
    </PageContent>
  );
};

export default SignupPage;
