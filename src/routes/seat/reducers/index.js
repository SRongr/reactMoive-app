const seats = (state=[],action) =>{
    switch (action.type){
        case 'ADD_SEAT':
            return [
                ...state,
                action.seat
            ];
            break;
        case 'REMOVE_SEAT' :
            return state.filter(item =>(item !== action.seat));
            break;
        default :
            return state;      
    }
}

export default seats;