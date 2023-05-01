/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {

const[accept, setAccept]=useState(false)
    const { createUser } = useContext(AuthContext)
    const handelRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => console.log(result.user))
            .catch(error => console.log(error))


    }

const handelCheck=(event)=>{
setAccept(event.target.checked)
}
    return (
        <Container className='mx-auto w-25 mt-4'>
            <h4>please register</h4>
            <Form className=' border p-4' onSubmit={handelRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control type="" name='photo' placeholder="Enter photo" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handelCheck}
                        type="checkbox"
                        label={<>Accepted <Link to='/terms'> terms and condition </Link></>} />
                </Form.Group>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
                <Button 
                disabled={!accept}
                variant="primary" type="submit">
                    Register
                </Button>
                <p> Already Have An account? <Link to='/login'>Login</Link></p>
            </Form>
        </Container>
    );
};

export default Register;