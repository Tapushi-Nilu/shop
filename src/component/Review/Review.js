
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Review.css'

const Review = () => {

    const {user} = useAuth();
    const [review, setReview] = useState();

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('https://still-refuge-06425.herokuapp.com/addreview', {
            method: "POST",
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>setReview(result));

       console.log(data)
    }


    return (
        <div className="review-frm">
            <h2 className="text-center mb-4">Add Your Review</h2>
           <form style={{textAlign:'center'}} onSubmit={handleSubmit(onSubmit)}>
                 <input type="text" defaultValue={user?.name} {...register("name", { required: true })} placeholder="Your Name" /> <br/>
                <input name="email" type="email" defaultValue={user?.email} {...register("email", { required: true })} placeholder="Your Email" /> <br/>
                <input {...register("comments", { required: true })} placeholder="Your Comments" /> <br/>
                <input className="btn-sb" type="submit" />
            </form>
        </div>
    );
};

export default Review;