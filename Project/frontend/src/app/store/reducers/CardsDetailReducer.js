import cafes from '../../images/cafes.jpg';
import hotels from '../../images/hotels.jpg';
import eats from '../../images/eats.jpg';
import activities from '../../images/activities.jpg';
import bars from '../../images/bars.jpg';
import historical_places from '../../images/historical_places.jpg';


const initState = {
    cardsDetail : [
        {id: '1', title: 'Cafes' , url: cafes ,     linkto:'/Cafes', button: 'See and enjoy'},
        {id: '2', title: 'Hotels' , url: hotels ,   linkto:'/Hotels', button: 'See and enjoy'},
        {id: '3', title: 'Historical Places' ,      linkto:'/Historicals', url: historical_places , button: 'See and enjoy'},
        {id: '4', title: 'Eats' , url: eats ,       linkto:'/Eats', button: 'See and enjoy'},
        {id: '5', title: 'Activities' ,             linkto:'/Activities', url: activities , button: 'See and enjoy'},
        {id: '6', title: 'Bars' , url: bars ,       linkto:'/Bars', button: 'See and enjoy'}

    ]
}

const CardsDetailReducer = (state = initState, action) => {
    return state

}

export default CardsDetailReducer;