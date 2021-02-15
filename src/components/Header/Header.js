import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src="logo.png" alt="ema-john-logo"/>
            {/* seshe keno jani / dey */}
           
            <nav>
                <div className="navDiv">
                <a href="/categories">Categories</a>
                <a href="/courses">Courses</a>
                <a href="/instructors">Instructors</a>
                </div>
            
            </nav>
            
            
        </div>
    );
};

export default Header;