import React, { Component } from 'react';

class NavOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMe: false
        }
    }

    showHide = () => {
        this.setState({
            showMe: !this.state.showMe
        })
    }

    render() { 
        return (
            <div>
            <div className="container">
                <button className="toggelbtn" onClick={() => this.showHide()}>III</button>
                <ul className={this.state.showMe ? "list-ul mobile-menu-link" : "list-ul"}>
                    <li className="list-items">Home</li>
                    <li className="list-items">About</li>
                    <li className="list-items">portfolio</li>
                    <li className="list-items">blog</li>
                    <li className="list-items">contact</li>
                </ul>
            </div>
         </div>
        );
    }
}
 
export default NavOne;