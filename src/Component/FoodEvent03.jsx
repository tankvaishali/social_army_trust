import React from 'react';
import { BsFeather } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
function FoodEvent03() {
  let foodData03 = [
    {
      image: require('../assets/image/annsathi/foodblog0002 (7).jpg'),
    },
    {
      image: require('../assets/image/annsathi/foodblog0003 (4).jpg'),
    },

    {
      image: require('../assets/image/annsathi/foodblog0003 (2).jpg'),
    },
  ]

  let food03video = [
    {
      src: "https://www.youtube.com/embed/cHuJyopYa5c?si=kYoEJJqfL0uJEzhj"
    },
    {
      src: "https://www.youtube.com/embed/HWAJViU8_lU?si=2sK85G8sCznQOZUw"
    },
  ]
  return (
    <div className='container py-5 text-center'>
      <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
      <div className='abouthead fs-1 fw-bold'>Waste  <span className='headcolor'> Less, </span>  Save  More <span className='headcolor'> Lifes.</span>  </div>
      <div className="pera pt-1">"Feed the Future" recognizes that investing in children's nutrition is an investment in the future of our society. By ensuring that every child has enough to eat, we lay the foundation for a healthier, more equitable, and prosperous tomorrow. We believe that together, we can create a world where no child goes hungry, and every child has the opportunity to reach their full potential. </div>


      <div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Gallery</span> </div>
      <div className='row  m-0 p-0 g-5'>
        {
          foodData03.map((x, i) => {
            return (
              <>
                <div className=' col-12 col-md-6 col-lg-4' key={i} data-aos="zoom-in"
                  data-aos-delay="50"
                  data-aos-duration="1800">
                  <div className='eventimagezoom rounded-2 shadow' >
                    <img src={x.image} alt="" className='img-fluid object-fit-cover h-100 w-100' />
                  </div>
                </div>

              </>
            )
          })
        }
      </div>
      <div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Videos</span> </div>
      <div className='row row-cols-1 row-cols-lg-2 m-0 p-0 g-5'>
        {
          food03video.map((x, i) => {
            return (
              <>
                <div className=' col ' data-aos="zoom-in"
                  data-aos-delay="50"
                  data-aos-duration="1800" key={i}>
                  <div className='videoclass' >
                    <iframe width="100%" height="100%" src={x.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
      <Link to={"/eventpage"} className='nav-link volunteer p-2 pt-1  m-auto my-5 text-center fs-5 mb-2' ><span className='fw-bold fs-4'><MdKeyboardDoubleArrowLeft /></span> Bact To Home</Link>

    </div>
  )
}

export default FoodEvent03