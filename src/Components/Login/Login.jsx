import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import auth from "../../Firebase/Firebase";
import { Link } from "react-router-dom";
const Login = () => {
    const [error,setError] = useState('');
    const [check,setCheck] = useState('password');
    const [success,setSuccess] = useState('');

    const handelCheck = (e) =>{
        const checkbox = e.target.checked;
        if(checkbox){
            setCheck('text')
        }else{
            setCheck('password')
        }
        
    }
  const handelLogin = (event) => {

    event.preventDefault();
    setSuccess('');
    setError('');
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth,email,password)
    .then(result =>{
        const user = result.user;
        if(!user.emailVerified){
            setError('Email not Verified Please Verify Email Address')
        }else{
            setSuccess('Login successfully')
        }
        event.target.reset();
        
    })
    .catch(error =>{
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
    })
  };
  return (
    <div className="w-25 mx-auto">
      <h3>This is Login</h3>
      <Form onSubmit={handelLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={check}
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handelCheck} name="checkbox" type="checkbox" value = '1' label="Check me out" />
        </Form.Group>
        <Button  variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p><small>You are new in this site? Please <Link to={'/register-rbs'}>Register</Link></small></p>
      <p className="text-success">{success} </p>
      <p className="text-danger">{error} </p>
    </div>
  );
};

export default Login;
