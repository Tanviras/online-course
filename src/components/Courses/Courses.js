import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData.json';
import Coursedetails from '../Coursedetails/Coursedetails';
import './Courses.css';
import Cart from '../Cart/Cart';


const Courses = () => {
    const courseinfos= fakeData;
    const [courseinfo, setProducts]= useState(courseinfos);
    // console.log(courseinfo);
    const [cart,setCart]=useState([]);

    const handleAddProduct = (courseinfo) => {//setState ei Courses.js er moddhe,tai handler ekhane thakai valo jodio actual button ekhane nei.
        const newCart = [...cart,courseinfo];
        setCart(newCart);
    };

    return (
        <div>



            <div className="course-container">
            <div className="courseDetails-container">
                {
                    courseinfo.map(cinfo => <Coursedetails
                    handleAddProduct = {handleAddProduct}
                    courseinfo={cinfo}//ei tag er props hocche courseinfo
                    ></Coursedetails>
                                  ) //cinfo
                }
            </div> {/* courseDetails-container*/}


            <div className="cart-container">
              <Cart cart={cart}></Cart> 
              {/* cart er props holo ei cart */}
            </div>

            
            </div> {/* course-container*/}
        </div>
    );
};

export default Courses;