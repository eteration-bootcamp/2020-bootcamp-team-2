import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import CardsDetail from './CardsDetail'

const Cards = ({ cardsDetail }) => {
    return (
        <div className="container-md">
            <div className="row margin_top_20" >
                <CardDeck className="margin_top_20">
                    {cardsDetail && cardsDetail.map(cardDetail => {
                        if (cardDetail.id <= 3) {
                            return (<CardsDetail cardDetail={cardDetail} key={cardDetail.id} />)
                        }
                    })}
                </CardDeck>
                <CardDeck className="margin_top_20 margin_bottom_20">
                    {cardsDetail && cardsDetail.map(cardDetail => {
                        if (cardDetail.id > 3) {
                            return (<CardsDetail cardDetail={cardDetail} key={cardDetail.id} />)
                        }
                    })}
                </CardDeck>
            </div>
        </div>
    )
}

export default Cards