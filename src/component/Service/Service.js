import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = (props) => {
    const {_id, name, img, price, rate} = props.service;
    return (
        <div className="col">
            <div className="card h-100">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>

                <div className="rating">
                <Rating
                    emptySymbol="far fa-star icon"
                    fullSymbol="fas fa-star icon"
                    initialRating={rate}
                    readonly
                ></Rating>
                <p className="ms-auto text-danger">$ {price}</p>
            </div>
            </div>

            <div>
            <Link to={`/purchase/${_id}`}><button className="btn-s">Buy Now <i class="fa fa-arrow-circle-right mx-2"></i></button></Link>
            </div>
            </div>
      </div>
    );
};

export default Service;