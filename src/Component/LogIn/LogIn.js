import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useFirebase from '../useFirebase/useFirebase';

const LogIn = () => {
   const {signInWithGoogle} = useFirebase();
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
  
               
  
                <div className="register_button">
                  <Button className="Button" variant="primary" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
            </div>
            <div className="reg_icons">
            <div className="icon"><FaGoogle onClick={signInWithGoogle}/></div>
            <div className="icon"><FaFacebook /></div>
            <div className="icon"><FaGithub /></div>
            </div>
            <div className="account">
              <small>
                {" "}
                Don't have an Account?
                <span>
                  {" "}
                  <Link to="/register">Register</Link>
                </span>
              </small>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LogIn;