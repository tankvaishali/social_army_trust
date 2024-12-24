import React from 'react';
import { BsFeather } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
function BloodEvent02() {
  let blood02 = [
    {
      image: require('../assets/image/blood/blood121 2 (10).jpg'),
    },

    {
      image: require('../assets/image/blood/blood121 2 (5).jpg'),
    },
    {
      image: require('../assets/image/blood/blood121 2 (6).jpg'),
    },
    {
      image: require('../assets/image/blood/blood121 2 (4).jpg'),
    },
    {
      image: require('../assets/image/blood/blood121 2 (3).jpg'),
    },
    {
      image: require('../assets/image/blood/blood121 2 (2).jpg'),
    },


    {
      image: require('../assets/image/blood/blood121 2 (8).jpg'),
    },
    {
      image: require('../assets/image/blood/blood121 2 (7).jpg'),
    },
    {
      image: require('../assets/image/blood/blood121 2 (9).jpg'),
    },
  ]
  return (
    <div className='container py-5 text-center'>
      <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
      <div className='abouthead fs-1 fw-bold'>Someone Is  Blood  <span className='headcolor'> Needing</span>  Blood  <span className='headcolor'> Somewhere.</span> </div>
      <div className="pera pt-1">Social Army Charitable Trust invite individuals from all walks of life to join us in this life-saving mission. Whether you are a first-time donor or a regular contributor, your willingness to donate blood plays a crucial role in creating a healthier and more resilient community. Together, as a community of blood donors, we can ensure that no one has to suffer due to a lack of blood supply, and everyone has the chance for a healthier and brighter future.</div>


      <div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Gallery</span> </div>
      <div className='row  m-0 p-0 g-5'>
        {
          blood02.map((x, i) => {
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

export default BloodEvent02