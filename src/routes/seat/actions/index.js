export const addSeat = seat =>{
    return {
        type : 'ADD_SEAT',
        seat,
    }
}

export const removeSeat = seat =>{
    return {
        type : 'REMOVE_SEAT',
        seat,
    }
}
 //action 是要告诉要执行reducers下面的哪一个