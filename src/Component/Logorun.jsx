import React from 'react';
import { GiStairsGoal } from 'react-icons/gi';
import Slider from 'react-slick';

function Logorun() {
  let carddata = [
    { img: require("../assets/image/logos/drug_bank-removebg-preview.png"), },
    { img: require("../assets/image/logos/mahila_sashkti-logo02.png"), },
    { img: require("../assets/image/logos/gauseva-logo01.png"), },
    { img: require("../assets/image/logos/shiksha-logo.png"), },
    { img: require("../assets/image/logos/ann_sakshi-removebg-preview.png"), },
    { img: require("../assets/image/logos/paryavaran_raksha-removebg-preview.png"), },
    { img: require("../assets/image/logos/logo.png"), },
  ]

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: false,    // touch swipe
    arrows: false,   //nex and previous button off
    pauseOnHover: false, // Set to false to continue autoplay on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      }
    ]
  };
  return (
    <>
      <div className='container py-4 p-0'>
        <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">

          <div className='abouththought fw-bold text-center headcolor' data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1800"><span className='fs-3 '><GiStairsGoal className="me-2" /></span> Our Projects </div>

          <div className='abouthead fs-1 fw-bold text-center text-capitalize' data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1800">improving <span className='headcolor'>projects</span> and protecting  <span className='headcolor'>ours communities</span></div>
          <div className='pera py-2 text-center container' data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1800">Join us in our mission to create new opportunities and bring positive change to the world. We have our seven projects of social works. with the help of this project we can do our missions completes and help who those needed it.</div>

          <div className='container text-center overflow-hidden py-0 py-md-4 py-lg-4 pb-5 ms-auto'>
            <Slider {...settings}>
              {
                carddata?.map((x, i) => {
                  return (
                    <div key={i}>
                      <div className='logorunimage text-center m-2 d-flex align-items-center ' >
                        <img src={x.img} alt="" className="img-fluid object-fit-cover w-100 " />
                      </div>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default Logorun