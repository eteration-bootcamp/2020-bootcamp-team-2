import cafes from '../../images/cafes.jpg';
import hotels from '../../images/hotels.jpg';
import historical_places from '../../images/historical_places.jpg';



const initState = {
    cardsDetail : [
        {id: '1', title: 'Cafes' , url: cafes , button: 'See and enjoy'},
        {id: '2', title: 'Hotels' , url: hotels , button: 'See and enjoy'},
        {id: '3', title: 'Historical Places' , url: historical_places , button: 'See and enjoy'}
    ]

}

const CardsDetailReducer = (state = initState, action) => {
    return state
}

export default CardsDetailReducer