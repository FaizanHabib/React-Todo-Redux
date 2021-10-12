import React, { Component } from 'react';
import { connect } from 'react-redux';


class SimpleTodo extends Component {
    state = {
        inputValue: "",
    }


    addTodo = () => {
        // this.props.addTodoRedux(this.state.inputValue)
    }

    deleteTodo = (index) => {

        // this.props.deleteTodoRedux(this.props.todos)

        // this.props.deleteTodoRedux(this.props.todos.filter((item, i) => i !== index))

        // this.setState({
        //     todos: this.props.todos.filter((item, i) => i !== index)
        // })
    }

    render() {
        console.log(this.props.deleteTodoRedux)
        return (
            <div className="container topwrapperredux">
                <div>
                    <form onSubmit={e => e.preventDefault()}>
                        <input placeholder="  Add Items..."
                            value={this.state.inputValue}
                            onChange={(e) => { this.setState({ inputValue: e.target.value }) }} />
                        <button type="submit" className="btn textfor" onClick={() => this.addTodo()} >Add Item</button>
                    </form>
                </div>
                <div style={{ flexDirection: "column" }}>
                    {this.props.todos.map((item, index) => (
                        <div key={index} className="d-flex flex-row m-2 " >
                            <h3 style={{ marginRight: "2rem" }}
                                key={index}>{item}</h3>
                            <button className="btn btn-outline-danger "
                                onClick={() => { this.props.deleteTodoRedux(item) }}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        todos: state.todos,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        addTodoRedux: (item) => dispatch({ type: 'ADD_TODO', payload: item }),
        deleteTodoRedux: (del) => dispatch({ type: 'DELETE_TODO', payload: del }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleTodo);
