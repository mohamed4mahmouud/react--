import React from "react";
import { useLocation } from "react-router-dom";

const ShowNavBar = ({ children }) => {
  const location = useLocation();

  const definedRoutes = ["/", "/addProduct", "/posts"];

  const isRouteDefined = definedRoutes.includes(location.pathname);
  return <div>{isRouteDefined && children}</div>;
};

export default ShowNavBar;
