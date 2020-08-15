import React from 'react';


class Footer extends React.Component {
    render() {
        return (
            <div className="main-footer footer_style" >
                <div className="container">

                    <div className="row">
                        <div className="col">
                            <br></br>
                            <h4>ABOUT US</h4>
                            <br></br>
                            <h>TRAWELL is a travel guide.</h>
                            <br></br>
                            <h>TRAWELL enhances your travel experience and helps you plan a more enjoyable trip.</h>
                        </div>

                        <div className="col">
                            <br></br>
                            <a style={{ color: "#FFFFFF" }} href="url">PRIVACY POLICY</a>
                        </div>

                        <div className="col">
                            <br></br>
                            <h4>FOLLOW US</h4>
                            <a style={{ color: "#FFFFFF", fontSize: "36px" }} className="icon" href="!#"><i className="fab fa-github"></i></a>
                        </div>
                    </div>

                    <hr style={{ height: "5px" }} />

                    <div className="row">
                        <p className="col float-center">
                            &copy;{new Date().getFullYear()} TRAWELL | All right reserved
                        </p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Footer