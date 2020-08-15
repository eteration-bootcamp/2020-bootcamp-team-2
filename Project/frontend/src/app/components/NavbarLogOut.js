import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions'
const NavbarLogOut = (props) => {

    return (
        <div className="navbar_login">
            <Link to="/">
                <button onClick={props.signOut} className="btn btn-outline-light my-2 my-sm-0 mr-3 " type="submit">LOGOUT</button>
            </Link>
            <Link to="/Profile">
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">&nbsp; PROFILE &nbsp;</button>
            </Link>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(NavbarLogOut)