import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addTodo, deleteTodo } from './actions/food'


import "./App.css";

class FoodForm extends Component {
    state = {
        inputValue: "",
    };

    submitForm = (e) => {
        e.preventDefault();
       this.setState({
        inputValue: "",
       })
    }

    // deleteTodo = (index) => {
    //     this.setState({
    //         todos: this.state.todos.filter((i, item) => item !== index)
    //     })
    // }
    render() {
        return (
            <div className="container" style={{ width: '80%', margin: '0 auto', border: '1px solid black', marginTop: '2rem', padding: '2rem', borderRadius: '10px' }}>
                <div className="row" style={{ display: 'flex', justifyContent: 'center', margin: '2rem', width: '80%', }}>
                    <div className="col-md-4 m-5" style={{ width: '80%', display: 'flex', justifyContent: 'center' }}>
                        <form onSubmit={this.submitForm}>
                            <input className="form-control" placeholder=" Enter Text...."
                                value={this.state.inputValue} 
                                onChange={(e) => this.setState({ inputValue: e.target.value })}
                                style={{ height: '40px', borderRadius: '10px', }}
                            />
                            <button className="btn btn-outline-success m-2"
                                type="submit"
                                onClick={() => {this.props.add(this.state.inputValue)}}
                                style={{ height: '45px', borderRadius: '10px', marginLeft: '.4rem' }}
                            >Add Here</button>
                        </form>
                    </div>
                </div>
                <div className="row" style={{ display: 'flex', justifyContent: 'center', width: '80%', flexWrap: 'wrap' }}>
                    {this.props.todos.map((item, index) => (
                        <div className="col-md-3 m-3 bg-dark text-white" key={index}
                            style={{ marginLeft: '2rem', marginTop: '1rem', border: '1px solid black', padding: '1rem', borderRadius: '10px', }}>
                            {item}
                            <button className="btn btn-outline-danger deleteBtn"
                                type="submit"
                                onClick={() => this.props.delete(index)}
                                style={{ height: '35px', borderRadius: '10px', marginLeft: '.5rem', cursor:'pointer' }}
                            >Delete</button>
                        </div>
                    ))}

                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
   return{
       todos: state.todoReducer.todos,
   }
}

const mapDispatchToProps = (dispatch) => {
    return{
        add: (todo) => dispatch(addTodo(todo)),
        delete: (index) => dispatch(deleteTodo(index)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(FoodForm);