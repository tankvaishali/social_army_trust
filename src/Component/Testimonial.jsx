import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { MdOutlineReviews } from 'react-icons/md';
import Slider from 'react-slick';
function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2200,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4500,
    swipe: false,    // touch swipe
    arrows: false,   //nex and previous button off
    pauseOnHover: false, // Set to false to continue autoplay on hover
    responsive: [

      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      }
    ]
  };
  let testdata = [
    {
      pera: "Social Unity Charitable Trust plays a pivotal role in fostering positive change, unity, and addressing societal challenges. Through dedication, compassion, and relentless efforts, these individuals are providing invaluable support to the vulnerable and marginalized.",
      name: "Hardik Patel"
    },
    {
      pera: " The commitment of Social Army is a beacon of hope, demonstrating the profound impact of collective action in creating a more equitable and compassionate world. Their holistic approach, coupled with genuine compassion and empathy, fosters positive change and promotes social justice.",
      name: "Nirav Akbari"
    },
    {
      pera: "Their work not only transforms lives but also inspires others to join the noble pursuit of making a meaningful difference in the lives of those in need. By raising awareness about food waste and implementing practical solutions, the organization actively engages communities in minimizing their impact.",
      name: "Smit Pithadiya"
    },
    {
      pera: " Social Unity Charitable Trust has become a beacon of change, promoting compassion, sustainability, and community involvement. The organization's multifaceted approach has garnered widespread appreciation, making it a symbol of positive change in the realm of social work. ",
      name: "Jay Vadadoriya"
    },
  ]
  return (
    <>
      <div className='testimonialimage text-white'>
        <div className='container py-5'>
          <div className=' fw-bold text-center spncolor' data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-delay="50" data-aos-duration="1800">
            <span className='fs-3 '><MdOutlineReviews className="me-2" /></span> What People Say
          </div>

          <div className='abouthead fs-1 fw-bold text-center text-white' data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-delay="50" data-aos-duration="1800">
            Our <span className=''>Testimonial</span>
          </div>
          <div className='pera py-2 text-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom"
            data-aos-delay="50" data-aos-duration="1800">
            Our testimonials may express gratitude for the organization's dedication to creating positive change in
            communities, improving lives, and addressing pressing social issues. Many individuals share stories of
            personal transformation, highlighting how the NGO's programs, services, or initiatives have made a
            significant difference in their lives. Our testimonials serve as powerful reminders of the invaluable
            role that social work NGOs play in fostering positive social change and uplifting individuals and
            communities in need.
          </div>
          <Slider {...settings}  >
            {
              testdata.map((x, i) => {
                return (
                  <div key={i}>
                    <div key={i} className='border-end border-secondary border-1 p-3 p-lg-5 h-100' >
                      <div className='fs-3 spncolor'><FaQuoteLeft /></div>
                      <div className='pera pt-1' >
                        {x.pera}
                      </div>
                      <div className='fs-3 spncolor text-end'><FaQuoteRight /></div>
                      <div className='text-center fs-4 fw-bold mt-auto'>{x.name}</div>
                    </div>
                  </div>
                )
              })
            }

          </Slider>
        </div>
      </div>
    </>
  )
}

export default Testimonial