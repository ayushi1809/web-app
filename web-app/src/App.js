import "./styles.css";
import { Login } from "./Components/Login/Login";
// import { Dashboard } from "./container/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./protectedRoutes";
import { useSelector } from "react-redux";
import { Signup } from "./Components/Signup/SignUp";
import Document from "./Components/Document/Document";

export default function App() {
  const auth = useSelector((state) => state.isAuthenticated);
  return (
    <Router>
      <Routes>
        {/* <ProtectedRoute auth={auth} exact path="/" component={Dashboard} /> */}
        <Route exact path="/" element= {<Signup />} />
        <Route exact path = "/login" element = {<Login />} />
        <Route exact path = "/document" element = {<Document />} />
      </Routes>
    </Router>
  );
}
