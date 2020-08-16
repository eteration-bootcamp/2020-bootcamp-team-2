import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import CardsDetail from './CardsDetail'


const Cards = ({ cardsDetail }) => {
    return (
        <div className="container-fluid">

                <CardDeck className="margin_top_20">
                    {cardsDetail && cardsDetail.map(contentCardDetail => {
                        if (contentCardDetail.id <= 4) {
                            return (
                                <CardsDetail contentCardDetail={contentCardDetail} key={contentCardDetail.id} />
                            )
                        }
                    })}
                </CardDeck>
                <CardDeck className="margin_top_20">
                    {cardsDetail && cardsDetail.map(contentCardDetail => {
                        if (contentCardDetail.id > 4) {
                            return (
                                <CardsDetail contentCardDetail={contentCardDetail} key={contentCardDetail.id} />
                            )
                        }
                    })}
                </CardDeck>
         
        </div>
    )
}


export default Cards