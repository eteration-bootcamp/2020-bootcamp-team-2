import React from 'react';
import Slider from "./Slider";
class Navbar extends React.Component {
    render() {
        return (
            <div className="header">
                <div className = "header-text">
                    <center><h1>TO DISCOVER NEW PLACES!</h1></center>
                </div>
                <Slider />
            </div>
            
        )
    }
}

export default Navbar