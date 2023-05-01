/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location=useLocation()
    if (loading) {
        return <div className='text-center'><Spinner animation="border" variant="primary" /></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login'state={location} ></Navigate>


};

export default PrivetRout;