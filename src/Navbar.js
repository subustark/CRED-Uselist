import React from 'react'


import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid" >
              
                    <span className="mr-2 d-none d-lg-inline text-gray-600"><img className="img-profile rounded-circle" style={{ width: 30 }}
                        src="https://cdn3.iconfinder.com/data/icons/3d-printing-icon-set/512/User.png" />SUBRAMANI E</span>
                    <div> 
                    <Link className="btn btn-outline-success btn-sm" to="/">Logout</Link>
                    </div>

            </div>
        </nav>

    )
}

export default Navbar