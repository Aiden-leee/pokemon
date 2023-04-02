import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage, {
  loader as eventsLoader,
  action as pokeAction,
} from "./pages/Main";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
        loader: eventsLoader,
      },
      {
        path: ":pokeId",
        id: "poke-id",
        children: [
          {
            index: true,
            element: <MainPage />,
            loader: eventsLoader,
            action: pokeAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
