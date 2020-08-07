import React from 'react';
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent navbar_style" >
                <Link to="/"><img src={require('../images/logo.png')} className="logo_style" alt="Logo" /></Link>
                <div className="collapse navbar-collapse" id="nvbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <Link to="/">
                            <li className="nav-item active">
                                <a className="navbar_menu_margin navbar_text_color" href="index.html">HOME</a>
                            </li>
                        </Link>
                        <Link to="/Location">
                            <li className="nav-item">
                                <a className="navbar_menu_margin navbar_text_color" href="index.html" role="button">LOCATION</a>
                            </li>
                        </Link>
                        <Link to="/Blog">
                            <li className="nav-item">
                                <a className="navbar_text_color" href="index.html" role="button">BLOG</a>
                            </li>
                        </Link>

                    </ul>
                </div>
                <div className="navbar_login">
                    <Link to="/Register">
                        <button className="btn btn-outline-light my-2 my-sm-0 mr-3 " type="submit">REGISTER</button>
                    </Link>
                    <Link to="/Login">
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">&nbsp; LOGIN &nbsp;</button>
                    </Link>
                </div>
            </nav>
        )

    
    }
}

export default Navbar