import React from 'react';
import useAuth from '../../hooks/useAuth';

const Addreview = (props) => {
    const { name, email, comments} = props.review;

    const {user} = useAuth();
    return (
        <div>
              <div className="col">
                    <div style={{border:'1px solid #ddd', width:'100%'}} className="cardd my-5">
                        <img src={user.photoURL} className="card-img w-50 text-center" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">{name}</h4>
                            <h5>{email}</h5>
                            <p>{comments}</p>

                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Addreview;