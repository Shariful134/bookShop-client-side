import { createBrowserRouter } from "react-router";
import App from "../App";
import GetBooks from "../pages/books/GetBooks";
import Home from "../pages/home/Home";
import Details from "../pages/books/Details";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import UpdateBooks from "@/pages/admin/UpdateBooks";
import CreateBook from "@/pages/admin/CreateBook";
import UsersData from "@/pages/users/UsersData";
import ProtectedRoutes from "@/components/layout/ProtectedRoutes";
import About from "@/pages/about/About";

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
        path: "/users",
        element: (
          <ProtectedRoutes role="admin">
            <UsersData></UsersData>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/book-update/:id",
        element: (
          <ProtectedRoutes role="admin">
            <UpdateBooks></UpdateBooks>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/book-create",
        element: (
          <ProtectedRoutes role="admin">
            <CreateBook></CreateBook>
          </ProtectedRoutes>
        ),
      },
      {
        path: "about",
        element: <About></About>,
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
