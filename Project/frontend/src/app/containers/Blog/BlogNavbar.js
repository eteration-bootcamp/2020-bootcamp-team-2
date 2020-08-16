import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
class BlogNavbar extends React.Component {
    render() {
        return (
            <Navbar className="nav flex-column navbar_style_vertical" >
                <Link className="navbar_text_color margin_top_20" to="/Blog">Eat</Link>
                <Link className="navbar_text_color margin_top_20" to="/Blog">Hotel</Link>
                <Link className="navbar_text_color margin_top_20" to="/Blog">History</Link>
                <Link className="navbar_text_color margin_top_20" to="/Blog">Art</Link>
                <Button className="card_button navbar_text_color share_button"><Link className="navbar_text_color" to="/BlogShare">Share Blog</Link></Button>
            </Navbar>
        )
    }
}


export default BlogNavbar