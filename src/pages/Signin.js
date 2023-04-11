import React, { useEffect } from "react";
import PageContent from "../components/PageContent";
import main_bg from "../assets/images/pokemon_bg.jpg";
import DivisionLayout from "../components/Division";
import UserForm from "../components/UserForm";
import { googleSignIn } from "../auth/auth_user";
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
        {!user ? (
          <>
            <UserForm title="Sign In" onSignHandler={onSignin} mode="SignIn" />
          </>
        ) : (
          <div>{user.email} 님 로그인 하셨습니다.</div>
        )}
      </DivisionLayout>
    </PageContent>
  );
};

export default SigninPage;
