import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedHome from "./Components/Home/ProtectedHome";
import SignUpForm from "./Components/SignUpForm/Main/SignUpForm";
import LoginForm from "./Components/LoginForm/Main/LoginForm";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Routes>
            <Route path="/" exact element={<ProtectedHome />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
