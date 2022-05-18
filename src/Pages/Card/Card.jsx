import React from 'react'
import "./Card.css"

const Card = ({ title, price, img }) => {

    return (
        <div>
            <div className="card border-none">
                <img src={img} className="card-img-top card-img-h" alt="demo" />
                <div className="card-body">
                    <div className='text-center my-0'>
                        <button type="button" className="btn btn-transparent card-title fs-5 text-danger text-center my-0 py-0">{title}</button>
                    </div>
                    <p className='text-center my-0'>
                        {price}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card