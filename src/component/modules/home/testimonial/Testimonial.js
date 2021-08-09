import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Tes1 from '../../../assets/Testimonial/Tes1.jpg'
import Tes2 from '../../../assets/Testimonial/Tes2.jpg'
import Tes3 from '../../../assets/Testimonial/Tes3.jpg'
import './Testimonial.css'


export default function Testimonial() {
    return (
        <div className="sec1 mt-4 pb-5">
            <h3 className="text-center fs-1 fw-bold heaC1">Testimonial</h3>

            
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={1500}
      >
        <div>
          <img src={Tes1} />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src={Tes2} />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src={Tes3} />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>
    
                        
        </div>
    )
}
