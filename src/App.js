import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout, { loader as initLoader } from "./pages/Root";
import CatchPage from "./pages/Catch";
import MainPage from "./pages/Main";
import SigninPage from "./pages/Signin";
import MyPokemonsPage from "./pages/MyPokemons";
import MyPage from "./pages/MyPage";
import { auth } from "./auth/firebase";
import { getMyPokemons, requestThePokemon } from "./store/pocket-action";
import { uiActions } from "./store/ui-slice";
import { userActions } from "./store/user-slice";
import { onAuthStateChanged } from "firebase/auth";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    loader: initLoader,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "catch",
        element: (
          <PrivateRoute>
            <CatchPage />
          </PrivateRoute>
        ),
      },
      {
        path: "mypokemons",
        element: <MyPokemonsPage />,
      },
      {
        path: "signin",
        element: <SigninPage />,
      },
      {
        path: "mypage",
        element: (
          <PrivateRoute>
            <MyPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

let initial = true;
let timer;
function App() {
  const dispatch = useDispatch();
  const myPocket = useSelector((state) => state.myPocket);

  // 모바일 체크
  const mobileCheck = useCallback(() => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile || window.innerWidth < 768) {
        dispatch(uiActions.checkMobile(true));
      } else {
        dispatch(uiActions.checkMobile(false));
      }
    }, 1000);
  }, [dispatch]);

  const authCheck = useCallback(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        user = JSON.parse(JSON.stringify(user));
        dispatch(userActions.isCurrentUser(user));
        dispatch(getMyPokemons(user));
      } else {
        dispatch(userActions.isCurrentUser(null));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    authCheck();
    return () => authCheck();
  }, [authCheck]);

  // 나의 포켓몬에 추가하기
  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    if (myPocket.changed) {
      dispatch(requestThePokemon(myPocket));
    }
  }, [myPocket, dispatch]);

  // 모바일 체크
  useEffect(() => {
    window.addEventListener("resize", mobileCheck);
    mobileCheck();
    return () => {
      window.removeEventListener("resize", mobileCheck);
    };
  }, [mobileCheck]);

  return <RouterProvider router={router} />;
}

export default App;
