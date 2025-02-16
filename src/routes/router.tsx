import { createBrowserRouter } from "react-router";
import App from "../App";
import GetBooks from "../pages/books/GetBooks";
import Home from "../pages/home/Home";
import Details from "../pages/books/Details";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/get-books",
        element: <GetBooks></GetBooks>,
      },
      {
        path: "/book-details/:id",
        element: <Details></Details>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;

// import { createBrowserRouter } from "react-router";
// import App from "../App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       // <ProtectedRoutes role="admin">
//       <App></App>
//       // </ProtectedRoutes>
//     ),
//   },
//   // {
//   //   path: "/login",
//   //   element: <Login></Login>,
//   // },
//   // {
//   //   path: "/register",
//   //   element: <Registration></Registration>,
//   // },
// ]);

// export default router;
