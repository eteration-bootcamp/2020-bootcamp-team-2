import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
class BlogNavbar extends React.Component {
    render() {
        return (
            <Navbar className="nav flex-column navbar_style_vertical" >
                <a className="navbar_text_color card_deck_margin" href="#"><Link to="/Blog">Eat</Link></a>
                <a className="navbar_text_color card_deck_margin" href="#"><Link to="/Blog">Hotel</Link></a>
                <a className="navbar_text_color card_deck_margin" href="#"><Link to="/Blog">History</Link></a>
                <a className="navbar_text_color card_deck_margin" href="#"><Link to="/Blog">Art</Link></a>
                <Button className="card_button navbar_text_color share_button"><Link to="/BlogShare">Share Blog</Link></Button>
            </Navbar>
        )
    }
}


export default BlogNavbar