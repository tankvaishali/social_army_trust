import React from 'react';
import { BsFeather } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
function BloodEvent03() {
  let blood03 = [


    {
      image: require('../assets/image/blood/blood121 3 (5).jpg'),
    },
    {
      image: require('../assets/image/blood/blood121 3 (2).jpg'),
    },
    {
      image: require('../assets/image/blood/blood121 3 (7).jpg'),
    },

    {
      image: require('../assets/image/blood/blood121 3 (3).jpg'),
    },

    {
      image: require('../assets/image/blood/blood121 3 (8).jpg'),
    },
    {
      image: require('../assets/image/blood/blood121 3 (6).jpg'),
    },

  ]
  return (
    <div className='container py-5 text-center'>
      <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
      <div className='abouthead fs-1 fw-bold'>The   <span className='headcolor'>Bond Of Blood</span>  Is Stronger Than   <span className='headcolor'> Anything.</span></div>
      <div className="pera pt-1">Every drop of donated blood can make a significant difference in the lives of those facing medical emergencies, undergoing surgeries, or battling life-threatening illnesses. The selfless act of blood donation not only saves lives but also fosters a sense of unity and compassion within society.</div>


      <div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Gallery</span> </div>
      <div className='row  m-0 p-0 g-5'>
        {
          blood03.map((x, i) => {
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

export default BloodEvent03