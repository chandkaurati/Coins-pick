import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home";
import Login from "./pages/sign-in";
import Dashboard from "./pages/dashboard";
import Coin from "./pages/coin";
import NotFound from "./pages/404NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/coin/:id",
        element: <Coin />,
      },
      {
        path:"*",
        element: <NotFound/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
