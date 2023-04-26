import React, { useEffect } from "react";
import PageContent from "components/Layouts/PageContent";
import main_bg from "assets/images/pokemon_bg.jpg";
import DivisionLayout from "components/Layouts/Division";
import UserForm from "components/Auth/UserForm";
import { googleSignIn } from "auth/auth_user";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SigninPage = () => {
  const navigate = useNavigate();
  const { user, isLogined } = useSelector((state) => state.user);

  const onSignin = () => {
    googleSignIn();
  };

  useEffect(() => {
    if (isLogined) {
      return navigate("/");
    }
  }, [isLogined, navigate]);

  return (
    <PageContent background={main_bg}>
      <DivisionLayout>
        {!user && (
          <>
            <UserForm title="Sign In" onSignHandler={onSignin} mode="SignIn" />
          </>
        )}
      </DivisionLayout>
    </PageContent>
  );
};

export default SigninPage;
