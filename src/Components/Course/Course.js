import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAdjust, faAd, faSchool, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
const Course = (props) => {
    console.log(props.course);
    const {price, title, instructor, picture} = props.course;
    console.log(price, title, instructor);
    return (
        <div className="course">
            <div className="course-img"><img src={picture} alt=""/></div>
           <div>
           <h2 className="course-des">couse name: {title}</h2>
            <h4>instructor: {instructor}</h4>
            <h3>price:${price}</h3>
            <button className="btn-enroll" onClick={ () => {props.handleAdd(props.course)}}><FontAwesomeIcon icon={faShoppingBasket} />Enroll now</button>
           </div>
        </div>
    );
};

export default Course;