import React from 'react'
import { Carousel } from "react-bootstrap";
import Slide1 from "../../assets/CarouselPhotos/Slide1.jpg";
import Slide2 from "../../assets/CarouselPhotos/Slide2.jpg";
import Slide3 from "../../assets/CarouselPhotos/Slide3.jpg";


export default function HomeCarousel() {
    return (
        <div>
       <Carousel fade  variant="dark">
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Slide1} alt="First slide" height="550"/>
          
        
        </Carousel.Item>
        <Carousel.Item interval={700}>
          <img className="d-block w-100" src={Slide2} alt="Second slide"  height="550" />
         
        </Carousel.Item>
        <Carousel.Item interval={700}>
          <img className="d-block w-100" src={Slide3} alt="Second slide"  height="550" />
       
        </Carousel.Item>
        
      </Carousel>
   
            
        </div>
    )
}
