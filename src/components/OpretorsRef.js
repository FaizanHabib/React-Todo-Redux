import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';



class OperatorRef extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            loader: false,
        }
    }
    async componentDidMount() {
        await this.setState({ loader: true })

        await fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => (response.json()))
            .then((res) => this.setState({ dataSource: res}))

            .catch((error) => {
                alert(error.message)
            })

        this.setState({
            loader: false
        })
    }

    render() {
        console.log(this.state.dataSource);
        return (
            <div className="container">
                {
                    this.state.loader === true ?
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        :
                        null
                }

                <h2>Data From API</h2>
                {
                    this.state.dataSource.map((item, index) => (

                        <div key={index}>
                            <div>
                                <span>{item.id}</span><br />
                                <span>{item.title}</span><br />
                                <span></span><br />
                                <span></span><br />

                            </div>
                        </div>
                     ))
                }

            </div>
        );
    };
};

export default OperatorRef;