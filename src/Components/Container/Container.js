import React, { useState, useEffect } from 'react';
import './Container.css';
import Course from '../Course/Course';
import data from '../../data.json';
import Cart from '../Cart/Cart';
const Container = () => {
    const [course, setCourse] = useState([]);
    // console.log(data);
    useEffect(() => {
        setCourse(data);
    }, []);
    const [cart, setCart] = useState([]);
    const handleAdd = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(product);
    };
    console.log(course);
    return (
        <div className="container">
            <div className="course-container">
                <ul>
                    {
                        course.map(crs => <Course course={crs} handleAdd={handleAdd}></Course>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Container;