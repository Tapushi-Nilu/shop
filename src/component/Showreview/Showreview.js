import React, { useEffect, useState } from 'react';
import Addreview from '../Addreview/Addreview';

const Showreview = () => {

    const [ showreview, setShowreview] = useState([]);
    useEffect( () => {
        fetch('https://still-refuge-06425.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setShowreview(data))
    }, [])

    return (
        <div>
            <div className="text-center mt-5">
                <h1 style={{fontWeight:'700'}}>Client Feedback</h1>
                <p>There are many variations of passages of Lorem Ipsum available</p>
            </div>

        <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    showreview.map( review => <Addreview
                        key={review._id} 
                        review={review}
                        ></Addreview>)
                }
            </div>

       </div>
        </div>
    );
};

export default Showreview;