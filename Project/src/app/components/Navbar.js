import React from 'react';

class Navbar extends React.Component {
    render() {
        const imgStyle = {
            width: "80px",
            marginRight : "70px"
        };
        return (
            <nav className= "navbar navbar-expand-lg navbar-light bg">
                <a className = "navbar-brand" href= "index.html">
                    <img 
                        src = {require('../images/logo.png')}   
                        alt = "sese"
                        style={imgStyle}
                    />
                   
                </a>
                <button className = "navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarSupportedContent">
                    <span className = "navbar-toggler-icon"></span>
                </button>

                <div className = "collapse navbar-collapse" id="nvbarSupportedContent">
                    <ul className = "navbar-nav mr-auto">
                        <li className = "nav-item active">
                            <a className = "nav-link menu_margin" href = "index.html">Home <span className = "sr-only"> (current) </span></a>
                        </li>
                        <li className = "nav-item">
                            <a className = "nav-link menu_margin" href = "index.html" id = "navbarDropdown" role="button" ariaHaspopup="true" ariaExpanded="false">
                                Choose Travel
                            </a>
                        </li>
                        <li className = "nav-item">
                            <a className = "nav-link menu_margin" href = "index.html" id = "navbarDropdown" role="button" ariaHaspopup="true" ariaExpanded="false">
                               Hotel
                            </a>
                        </li>
                        <li className = "nav-item">
                            <a className = "nav-link menu_margin" href = "index.html" id = "navbarDropdown" role="button" ariaHaspopup="true" ariaExpanded="false">
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>
                <form className = "from-inline my-2 my-lg-0">
                    <button className = "btn btn-outline-success my-2 my-sm-0 mr-2" type="submit">Register</button>
                    <button className = "btn btn-outline-success my-2 my-sm-0" type="submit">&nbsp; Login &nbsp;</button>

                </form>

            </nav>
        )
    }
}

export default Navbar