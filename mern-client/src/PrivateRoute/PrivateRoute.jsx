import React, { useContext } from "react";
import { Button, Spinner } from "flowbite-react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex flex-row gap-3 items-center mx-auto   ">
        <div className="text-center">
          <Button>
            <Spinner aria-label="Spinner button example" size="sm" />
            <span className="pl-3">Loading...</span>
          </Button>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
