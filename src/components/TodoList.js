import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css'

class TodoList extends Component {

    state = {
        input: ""
    }

    render() {
        return (
            <div className="topwrapperredux">
                <button className="btn textfor" onClick={() => this.props.increaseCounter()} >Increase</button>
                <text className="counttext">{this.props.counter}</text>
                <button className="btn textfor" onClick={() => this.props.decreaseCounter()} >Decrease</button>
                <button className="btn textfor" onClick={() => this.props.changeName()} >CHange name</button>

                 <form onSubmit={e => e.preventDefault()}>
                <input value={this.state.input} onChange={(e) => this.setState({input: e.target.value})}/>
                <button className="btn textfor" onClick={() => this.props.changeNameByValue(this.state.input)} >Change Name by Given Input</button>
                </form>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    };
};

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
        // addTodo: (text) => dispatch ({type: "ADD_TODO", payload: text }),
        changeName: () => dispatch({ type: "CHANGE_NAME" }),
        changeNameByValue: (txt) => dispatch({ type: "CHANGE_NAME_BY_VALUE", payload: txt })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
