import React from 'react';
import { BsFeather } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
function EnvirEvent01() {
  let envData01 = [
    {
      image: require('../assets/image/environment/envir111 (2).jpg'),
    },
    {
      image: require('../assets/image/environment/envir111 (1).jpg'),
    },
    {
      image: require('../assets/image/environment/envir111 (3).jpg'),
    },
    {
      image: require('../assets/image/environment/envir111 (6).jpg'),
    },
    {
      image: require('../assets/image/environment/envir111 (4).jpg'),
    },
    {
      image: require('../assets/image/environment/envir111 (5).jpg'),
    },

  ]

  return (
    <div className='container py-5 text-center'>
      <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
      <div className='abouthead fs-1 fw-bold'>Go     <span className='headcolor'> Green</span> Breathe  <span className='headcolor'>Clean  </span></div>
      <div className="pera pt-1">At our NGO, "Save The Environment," our mission is centered around preserving and protecting the delicate balance of our planet for present and future generations. We recognize the urgent need to address environmental challenges and work towards sustainable solutions. Our efforts are multifaceted, encompassing various initiatives aimed at mitigating climate change, conserving natural resources, and fostering a greener, healthier world. </div>


      <div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Gallery</span> </div>
      <div className='row  m-0 p-0 g-5'>
        {
          envData01.map((x, i) => {
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
      <Link to={"/eventpage"} className='nav-link volunteer p-2 pt-1  m-auto my-5 text-center fs-5 mb-2' ><span className='fw-bold fs-4'><MdKeyboardDoubleArrowLeft /></span> Bact To Home</Link>

    </div>
  )
}

export default EnvirEvent01