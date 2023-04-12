import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, gProvider } from "./firebase";

// 사용 x
export const signupUser = (auth, email, password) => {
  let result;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      result = user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      result = error;
    });
  return result;
};

// 사용 x
export const signinUser = (auth, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

export const googleSignIn = () => {
  signInWithPopup(auth, gProvider)
    .then((result) => {
      const { user } = result;
      localStorage.setItem("uid", user.uid);
      localStorage.setItem("name", user.displayName);
      localStorage.setItem("email", user.email);
      localStorage.setItem("profilePic", user.photoURL);
    })
    .catch((error) => {
      console.log(error);
    });
};
