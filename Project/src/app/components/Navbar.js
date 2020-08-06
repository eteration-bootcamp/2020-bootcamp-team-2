import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        const imgStyle =
        {
            width: "80px",
            marginRight: "70px"
        };
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent" style={{ position: "fixed", zIndex: "2" }}>
                <Link to="/">
                <a className="navbar-brand" href="index.html">
                    <img src={require('../images/logo.png')} alt="Logo" style={imgStyle}/>
                </a>
                </Link>
                <div className="collapse navbar-collapse" id="nvbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <Link to="/">
                            <li className="nav-item active">
                                <a className="menu_margin navbar_text_color" href="index.html">HOME</a>
                            </li>
                        </Link>
                        <Link to="/Location">
                            <li className="nav-item">
                                <a className="menu_margin navbar_text_color" href="index.html" role="button">LOCATION</a>
                            </li>
                        </Link>
                        <Link to="/Blog">
                            <li className="nav-item">
                                <a className="navbar_text_color" style={{ marginRight:"880px"}} href="index.html" role="button">BLOG</a>
                            </li>
                        </Link>
                    </ul>
                </div>
                    <form className="from-inline my-2 my-lg-0">
                            <Link to="/Register">
                                <button className="btn btn-outline-light my-2 my-sm-0 mr-3 " type="submit">REGISTER</button>
                            </Link>
                        <Link to="/Login">
                            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">&nbsp; LOGIN &nbsp;</button>
                        </Link>
                    </form>

            </nav>
        )
    }
}

export default Navbar