import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://still-refuge-06425.herokuapp.com/services', data)
        .then(res => {
            if (res.data.insertedId) {
                alert('added successfully');
                reset();
            }
        })
    }


    return (
        <div className="add-service">
        <h1 className="text-center mb-5">Please Add a Product</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true })} placeholder="Name" />
            <textarea {...register("description")}placeholder="Description"/>
            <input type="number" {...register("price")} placeholder="Price" />
            <input {...register("img")} placeholder="Image URL"/>
            <input className="btn-sn" type="submit"/>
        </form>
    </div>
    );
};

export default AddProduct;