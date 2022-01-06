import React from "react";

const ContactPage = () => {
  return (
    <>
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">

            <header className="section-header" style={{marginTop : "40px"}}>
              <h1>Contact Us</h1>
            </header>

            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="info-box">
                      <h3>Call Us</h3>
                      <p>+91 918191819<br/>+91 898918918</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box">
                      <h3>Email Us</h3>
                      <p>aces.it@nirmauni.ac.in</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="info-box">
                      <i className="bi bi-geo-alt"></i>
                      <h3>Address</h3>
                      <p>N-501,Nirma Universirty<br/>Ahmedabad, India-382481</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <form action="" method="post" className="contact-form">
                  <div className="row gy-4">

                    <div className="col-md-6">
                      <input type="text" name="name" className="form-control" placeholder="Your Name" required/>
                    </div>

                    <div className="col-md-6 ">
                      <input type="email" className="form-control" name="email" placeholder="Your Email" required/>
                    </div>

                    <div className="col-md-12">
                      <input type="text" className="form-control" name="subject" placeholder="Subject" required/>
                    </div>

                    <div className="col-md-12">
                      <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                    <button type="button" className="btn btn-outline-primary">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
export default ContactPage;