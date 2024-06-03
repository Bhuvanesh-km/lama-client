import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";

const RequireAuth = () => {
  const { authenticatedUser } = useAuth();
  const location = useLocation();
  return authenticatedUser.id ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
