import React from 'react';

const Register = () => {

    const handelSubmit = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);
    }

    return (
        <div className='w-50 m-auto'>
            <h3>This is Register</h3>
            <form onSubmit={handelSubmit}>
                <input type="email" name="email" id="email" placeholder='Your Email' />
                <br />
                <input type="password" name="password" id="password" placeholder='Password' />
                <br />
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;