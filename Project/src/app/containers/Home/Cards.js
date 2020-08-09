import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import CardsDetail from './CardsDetail'


const Cards = ({ cardsDetail }) => {
    return (
        <div className="container-md">
            <div className="row card_deck_margin" >
                <CardDeck className="card_deck_margin">
                    {cardsDetail && cardsDetail.map(cardDetail => {
                        return (
                            <CardsDetail cardDetail={cardDetail} key={cardDetail.id} />
                        )
                    })}
                </CardDeck>
                <CardDeck className="card_deck_margin">
                    {cardsDetail && cardsDetail.map(cardDetail => {
                        return (
                            <CardsDetail cardDetail={cardDetail} key={cardDetail.id} />
                        )
                    })}
                </CardDeck>
            </div>
        </div>
    )
}


export default Cards