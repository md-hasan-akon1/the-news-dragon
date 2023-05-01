/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res=>res.json())
            .then(data=>setCategories(data))
            .catch(error=>console.log(error))
    }, [])
    return (
        <div>
            <h4>All Category</h4>
            {
                
                categories.map(category=><p 
                key={category.id}>
                    <Link  to={`/category/${category.id}`} className='text-decoration-none'>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;