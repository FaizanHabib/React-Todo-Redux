import { ADD_TODO, DELETE_TODO } from '../actions/types';

const initialState = {
    todos: [],
}

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return{...state, todos: [...state.todos.concat(action.payload)]}
        case DELETE_TODO:
            return{...state, todos: state.todos.filter((item, i) => i !== action.payload)}
    }
        
    return state
}

export default todoReducer;