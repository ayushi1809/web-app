import React from 'react';
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signup } from "./Components/Signup/SignUp";
import Document from "./Components/Document/Document";
import { Login } from "./Components/Login/Login";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Signup />}></Route>
          <Route path="/login" element={<Login />} />
          <Route exact path="/document" element={<Document />} />
        </Routes>
    </Router>
  );
}
