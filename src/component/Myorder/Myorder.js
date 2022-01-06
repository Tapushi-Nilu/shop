import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Myorder = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
    fetch(`https://still-refuge-06425.herokuapp.com/orders?=­${user.email}`)
    .then((res) => res.json())
    .then((data) => setOrders(data))
    //­ .finally(()=> setIsloading(false));
    }, [user.email]); 
        
    const handleDelete = id => {
        const isConfirm = window.confirm("Are you sure...?");
        console.log(id);
        if (isConfirm) {
            fetch(`https://still-refuge-06425.herokuapp.com/orders/­${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" }
            })
            .then( res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                    alert('successfull')
                }
            })
        }
    }

    return (
        <div>
                <h3 className="text-cent­er text-uppercase my-4">your {orders?.length} orders</h3>
            <div className="container">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>

                {orders 
                ? orders?.map((order, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{order.name}</td>
                        <td>{order.email}</td>
                        <td>{order.title}</td>
                        <td>${order.price}</td>
                        <td>
                            <button onClick={() => handleDelete(order?._id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ))
                    : ""}
                </tbody>
                </table>
            </div>
        </div>  
        

    );
};

export default Myorder;