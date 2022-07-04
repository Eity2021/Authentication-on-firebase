import Button from "react-bootstrap/Button";
import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../AllCss/AllCss.css";
import { FaGoogle, FaFacebook,FaGithub } from 'react-icons/fa';
const Register = () => {
  return (
    <div>
      <div className="main_registered_part">
        <div className="register_area">
          <h1 className="reg_heading"> Sign Up </h1>

          <div className="register">
            <Form>
              <Form.Group className="mb-3 margin" controlId="formBasicEmail">
                <Form.Control
                  className="form-input"
                  type="name"
                  placeholder="User Name"
                />
              </Form.Group>

              <Form.Group className="mb-3 margin" controlId="formBasicEmail">
                <Form.Control
                  className="form-input"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3 margin" controlId="formBasicPassword">
                <Form.Control
                  className="form-input"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group className="mb-3 margin" controlId="formBasicPassword">
                <Form.Control
                  className="form-input"
                  type="Confirm-password"
                  placeholder="Confirm password"
                />
              </Form.Group>

              <div className="register_button">
                <Button className="Button" variant="primary" type="submit">
                  SignUp
                </Button>
              </div>
            </Form>
          </div>
          <div className="reg_icons">
          <div className="icon"><FaGoogle /></div>
          <div className="icon"><FaFacebook /></div>
          <div className="icon"><FaGithub /></div>
          </div>
          <div className="account">
            <small>
              {" "}
              Don't have an Account?
              <span>
                {" "}
                <Link to="/login">Login</Link>
              </span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
