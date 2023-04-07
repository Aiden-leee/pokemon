import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CatchPage from "./pages/Catch";
import MainPage from "./pages/Main";
import MyPokemonsPage from "./pages/MyPokemons";
import RootLayout, { loader as initLoader } from "./pages/Root";
import { fetchCatchThePokemon, fetchMyPokemons } from "./store/pocket-action";

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
        element: <CatchPage />,
      },
      {
        path: "mypokemons",
        element: <MyPokemonsPage />,
      },
    ],
  },
]);

let initial = true;
function App() {
  const dispatch = useDispatch();
  const myPocket = useSelector((state) => state.myPocket);
  useEffect(() => {
    dispatch(fetchMyPokemons());
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    dispatch(fetchCatchThePokemon(myPocket));
  }, [myPocket, dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
