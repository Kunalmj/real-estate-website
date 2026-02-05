import Layout from "./routes/layout/layout";
import Home from "./routes/homePage/home";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage.jsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./routes/profilePage/profilePage.jsx";

const App = () => {
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
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
