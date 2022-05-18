import React from 'react'
import "./Home.css"
import img1 from "../../Assets/img-1.jpeg"
import img2 from "../../Assets/img-2.jpeg"
import img3 from "../../Assets/img-3.jpeg"
import Artist from "../../Assets/artist.jpg"
import Card from '../Card/Card'
import { Link } from 'react-router-dom'



const Home = () => {


    const title1 = "Image-1"
    const title2 = "Image-2"
    const price1 = 25000
    const price2 = 1000

    return (
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
            <div className='fs-3 my-4 text-center anurag'>
                <Link to="/" className='dec-none text-secondary'>SHOP ORIGINAL ARTWORKS</Link>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                        <Card img={img1} price={price1} title={title1} />
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                        <Card img={img2} price={price2} title={title2} />
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center text-size'>
                <button type="button" class="btn btn-danger">
                    <Link to="/prints" className='px-4 my-3 dec-none text-light header-hover-effect py-2 fs-5'>
                        Visit collection
                    </Link>
                </button>
            </div>
            <div className='container'>
                <div className='row my-4'>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 '>
                        <img src={Artist} className="img-fluid w-100 artist-image cont-ht" alt="Artist" />
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 '>
                        <div className='cont-ht py-5 px-2'>
                            <p className='fs-4 text-center my-4 my-sm-4 my-md-0 my-lg-0 my-xl-0'>
                                About
                            </p>
                            <p className='justify-content-left my-3'>
                                I am Alika Bhatt, an Abstract Realistic Artist, Teacher, Youtuber, TedX Speaker and and Entrepreneur from
                                India.I love working with mixed media and my artworks are deeply influenced by photography, nature and
                                emotions. My portraits usually have the themes of self-love, freedom and power.<br></br><br></br>

                                By Embracing my life with Art, my main aim lies in exploring the Hidden Goodness. I truly believe that
                                the most beautiful thing about art is - how it unites us. We might not have the same language or belong to
                                the same region but we can all understand the language of art.<br></br><br></br>

                                Thanks for being part of my Art Journey. I am living my dream of sharing my Artworks globally to their
                                forever homes.<br></br><br></br>

                                My eternal gratitude always.<br></br>
                                - Alika ❤️</p>
                        </div>



                    </div>

                </div>

            </div>
        </div >
    )
}

export default Home