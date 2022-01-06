import React from 'react';
import './Productarea.css'

const Productarea = () => {
    return (
        <div className="container-fluid productarea">
            <div className="row">
                <div className="col-md-4">
                    <div className="bg1">
                        <h4>Sale 50% off</h4>
                        <h1>SPORTS SHOES</h1>
                    </div>
                </div>
                <div className="col-md-4">
                     <div className="bg2">
                        <h4>Sale 50% off</h4>
                        <h1>NEW ARRIVAL</h1>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bg3">
                        <h4>Sale 50% off</h4>
                        <h1>NEW SNEAKERS</h1>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Productarea;