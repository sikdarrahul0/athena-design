import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="my-5 container">
            <h2 className="text-center">Get your design right, right now</h2>
            <p className="text-center">Be the first know our latest offers & updates!</p>
            <div className="text-center">
            <input type="text" placeholder="Enter your email address"/>
            <input type="submit" value="Get Started"/>
            </div>
            <div className="row my-5">
                <div className="col-lg-4 col-sm-12 mb-5">
                    <div className="img-div">
                        <img className="w-50" src="https://i.ibb.co/0rT1rRr/Group-86.png" alt="logo"/><br/>
                        <img className="my-4 mx-2" src="https://i.ibb.co/NyY6CKQ/facebook-logo-in-circular-shape-2x.png" alt="fb-logo"/>
                        <img className="my-4 mx-3" src="https://i.ibb.co/Cvhrb5S/twitter-4-2x.png" alt="twitter-logo"/>
                        <img className="my-4 mx-3" src="https://i.ibb.co/CnrKQfc/linkedin-2-2x.png" alt="linked-logo"/>
                        <img className="my-4 mx-2" src="https://i.ibb.co/tXNYCBm/dribbble-1-2x.png" alt="basket-logo"/>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-12 mb-4">
                    <div className="contact-div">
                        <p>Features</p>
                        <p>Enterprise</p>
                        <p>Pricing</p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-12 mb-4">
                    <div className="contact-div">
                        <p>Blog</p>
                        <p>Help Center</p>
                        <p>Contact Us</p>
                        <p>Status</p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-12 mb-4">
                    <div className="contact-div">
                        <p>About Us</p>
                        <p>Terms of Service</p>
                        <p>Security</p>
                        <p>Login</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Footer;