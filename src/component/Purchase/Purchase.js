import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Purchase.css'
import Rating from 'react-rating';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const Purchase = () => {

    const {serviceId} = useParams();
    const [userDetails, setUserDetails] = useState({});

    useEffect( () =>{
        fetch(`https://still-refuge-06425.herokuapp.com/products/${serviceId}`)
        .then(res => res.json())
        .then(data=>setUserDetails(data))
    }, []);




    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://still-refuge-06425.herokuapp.com/orders', {
            method: "POST",
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Successfully Booking')
            }
        });
    }


    return (
        <>
        <Navigation></Navigation>
        <div className="product-banner">
            <h1>PRODUCT DETAILS</h1>
            <h5>HOME <span className="text-danger mt-2">//PRODUCT DETAILS</span></h5>
        </div>
           <div className="purchse">
           <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="cr">
                        <img src={userDetails.img} class="card-imgs" alt="..."/>
                        </div>
                    </div>

                    <div className="col-md-6">
                    <div className="body">
                            <h1>$ {userDetails.price}</h1>
                            <h5 className="title">{userDetails.name}</h5>
                            <Rating
                    emptySymbol="far fa-star iconp"
                    fullSymbol="fas fa-star iconp"
                    initialRating={userDetails.rate}
                    readonly
                    ></Rating>
                            <p className="text-p">{userDetails.decs}</p>
                    
                        </div>
                    </div>


                    


                    <div className="w-75 mx-auto frm">
                    <div className="booking">
                        <h1 className="my-5 til">Please Confirm Order</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true })} placeholder="Name" />
                            <input {...register("email", { required: true })} placeholder="Email" />
                            <input {...register("address", { required: true })} placeholder="Address" />
                            <input {...register("city", { required: true })} placeholder="City" />
                            <input type="number" {...register("phone")} placeholder="Phone" />
                            <input className="btn-sb" type="submit" />
                        </form>
                    </div>
                    </div>
                </div>
            </div>
           </div>
           <Footer></Footer> 
        </>
    );
};

export default Purchase;