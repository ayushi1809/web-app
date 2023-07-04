import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getLogin } from "../../Redux/actions";
import { useNavigate, Link } from "react-router-dom";


export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate ();
  const state = useSelector((state) => state.user);
  const [email, setEmail] = useState(state?.email);
  const [password, setPassword] = useState(state?.password);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password
    }
    const validationErrors = validateForm(data);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
    if (email && password) {
      if (state?.email === email && state?.password === password) {
        dispatch(getLogin(data));
        navigate("/document");
      } else {
        alert("Credentials not found.. Please register");
      }
    } else {
      alert("Wrong Credentials");
    }
  }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.email) {
      errors.email = 'Email is required';
    }
    if (!data.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  return (
    <section className="section bg-light">
      <div className="container ht-100 d-flex justify-content-center align-items-center">
        <div className="card p-2 shadow-lg d-flex card-width-300 justify-content-center align-items-center">
          <h3 className="mb-3">Login</h3>
          <Link to= "/">Not Registered ?</Link>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span>{errors.email}</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
               {errors.password && <span>{errors.password}</span>}
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};
