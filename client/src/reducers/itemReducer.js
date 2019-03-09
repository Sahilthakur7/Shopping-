import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM , DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        {id: uuid(), name: 'Playstation 4'},
        {id: uuid(), name: 'RDR 2'},
        {id: uuid(), name: 'God Of War'},
        {id: uuid(), name: 'Persona 5'}
    ]
}

export default function(state= initialState,action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    }
}
