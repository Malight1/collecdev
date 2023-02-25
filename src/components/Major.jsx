import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Detail.css'
import { MAJOR_DATA_SAMPLE } from "../constants";
import Map from "./Map";


/* Table Generating Function

    1. Takes in data about majors and their campus from the "constants.js" file.
    2. Sets the table header and 3 columns. 
    3. Iterates through the data to populate table with rows.

*/

const Table = ({data}) => {
    return (
        <div className="tableContainer">
            <table className="table table-light table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Major</th>
                <th scope="col">Campus</th>
                </tr>
            </thead>
            <tbody>
            {data.map((item, index) => {
                return (
                    <tr key={ item.key }>
                    <th scope="row">{ index + 1 }</th>
                    <td>{ item.major }</td>
                    <td>{ item.campus }</td>
                    </tr>
                );
            })}
            </tbody>
            </table>
        </div>
    );
}


/* Main Detail Component for Majors

Contains the overall layout of the detail page and calls other nested functions/components.

*/


class Major extends React.Component{
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }

    render() {
        return (
            <div className="container-fluid major">
                <div className="row">
                    <div className="col-sm-6 title">
                        <h1>{this.props.minor}</h1>
                        <Table data={ MAJOR_DATA_SAMPLE }/>
                    </div>
                    <div className="col-sm-6 title">
                        <h1>Placeholder</h1>
                        <Map />
                    </div>
                </div>
            </div>
        )
    }
}

export default Major
