import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Main/Sidebar";
import Swimlanes from "../Swimlanes/Swimlanes";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { currentUser } = useAuth();
  const history = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }
  }, [currentUser, history]);

  return (
    <div className="Home">
      <Sidebar />
      <Swimlanes />
    </div>
  );
}

export default Home;
