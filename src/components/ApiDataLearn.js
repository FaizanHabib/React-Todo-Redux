import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap';


class ApiDataLearn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [], loading: false
        };
    };

    async componentDidMount() {
        await this.setState({ loading: true })


        await fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((res) => this.setState({ dataSource: res }))

            .catch((error) => {
                alert(error.message);
            })

        this.setState({ loading: false })
    }

    render() {


        return (

            <div className="container">
                {
                    this.state.loading === true ?
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
                             <span className="dataapi">No: {item.id} </span> <br />
                             <span><span className="dataapi">Name:</span> {item.name} </span> <br />
                             <span>Email: {item.email} </span> <br />
                             <span>Phone: {item.phone} </span>  <br />
                             <span>Website: {item.website} </span> <br />
                          </div>
                        </div>
                    ))
                }
            </div>
        );
    };
};

export default ApiDataLearn;