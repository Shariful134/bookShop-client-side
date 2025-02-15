import { createBrowserRouter } from "react-router";
import App from "../App";
import GetBooks from "../pages/books/GetBooks";
import Home from "../pages/home/Home";

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
