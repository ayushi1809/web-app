import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getSignUp } from "../../Redux/actions";
import { useNavigate, Link } from "react-router-dom";


export const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate ();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      name
    }
    const validationErrors = validateForm(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(getSignUp(data));
        alert("User Registerd")
        navigate("/login");
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
    if (!data.name) {
      errors.name = 'Name is required';
    }
    return errors;
  };

  return (
    <section className="section bg-light">
      <div className="container ht-100 d-flex justify-content-center align-items-center">
        <div className="card p-2 shadow-lg d-flex card-width-300 justify-content-center align-items-center">
          <h3 className="mb-3">SignUp</h3>
          <Link to= "/login">Already Registered ?</Link>
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <span>{errors.name}</span>}
            </Form.Group>
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
