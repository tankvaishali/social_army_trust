import React from 'react';
import { BsFeather } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
function WomenEvent02() {
  let womendata02 = [
    {
      image: require('../assets/image/women/Women5.jpg'),
    },
    {
      image: require('../assets/image/women/womenevent 1 (1).jpg'),
    },
    {
      image: require('../assets/image/women/Women6.jpg'),
    },

  ]

  return (
    <div className='container py-5 text-center'>
      <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
      <div className='abouthead fs-1 fw-bold'> Empowerment, Equality, And  <span className='headcolor'> Inspiration</span> </div>
      <div className="pera pt-1">
        Every year on the 8th of March, International Women’s Day is celebrated worldwide
        with great fervor. This day holds special significance for women everywhere, as it is dedicated solely to
        them, separate from their roles as mothers, wives, daughters, or any other identity. It is a day carved out
        to honor and celebrate women's achievements and contributions. We encourage and support women, especially
        those in rural areas, and strive to protect their rights.
      </div>


      <div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Gallery</span> </div>
      <div className='row  m-0 p-0 g-5'>
        {
          womendata02.map((x, i) => {
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

export default WomenEvent02