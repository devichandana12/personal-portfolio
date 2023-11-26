import React from 'react';

import '../../App.css';
import profilepic from '../../Assets/profilepic.png'


function Header() {
    return (
        <> 
       
            <div className='nav_home_section'>
                <div className='Details_Section'>
                    <div className="image">
                        <img src={profilepic} alt="" />
                    </div>
                    <div className="Name_Details">
                        <h3>Devichandana K M</h3>
                        <span>Web Developer</span>
                    </div>
                </div>
               
            </div>
        </>
    );
}

export default Header;
