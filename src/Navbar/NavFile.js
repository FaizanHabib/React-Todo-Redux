import React, { useState } from 'react';



const NavBar = () => {
        const [showMediaIcons, setShowMediaIcons] = useState();
        return (
            <div>
               <div className="container">
                   <button className="toggelbtn" onClick={() => setShowMediaIcons(!showMediaIcons)}>III</button>
                   <ul className={showMediaIcons ? "list-ul mobile-menu-link" : "list-ul"}>
                       <li className="list-items">Home</li>
                       <li className="list-items">About</li>
                       <li className="list-items">portfolio</li>
                       <li className="list-items">blog</li>
                       <li className="list-items">contact</li>
                   </ul>
               </div>
            </div>
        );
    }
 
export default NavBar;