import { DELETE_FOOD, ADD_FOOD } from "../actions/types";

const initialState = {
    foodList: []
}

const foodReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FOOD:
            return{...state, foodList:[...state.foodList.concat(action.payload)]}
        case DELETE_FOOD:
            return{...state, foodList: state.foodList.filter((item, i) => i !== action.payload)}
    };
    return state
};

export default foodReducer;