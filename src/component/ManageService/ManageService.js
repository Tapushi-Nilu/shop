import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const ManageService = () => {

    const [orders, setOrders] = useState([]);

    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    useEffect( () => {
        fetch('https://still-refuge-06425.herokuapp.com/allorder')
        .then(res => res.json())
        .then(data => setOrders(data)) 
    }, []);

    const handleUpdate = () => {

    }

    console.log(orders);
    return (

        <div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Shoes Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                {orders?.map((pd, index) => {
                       <tbody>
                       <tr>
                        <td>{index}</td>
                        <td>{pd.name}</td>
                        <td>{pd.desc}</td>
                        <td>
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("firstName")} />
                            <select {...register("gender")}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                            <input type="submit" />
                            </form>
                        </td>
                        <button className="btn btn-danger">Delete</button>
                        <button onClick={() =>  handleUpdate(pd._id)} className="btn btn-success" >Update</button>
                       </tr>
                   </tbody>
                })

                }
                </table>
        </div>
    );
};

export default ManageService;