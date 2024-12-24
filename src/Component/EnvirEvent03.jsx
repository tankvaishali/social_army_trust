import React from 'react';
import { BsFeather } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
function EnvirEvent03() {
  let envData03 = [
    {
      image: require('../assets/image/environment/envir333 (6).jpg'),
    },

    {
      image: require('../assets/image/environment/envir333 (2).jpg'),
    },
    {
      image: require('../assets/image/environment/envir333 (3).jpg'),
    },
    {
      image: require('../assets/image/environment/envir333 (7).jpg'),
    },
    {
      image: require('../assets/image/environment/envir333 (1).jpg'),
    },
    {
      image: require('../assets/image/environment/envir333 (5).jpg'),
    },

  ]

  return (
    <div className='container py-5 text-center'>
      <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
      <div className='abouthead fs-1 fw-bold'>Save  <span className='headcolor'> Earth</span>  Save  <span className='headcolor'> Natural Resource</span></div>
      <div className="pera pt-1">Through tree-planting campaigns, waste reduction programs, and environmental education, Social Army strives to empower communities to take an active role in environmental conservation. Our goal is to raise awareness about the impact of human activities on the planet and promote eco-friendly practices that contribute to a more sustainable and resilient environment. Tree-planting helps us create a clean and pollution-free environment.</div>


      <div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Gallery</span> </div>
      <div className='row  m-0 p-0 g-5'>
        {
          envData03.map((x, i) => {
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

export default EnvirEvent03