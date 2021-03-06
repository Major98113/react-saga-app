import React, { Component } from 'react';
import './Loans.css';

export default class Loans extends Component {

    renderLoan = ({number, status, return_date, requested_amount}) => {
        return (
            <tr key={number}>
                <th scope="row">{number}</th>
                <td>{status}</td>
                <td>{return_date}</td>
                <td>{requested_amount}</td>
            </tr>
        );
    };

    render() {
        const {
            loans
        } = this.props;
        return(
            <div>
                <h1 className="col-lg-12 text-center">Loans</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Number</th>
                        <th scope="col">Status</th>
                        <th scope="col">Return data</th>
                        <th scope="col">Money</th>
                    </tr>
                    </thead>
                    <tbody>
                        {loans.map( item => this.renderLoan(item) )}
                    </tbody>
                </table>
            </div>
        );
    }
}
