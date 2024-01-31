import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import auth from "../../Firebase/Firebase";
import { Link } from "react-router-dom";
const RegisterRBS = () => {
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
  const handelSubmit = (event) => {
    event.preventDefault();
    setSuccess('');
    setError('');
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    if(!/(?=.*?[A-Z])/.test(password)){
        setError('Please at least one Upper case Alphabet ');
        return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError('')
        event.target.reset();
        setSuccess('User has been created successfully')
        emailVerify(user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message)
      });
      

      
  };
   const emailVerify = (user) =>{
    sendEmailVerification(user)
  .then((result) => {
    console.log(result);
    alert('Please Confirm Your Email Address');
  });
   }


  return (
    <div className="w-50 m-auto">
      <h4 className="text-primary">Please Register</h4>
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p><small>Already have an account? Please  <Link to={'/login'}>Login</Link></small></p>
      <p className="text-danger">{error} </p>
      <p className="text-success">{success} </p>
    </div>
  );
};

export default RegisterRBS;
