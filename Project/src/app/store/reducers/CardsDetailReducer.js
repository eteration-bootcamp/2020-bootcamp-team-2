import grand from '../../images/grand-canyon.jpg';
import menton from '../../images/menton.jpg';
import national from '../../images/national-park-canada.jpg';


const initState = {
    cardsDetail : [
        {id: '1', title: 'title 1' , url: grand , button: 'See and enjoy'},
        {id: '2', title: 'title 2' , url: menton , button: 'See and enjoy'},
        {id: '3', title: 'title 3' , url: national , button: 'See and enjoy'}
    ]

}

const CardsDetailReducer = (state = initState, action) => {
    return state
}

export default CardsDetailReducer