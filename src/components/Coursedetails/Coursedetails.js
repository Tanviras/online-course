import React from 'react';
import './Coursedetails.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const Coursedetails = (props) => {
    // console.log(props);
    return (
        <div>
            <div className="courses">
                <div>
                <h1 className="courseI">{props.courseinfo.course}</h1>
                <p className="courseIn">{props.courseinfo.institution}</p>
                </div>

                <h2>Purachse this course at <span className="priceCss">${props.courseinfo.price}</span> only!</h2>
                <br/>
                <h3 className="instructor-profile">Instructor</h3>
                <h3>{props.courseinfo.instructor}</h3>
                <img src={props.courseinfo.profile_pic} alt="instructor_profile"/>
                <br/>
                <br/>
                <button onClick={()=>{props.handleAddProduct(props.courseinfo)}}>
                {/* <FontAwesomeIcon icon={faShoppingCart}/> */}
                 Enroll Now</button>
            </div>
        </div>
    );
};

export default Coursedetails;