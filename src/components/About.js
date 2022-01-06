import React, {useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import image1 from '../assets/logo2.png'
import image2 from '../assets/logo3.png'
function About() {
    useEffect(() => {
        Aos.init({
          duration : 200
        });
      }, [])
    return (
        <div>
            <section id="about" className="about" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <div className="container" data-aos="fade-up">
                    <div className="row gx-0">
                    <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                        <div className="content">
                            <h1>About Us</h1>
                            <h2>Vision and Mission</h2>
                            <p>ACES Nirma University aims to make students technically stronger by organising various workshops and seminars on the latest technologies. The organisation also contributes to the betterment of society by organising socially relevant technical activities.</p>
                            <div className="text-center text-lg-start">
                                <button type="button" className="btn btn-outline-primary">
                                <a href='https://technology.nirmauni.ac.in/student_work/aces/' target='__blank' style={{color : "inherit"}}>
                                    Read More
                                </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                        <a href='https://technology.nirmauni.ac.in/' target='__blank'>  
                            <img src={image1} className="img-fluid" alt=""/>  
                        </a>
                    </div>
                    <div className="col-lg-3 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                        <a href='https://technology.nirmauni.ac.in/student_work/aces/' target='__blank'>  
                            <img src={image2} className="img-fluid" alt=""/>
                        </a>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default About
