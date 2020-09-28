import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return(
        <nav style={navStyle}>
            <Link style={{textDecoration: 'none'}} to="/">Rock Out </Link>
            | 
            <Link style={{textDecoration: 'none'}} to="/recordings"> Playback</Link>
        </nav>
    )
};

const navStyle = {
    fontSize: "26px",
    margin: "5px 0 15px 0"
}

export default Navbar;