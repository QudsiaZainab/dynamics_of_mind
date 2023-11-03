import React, { useState } from "react";
// import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import CommonToast from "./components/shared/CommonToast";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";

export default function App() {
  return (
    <>
      <CommonToast />
      <RouterProvider router={routes} />
    </>
  );
}
