import React, { useState } from 'react';
import './Dedicate.css';

const Dedicate = () => {
    const [btn1, setBtn1] = useState(false);
    const [btn2, setBtn2] = useState(false);
    const [btn3, setBtn3] = useState(false);
    const handleOver = (name)=>{
        if('first-btn' == name){
            setBtn1(true);
        }
        if('second-btn' == name){
            setBtn2(true);
        }
        if('third-btn' == name){
            setBtn3(true);
        }
    }
    const handleOut = (name)=>{
        if('first-btn' == name){
            setBtn1(false);
        }
        if('second-btn' == name){
            setBtn2(false);
        }
        if('third-btn' == name){
            setBtn3(false);
        }
    }
    return (
        <section className="dedicate-section my-4">
            <div className="container">
                 <h2>Choose Your Dedicated Team</h2>
                 <div className="row justify-content-center my-5">
                     <div className="col-lg-3 mr-lg-2">
                         <div onMouseOver={() =>handleOver('first-btn')} onMouseOut={() =>handleOut('first-btn')} className="card-package">
                             <h1>$199</h1>
                             <p className="lead">For Basic</p>
                             <div className="package-details">
                                <p>Homepage</p>
                                <p>No Inner Page</p>
                                <p>Asset file</p>
                                <p>Source file</p>
                                <p>Free Stock Photos</p>
                                <p>10 Days Free Support</p>
                                <p>24/7 Support</p>
                                {
                                    btn1 && <button className="button-design">Order Now</button>
                                }
                             </div>
                         </div>
                     </div>
                     <div className="col-lg-3 mx-lg-3">
                     <div onMouseOver={() =>handleOver('second-btn')} onMouseOut={() =>handleOut('second-btn')}  className="card-package">
                             <h1>$399</h1>
                             <p className="lead">For Preferred</p>
                             <div className="package-details">
                                <p>Homepage</p>
                                <p>4 Inner Page</p>
                                <p>Asset file</p>
                                <p>Source file</p>
                                <p>Free Stock Photos</p>
                                <p>20 Days Free Support</p>
                                <p>24/7 Support</p>
                                {
                                    btn2 &&   <button className="button-design">Order Now</button>
                                }
                             </div>
                         </div>
                     </div>
                     <div className="col-lg-3 ml-lg-2">
                     <div onMouseOver={() =>handleOver('third-btn')} onMouseOut={() =>handleOut('third-btn')} className="card-package">
                             <h1>$599</h1>
                             <p className="lead">For Elite</p>
                             <div className="package-details">
                                <p>Homepage</p>
                                <p>8 Inner Page</p>
                                <p>Asset file</p>
                                <p>Source file</p>
                                <p>Free Stock Photos</p>
                                <p>30 Days Free Support</p>
                                <p>24/7 Support</p>
                                {
                                   btn3 && <button id="third-btn" className="button-design">Order Now</button>
                                }
                             </div>
                         </div>
                     </div>
                 </div>
            </div>   
        </section>
    );
};

export default Dedicate;