import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'

class Cards extends React.Component {
    render() {
        return (
            <div className="container-md">
                <div className="row" style={{ margin: "50px" }}>
                   <CardDeck>
                        <Card  className="text-white text-right">
                            <Card.Img variant="top" src={require("../../images/oludeniz.jpg")} />
                            <Card.ImgOverlay>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>
                                    Go And Enjoy!lar
                                </Card.Text>
                                <Card.Text>3 dk once</Card.Text>      
                                <Button  variant="primary">See And Enjoy!</Button>           
                            </Card.ImgOverlay>
                            
                           
                        </Card>
                        <Card  className="text-white text-right">
                            <Card.Img variant="top" src={require("../../images/national-park-canada.jpg")} />
                            <Card.ImgOverlay>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>
                                    Go And Enjoy!lar
                                </Card.Text>
                                <Card.Text>3 dk once</Card.Text>
                                <Button  variant="primary">See And Enjoy!</Button> 
                            </Card.ImgOverlay>

                        </Card>
                        <Card  className="text-white text-right">
                            <Card.Img variant="top" src={require("../../images/telmessos-ancient-city-mugla.jpg")} />
                            <Card.ImgOverlay>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>
                                    Go And Enjoy!lar
                                </Card.Text>
                                <Card.Text>3 dk once</Card.Text>
                                <Button  variant="primary">See And Enjoy!</Button> 
                            </Card.ImgOverlay>

                        </Card>
                        
                    </CardDeck>
                    <CardDeck style= {{marginTop: "10px"}}>
                        <Card className="text-white text-right">
                            <Card.Img variant="top" src={require("../../images/grand-canyon.jpg")} />
                            <Card.ImgOverlay>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>
                                    Go And Enjoy!lar
                                </Card.Text>
                                <Card.Text>3 dk once</Card.Text>
                                <Button  variant="primary">See And Enjoy!</Button> 
                            </Card.ImgOverlay>

                        </Card>
                        <Card  className="text-white text-right">
                            <Card.Img variant="top" src={require("../../images/menton.jpg")} />
                            <Card.ImgOverlay>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>
                                    Go And Enjoy!lar
                                </Card.Text>
                                <Card.Text>3 dk once</Card.Text>
                                <Button  variant="primary">See And Enjoy!</Button> 
                            </Card.ImgOverlay>

                        </Card>
                        <Card  className="text-white text-right">
                            <Card.Img variant="top" src={require("../../images/national-park-canada.jpg")} />
                            <Card.ImgOverlay>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>
                                    Go And Enjoy!lar
                                </Card.Text>
                                <Card.Text>3 dk once</Card.Text>
                                <Button  variant="primary">See And Enjoy!</Button> 
                            </Card.ImgOverlay>

                        </Card>
                        
                    </CardDeck>
                </div>
            </div>
        )
    }
}


export default Cards