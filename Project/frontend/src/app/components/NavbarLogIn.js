import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLogIn = () => {
    return (
        <div className="navbar_login">
            <Link to="/Register">
                <button className="btn btn-outline-light my-2 my-sm-0 mr-3 " type="submit">REGISTER</button>
            </Link>
            <Link to="/Login">
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">&nbsp; LOGIN &nbsp;</button>
            </Link>
        </div>
    )
}

export default NavbarLogIn