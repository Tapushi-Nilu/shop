import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="ft-img mb-4">
              {/* <img className="h-25" src={img} alt="" /> */}
            </div>
                <hr/>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                         <div className="mt-4">
                            <h2 className="mb-5">Contact Us</h2>
                             
                            <div className="footer-lt">
                                <div className="ft-t">
                                <h5 className="mt-2">Visit us anytime</h5>
                                <p>Level-4, 34, Awal Centre, Banani,<br/></p>
                                </div>
                            </div>

                            <div className="footer-lt">
                                <div className="ft-t">
                                <h5 className="mt-1">Call Us</h5>
                                <p className=""> +1800-208-6835</p>
                                </div>
                            </div>


                            <div className="footer-lt">
                                <div className="ft-t">
                                <h5 className="mt-2">Send us an email</h5>
                                <p className="ml-2"> Official: abc@gmail.com</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                        <h2 className="m-4 mb-5">About Us</h2>   
                        <ul className="footer-md">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#home">Our Services</a></li>
                            <li><a href="#home">Appointment</a></li>
                            <li><a href="#home">Location</a></li>
                            <li><a href="#home">Blog</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                        <h2 className="m-4 mb-5">My Account</h2>   
                        <ul className="footer-md">
                            <li><a href="#home">My Account</a></li>
                            <li><a href="#home">My Account</a></li>
                            <li><a href="#home">Shopping cart</a></li>
                            <li><a href="#home">Shop</a></li>
                            <li><a href="#home">Services Login</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="mt-4 footer-right">
                        <h2 className="mb-5">Social Network</h2>


                            <div className="footer-lt">
                                <div className="ft-t">
                                <h5 className="mt-2">Facebook</h5>
                                <p>www.facebook.com/medicarehgf</p>
                                </div>
                            </div>

                            <div className="footer-lt">
                                <div className="ft-t">
                                <h5 className="mt-1">Twitter</h5>
                                <p className=""> #WeCare</p>
                                </div>
                            </div>


                            <div className="footer-lt"> 
                                <div className="ft-t">
                                <h5 className="mt-2">Instagram</h5>
                                <p className="ml-2"> www.instagram.com/medicarebvd</p>
                                </div>
                            </div>   
                    </div>
                    </div>
                </div>
            </div>
        </div>
                   <div className="text-center p-3 ft-bottom text-white">Copyright by 2021. All rights reserved.</div>
      
      </>
    );
};

export default Footer;