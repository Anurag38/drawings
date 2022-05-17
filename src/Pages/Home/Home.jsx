import React from 'react'
import "./Home.css"
import img1 from "../../Assets/img-1.jpeg"
import img2 from "../../Assets/img-2.jpeg"
import img3 from "../../Assets/img-3.jpeg"



const Home = () => {
    return (
        <div>
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img1} className="d-block img-fluid w-100 car-img-height" alt="demo-pic" />
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block img-fluid w-100 car-img-height" alt="demo-pic" />
                        </div>
                        <div className="carousel-item">
                            <img src={img3} className="d-block img-fluid w-100 car-img-height" alt="demo-pic" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home