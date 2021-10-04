import React, { Component } from 'react'

//Class Component

export class ListDetails extends Component {
    render() {
        return (

            //Rendering Data into Table

            <div>
                <h3>Employee Data</h3>
                <hr />
                <table className="table table-striped table-dark table-hover text-center">
                    <thead>
                        <tr>
                            <th rowSpan='2'>Sr. No.</th>
                            <th rowSpan='2'>Emp ID</th>
                            <th colSpan='2'>Employee Name</th>
                            <th rowSpan='2'>Department</th>
                            <th rowSpan='2'>Email ID</th>
                            <th rowSpan='2'>Phone</th>
                            <th rowSpan='2'>City</th>
                        </tr>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.empDetail.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.eid}</td>
                                        <td>{item.first}</td>
                                        <td>{item.last}</td>
                                        <td>{item.dep}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.add}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

//Exporting Class Component

export default ListDetails
