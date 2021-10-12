import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css'

class NewWithRedux extends Component {

    render() {
        console.log(this.props.name);
        return (
            <div className="d-flex flex-column topwrapperredux" >

                <h2>My couuter val : {this.props.counter}</h2>
                <h2>name : {this.props.name}</h2>
        
               <ul>
                   {/* {this.props.name.map((item, index) => (
                       <li key={index}> {item} </li>
                   ))} */}
               </ul>


            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter,
        name: state.name
    };
};





export default connect(mapStateToProps, null)(NewWithRedux);
