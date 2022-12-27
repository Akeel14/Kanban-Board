import React,{ useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

import Home from "./Home";

const ProtectedHome = () => {
  const { currentUser } = useAuth();
  const history = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      history("/login");
    }
  }, [currentUser, history]);

  if (!currentUser) return null;

  return <Home />;
};

export default ProtectedHome;