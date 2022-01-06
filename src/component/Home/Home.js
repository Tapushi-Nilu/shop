import React from 'react';
import AppointmentBanner from '../AppointmenBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Productarea from '../Productarea/Productarea';
import Services from '../Services/Services';
import './Home.css'
import img1 from '../images/4.png';
import img2 from '../images/5.png';
import img3 from '../images/6.png';
import Showreview from '../Showreview/Showreview';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            
            <Banner></Banner>
            <Productarea></Productarea>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>

        <div className="bt-top">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="bg44">
                        <div className="ft-btmn">
                        <h1>SPORTS SHOES</h1>
                            <h4>Sale 50% off</h4>
                        </div>
                        <div>
                            <img src={img1} alt="" />
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-4">
                <div className="bg44">
                        <div className="ft-btmn">
                        <h1>SPORTS SHOES</h1>
                            <h4>Sale 50% off</h4>
                        </div>
                        <div>
                            <img src={img2} alt="" />
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-4">
                <div className="bg44">
                        <div className="ft-btmn">
                            <h1>OFFICE SHOES</h1>
                            <h4>Sale 50% off</h4>
                        </div>
                        <div>
                            <img src={img3} alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
        </div>

        <Showreview></Showreview>
            <Footer></Footer>
        </div>
    );
};

export default Home;