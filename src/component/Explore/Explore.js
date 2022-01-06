import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Service from '../Service/Service';

const Explore = () => {
    
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('https://still-refuge-06425.herokuapp.com/products')
        .then(res => res.json())
        .then(data=> setServices(data))
    }, []);


    return (
        <>
            <Navigation></Navigation>
            <div style={{textAlign:'center', padding:'50px 0px'}}>
                <h1 style={{ fontSize:'48px',marginBottom:'26px', fontWeight:700}}>Featured Items</h1>
                <p style={{color: '#595959',fontSize: '18px'}}>There are many variations of passages of Lorem Ipsum available</p>
            </div>
            
            <div className="container mb-5">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map( service => <Service
                            key={service._id} 
                            service={service}
                            ></Service>)
                    }
                </div>

            </div>
            <Footer></Footer>
        </>
    );
};

export default Explore;