import React from 'react'
import "./Header.css"
import SignImg from "../../Assets/K_13_copy1_300x.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-4'>

                    </div>
                    <div className='col-4 text-center'>
                        <Link to="/"><img src={SignImg} className="img-fluid" alt="Signature" /></Link>
                    </div>
                    <div className='col-4 my-5 d-flex justify-content-end'>
                        <FontAwesomeIcon icon={faSearch} className="mt-4 mx-3 icon-size" />
                        <FontAwesomeIcon icon={faBagShopping} className="mt-4 mx-3 icon-size" />
                        <FontAwesomeIcon icon={faUser} className="mt-4 mx-3 icon-size" />

                    </div>
                </div>
            </div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid ">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <div className='d-flex justify-content-center'>
                                <Link to="/" className='mx-4 dec-none text-light header-hover-effect py-2 fs-5'>
                                    Home
                                </Link>
                                <Link to="/prints" className='mx-4 dec-none text-light header-hover-effect py-2 fs-5'>
                                    PRINTS
                                </Link>
                                <Link to="/contact" className='mx-4 dec-none text-light header-hover-effect py-2 fs-5'>
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>


            
        </div>
    )
}

export default Header