/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const Navigate = useNavigate();
    const location = useLocation()
    const { logIn } = useContext(AuthContext)
    const from=location?.state?.pathname||'/'
    const handelLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        logIn(email, password)
            .then(result => {
                Navigate(from)
            })
            .catch(error => console.log(error))
    }
    return (
        <Container className='mx-auto w-25  mt-4'>
            <h4>please login</h4>
            <Form className='border p-4' onSubmit={handelLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
                <Button variant="primary" type="submit">
                    login
                </Button>
                <p>Don't Have An account? <Link to='/register'>Register</Link></p>
            </Form>
        </Container>
    );
};

export default Login;