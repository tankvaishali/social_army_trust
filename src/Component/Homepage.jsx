import React, { useEffect, useState } from 'react'
import HOC from './HOC'
import BoxHome from './BoxHome'
import AboutHome from './AboutHome'
import WhoweHome from './WhoweHome'
import SaveHome from './SaveHome'
import Logorun from './Logorun'
import Videohome from './Videohome'
import Testimonial from './Testimonial'
import { TbPigMoney } from "react-icons/tb";
import { Link, useLocation } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import HeartLine from './HeartLine'
import Profile from './Profile'
function Homepage() {
  const location = useLocation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 4); // Assuming you have 3 carousel items
    }, 3500);

    return () => clearInterval(intervalId); // Clear the interval when the component unmounts
  }, []);

  useEffect(() => {
    // Reset the index when the location changes
    setIndex(0);
  }, [location.pathname]);


  return (
    <>
      <Carousel className='crslSlide' fade activeIndex={index} onSelect={() => { }}>
        <Carousel.Item className='setimage'>
          <img src={require('../assets/image/HomePage/1.jpg')} className="d-block w-100 slideImg object-fit-cover" alt='not Found' />
        </Carousel.Item>
        <Carousel.Item className='setimage'>
          <img src={require('../assets/image/HomePage/CrouselItem4.jpg')} className="d-block w-100 slideImg object-fit-cover" alt='not Found' />
        </Carousel.Item>
        <Carousel.Item className='setimage'>
          <img src={require('../assets/image/HomePage/SAI_2997.JPG')} className="d-block w-100 slideImg object-fit-cover" alt='not Found' />
        </Carousel.Item>
        <Carousel.Item className='setimage'>
          <img src={require('../assets/image/HomePage/CrouselItem4.jpg')} className="d-block w-100 slideImg object-fit-cover" alt='not Found' />
        </Carousel.Item>
      </Carousel>

      <AboutHome />
      <Profile/>
      <BoxHome />
      <div className='donationimages'>
        <div className='container py-5'>
          <HeartLine />
          <div className='row m-0 g-4 py-5'>
            <div className='col-12 col-lg-9'>
              <p className='hometext text-white text-center fs-1' data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1800">
                Make A <span className='spncolor'>Donation Now ?</span>
              </p>
            </div>
            <div className='col-12 col-lg-3 m-auto col-md-3 d-flex align-content-center align-items-center justify-content-center'>
              <Link to={"/paymentpage"} className='text-decoration-none volunteer p-2 pt-1 fw-medium w-100 text-center fs-5 mt-2'>
                <span className='fs-4'><TbPigMoney /></span> Donation
              </Link>
            </div>
          </div>
        </div>
      </div>
      <WhoweHome />
      <Videohome />
      <Testimonial />
      <SaveHome />
      <Logorun />
    </>

  )
}

export default HOC(Homepage)