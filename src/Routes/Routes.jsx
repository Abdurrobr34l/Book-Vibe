import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        // path: "/",
        Component: Home,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "book-details/:id",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      }
    ],
  },
]);
