import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLock } from '@fortawesome/free-solid-svg-icons'

function Login() {
    return (
        <section className="vh-100" style={{ backgroundColor: "red" }}>
            <div className="container py-5 h-100 ">
                <div className="row d-flex justify-content-center align-items-center h-100 ">
                    <div className="col col-xl-9">
                        <div className="card " style={{ borderRadius: "1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="https://imageio.forbes.com/specials-images/imageserve/5ecebee7938ec500060ab34f/0x0.jpg?format=jpg&crop=2336,2337,x1064,y702,safe&height=416&width=416&fit=bounds"
                                        alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" , height :"100%"}} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4  p-lg-5 text-black">

                                        <form>

                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                {/* <i className="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i> */}
                                                <div className='fa-2x me-3' style={{ color: "#2E6A1A" }}>
                                                    <FontAwesomeIcon icon={faLock} />
                                                </div>
                                                <span className="h1 fw-bold mb-0">Login</span>
                                            </div>

                                            

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form2Example17" className="form-control form-control-lg" placeholder='Enter Your Email' />

                                            </div>

                                            <div className="form-outline mb-4 ">
                                                <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder='Enter your password' />

                                            </div>

                                            <div className="pt-1 mb-4">
                                                <Link className="btn btn-success btn-lg btn-block " to="/portal/userlist">Login</Link>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Login
