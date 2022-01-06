import React, {useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import e1 from '../assets/event-1.jpg'
import e2 from '../assets/event-2.jpg'
import e3 from '../assets/event-3.jpg'

function Events() {
    useEffect(() => {
        Aos.init();
      }, [])
    return (
        <div className='container event'>
        <h1 id="events"  data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-cubic">Events</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100" data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-in-cubic">
                <img src={e1} className="card-img-top thumbnail" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Coding Event</h5>
                    <p className="card-text">Competitive programming contest with exciting prizes!</p>
                </div>
                </div>
            </div>
            <div className="col" data-aos="fade-down" data-aos-duration="800" data-aos-easing="ease-in-cubic">
                <div className="card h-100">
                <img src={e2} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Webinars/Workshops</h5>
                    <p className="card-text">Monthly workshops taken by industry experts!</p>
                </div>
                </div>
            </div>
            <div className="col" data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-cubic">
                <div className="card h-100">
                <img src={e3} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Development Quest</h5>
                    <p className="card-text">Hackathons and Website development competition with huge cashprizes!</p>
                </div>
                </div>
            </div>
           </div>
    </div>
    )
}

export default Events
