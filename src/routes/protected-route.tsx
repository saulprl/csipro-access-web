import { FC, ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  isAuthenticated: boolean;
  redirectPath?: string;
  children?: ReactNode;
}

export const ProtectedRoute: FC<Props> = ({
  isAuthenticated,
  redirectPath = "/login",
  children,
}) => {
  // if (!isAuthenticated) {
  //   return <Navigate to={redirectPath} replace />;
  // }

  return children ? children : <Outlet />;
};
