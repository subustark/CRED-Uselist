import React from 'react'
import User from './User'
import { Link } from "react-router-dom"

function UserList({ data, setData }) {
    const DeleteUser = (id) => {
        const confirm = window.confirm("Do you want to delete?")
        if (confirm) {
            setData(data.filter((item) => item.id !== id));
        }
    };

    return (

        <div className="card shadow mb-4">
            <div className="card-header py-3 d-sm-flex  justify-content-between mb-4">
                <h6 className="m-0 font-weight-bold text-primary">Employees Data</h6>
                <Link to="/portal/createuser" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Add Employee</Link>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-success table-striped-columns" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Salary</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((dt, index) => <User keys={index} data={dt} DeleteUser={DeleteUser} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserList
