import React from "react";
import { useLocation, Redirect } from "react-router-dom";

export const FourOFour = ({ isAuthorized }) => {
  const { pathname } = useLocation();

  const isPathnameValid = () => pathname === "/" || pathname === "/login";

  return !isAuthorized && isPathnameValid() ? (
    <Redirect to="/login" />
  ) : (
    <Redirect to="/" />
  );
};
