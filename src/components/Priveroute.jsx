import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowedRoles }) => {
  const role = sessionStorage.getItem("role");
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  // ❗ Agar login bo'lmasa yoki role mos kelmasa → loginga yo'naltir
  if (!role || !isLoggedIn || !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;