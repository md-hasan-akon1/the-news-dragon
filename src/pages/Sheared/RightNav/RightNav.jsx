import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaBeer, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from "../../../assets/bg.png"
const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>

            <Button variant="outline-primary" className='mb-2 w-100'> <FaGoogle /> Login with google</Button>
            <Button variant="outline-secondary" className='w-100'> <FaGithub /> Login with github</Button>
            <div className='mb-4'>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='my-4  position-relative'>
                <img className='w-100' src={bg} alt="" />
                <div className='text-white text-center position-absolute top-0 pt-5 '>
                    <h1 className='mb-4' >Create an Amazing Newspaper</h1>
                    <p><small className='mb-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</small></p>
                    <Button variant="danger" className='mb-2'>learn more</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;