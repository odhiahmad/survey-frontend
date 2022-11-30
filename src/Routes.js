import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/Auth";
import Wilayah from "./pages/Wilayah";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Error from "./pages/Error";
import { getSessionStorage } from "./store";

import { useDispatch, useSelector } from "react-redux";


export default function RoutesApp() {
  const dispatch = useDispatch();

  const isToken = useSelector(
    (state) => state.getSessionStorage.result
  );

  const isAuthenticated = isToken === null ? false : true

  useEffect(() => {
    dispatch(getSessionStorage())
  }, [dispatch])



  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route index path="/" element={<Login />} />
        <Route
          path="/wilayah/:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} children={<Wilayah />} />
          }
        />
        <Route
          path="/wilayah/:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} children={<Wilayah />} />
          }
        />
        <Route
          path="/wilayah/:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} children={<Wilayah />} />
          }
        />
        <Route
          path="/wilayah:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} children={<Wilayah />} />
          }
        />
        <Route path="/error" element={<Error />} />
        <Route element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}


