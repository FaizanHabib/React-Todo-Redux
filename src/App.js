import { Provider } from 'react-redux'
// import NewWithRedux from './components/reduxPrac'
// import { createStore } from 'redux';
// import CounterVal from './components/CounterVal';
// import TodoList from './components/TodoList';
// import SimpleTodo from './components/SimpleTodo';
import FoodForm from './foodForm';
import configureStore from './store'



// const initialState = {
//   todos: ["Faizan ", "Zain Ali", "Anjum Zaki", "Faizan ", "Zain Ali", "Anjum Zaki"],
// }

// const reducer = (state = initialState, action) => {
// console.log(state.todos)
// switch (action.type) {
// case 'INCREASE_COUNTER':
//   return { ...state, counter: state.counter + 1 }
// case 'DECREASE_COUNTER':
//   return { ...state, counter: state.counter - 1 }
// case 'CHANGE_NAME':
//   return { ...state, name: "Faizan" }
// case 'CHANGE_NAME_BY_VALUE':
//   return { ...state, name:action.payload }

// case 'ADD_TODO':
// return { ...state, todos: [...state.todos, action.payload]}
// case 'DELETE_TODO':
// return {...state, todos: state.todos.filter((item, _) => item !== action.payload)}
// }
// return state
// }

// const store = createStore(reducer)

// const store = configureStore();

function App() {
  return (
    <div>
      {/* <Provider store={store}>
        <FoodForm />
      </Provider> */}
    </div>

  );
};
export default App;







/* Store - holds our state - THERE IS ONLY ONE STATE
 * Action - State can be modified using actions - SIMPLE OBJECTS
 * Dispatcher - Action needs to be sent by someone - known as dispatching an action
 * Reducer - receives the action and modifies the state to give us a new state
 *  - pure functions
 *  - only mandatory argument is the 'type'
 * Subscriber - listens for state change to update the ui
 */