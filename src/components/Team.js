import React, {useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

function Team() {
    useEffect(() => {
        Aos.init();
      }, [])
    return (
        <>
            <h1 id="team" className='board'  data-aos="fade-down" data-aos-duration="800" data-aos-easing="ease-in-cubic">Board 2021-2022</h1>
            <div className="container" style={{backgroundColor: "#f6f9ff"}}>
                
            <div className="team">
                <div className="member"  data-aos="flip-right"  data-aos-duration="1100">
                <a href='https://www.linkedin.com/in/kanisha-shah97/' target="__blank"><img src={require("../assets/Faculty2.jpg")} alt="member_image"/></a>
                    <h3>Prof Pooja Shah</h3>
                    <span>Faculty Advisor</span>
                    </div>

                    <div className="member" data-aos="zoom-in"  data-aos-duration="1100">
                    <a href='https://www.linkedin.com/in/kanisha-shah97/' target="__blank"><img src={require("../assets/Faculty1.jpg")} alt="member_image"/></a>
                    <h3>Prof Sapan</h3>
                    <span>Faculty Advisor</span>
                    </div>

                    <div className="member" data-aos="flip-left"  data-aos-duration="1100">
                     <a href='https://www.linkedin.com/in/kanisha-shah97/' target="__blank"><img src={require("../assets/aces_1.jpg")} alt="member_image"/></a>
                    <h3>Kanisha Shah</h3>
                    <span>President</span>
                    </div>

                    <div className="member" data-aos="flip-left"  data-aos-duration="1100">
                     <a href='https://www.linkedin.com/in/kanisha-shah97/'><img src={require("../assets/aces_2.jpg")} alt="member_image"/></a>
                    <h3>Meet Vora</h3>
                    <span>Vice President</span>
                    </div>

                    <div className="member" data-aos="zoom-in"  data-aos-duration="1100">
                     <a href='https://www.linkedin.com/in/kanisha-shah97/' target="__blank"><img src={require("../assets/aces_3.jpeg")} alt="member_image"/></a>
                    <h3>Kunj Thakkar</h3>
                    <span>General Secretary</span>
                    </div> 
                    
                    <div className="member" data-aos="flip-right"  data-aos-duration="1100">
                     <a href='https://www.linkedin.com/in/kanisha-shah97/' target="__blank"><img src={require("../assets/aces_4.jpg")} alt="member_image"/></a>
                    <h3>Manan Patel</h3>
                    <span>Joint Secretary</span>
                    </div> 
                    
                    <div className="member" data-aos="flip-left"  data-aos-duration="1100">
                     <a href='https://www.linkedin.com/in/kanisha-shah97/' target="__blank"><img src={require("../assets/aces_5.jpg")} alt="member_image"/></a>
                    <h3>Akshat Shah</h3>
                    <span>Organizing Secretary</span>
                    </div> 
                    
                    <div className="member" data-aos="zoom-in"  data-aos-duration="1100">
                     <a href='https://www.linkedin.com/in/kanisha-shah97/' target="__blank"><img src={require("../assets/aces_14.jpg")} alt="member_image"/></a>
                    <h3>Naman Thakkar</h3>
                    <span>Managing Director</span>
                    </div> 
                    
                    <div className="member" data-aos="flip-right"  data-aos-duration="1100">
                     <a href='https://www.linkedin.com/in/kanisha-shah97/'><img src={require("../assets/aces_6.jpg")} alt="member_image"/></a>
                    <h3>Mrunal Shah</h3>
                    <span>Director General</span>
                    </div> 
                    
                    <div className="member" data-aos="flip-left"  data-aos-duration="1100">
                     <a href='https://www.linkedin.com/in/kanisha-shah97/' target="__blank"><img src={require("../assets/aces_7.jpg")} alt="member_image"/></a>
                    <h3>Kalp Mepani</h3>
                    <span>Treasurer</span>
                    </div> 
                    
                    <div className="member" data-aos="zoom-in"  data-aos-duration="1100">
                     <a href='https://www.linkedin.com/in/kanisha-shah97/' target="__blank"><img src={require("../assets/aces_8.jpg")} alt="member_image"/></a>
                    <h3>Shivam Panchal</h3>
                    <span>Technical Head</span>
                    </div> 
                    
                    <div className="member" data-aos="flip-right"  data-aos-duration="1100">
                     <a href='https://www.linkedin.com/in/kanisha-shah97/' target="__blank"><img src={require("../assets/aces_9.png")} alt="member_image"/></a>
                    <h3>Yagnik Thummar</h3>
                    <span>Technical Head</span>
                    </div> 
                    
                    <div className="member" data-aos="flip-left"  data-aos-duration="1100">
                     <a href='https://www.linkedin.com/in/kanisha-shah97/' target="__blank"><img src={require("../assets/aces_10.png")} alt="member_image"/></a>
                    <h3>Ansh Ray</h3>
                    <span>Public relation Officer</span>
                    </div>  
                    
                    <div className="member" data-aos="zoom-in"  data-aos-duration="1100">
                     <a href='https://www.linkedin.com/in/kanisha-shah97/' target="__blank"><img src={require("../assets/aces_12.jpeg")} alt="member_image"/></a>
                    <h3>Yash Savani</h3>
                    <span>Editor</span>
                    </div> 
                    
                    <div className="member" data-aos="flip-right"  data-aos-duration="1100">
                     <a href='https://www.linkedin.com/in/kanisha-shah97/' target="__blank"><img src={require("../assets/aces_13.jpg")} alt="member_image"/></a>
                    <h3>Gaurav Sakariya</h3>
                    <span>Creative Head</span>
                    </div> 
                    
                    <div className="member" data-aos="flip-left"  data-aos-duration="1100">
                     <a href='https://www.linkedin.com/in/kanisha-shah97/' target="__blank"><img src={require("../assets/aces_11.jpg")} alt="member_image"/></a>
                    <h3>Sachi Chaudhary</h3>
                    <span>Marketing Direcor</span>
                    </div> 

                    <div className="member" data-aos="zoom-in"  data-aos-duration="1100">
                     <a href='https://www.linkedin.com/in/kanisha-shah97/' target="__blank"><img src={require("../assets/aces_15.jpg")} alt="member_image"/></a>
                    <h3>Aayush Shah</h3>
                    <span>Graphics Designer</span>
                    </div> 

                    <div className="member" data-aos="flip-right"  data-aos-duration="1100">
                     <a href='https://www.linkedin.com/in/kanisha-shah97/' target="__blank"><img src={require("../assets/aces_16.jpg")} alt="member_image"/></a>
                    <h3>Savan vagani</h3>
                    <span>Membership Chair</span>
                    </div> 
                </div>
            </div>
        </>
    )
}
export default Team
