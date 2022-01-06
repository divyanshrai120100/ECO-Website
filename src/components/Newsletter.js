import React from 'react'

function Newsletter() {
    return (
            <div className="footer-newsletter">
                <div className="container" data-aos="zoom-in"  data-aos-duration="1200">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center">
                            <h1>Newsletter</h1>
                            <p>Subscribe to our newsletter & Stay updated with the upcoming events!🎉</p>
                        </div>
                        <div className="input-group mb-3 w-50 col-lg-6 subs">
                            <input type="email" className="form-control em" placeholder="Email Id" aria-label="Email Id" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </div>
                        <div className="social-menu">
                            <ul>
                                <li><a href="https://www.facebook.com/aces.itnu/" target="blank"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="https://www.instagram.com/aces_it_nu/" target="blank"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/company/association-of-computer-engineering-students/" target="blank"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="https://www.facebook.com/aces.itnu/"><i className="fab fa-facebook" target="blank"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
    )
}
export default Newsletter
