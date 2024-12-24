import React from 'react'
import { BsFeather } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
function WomenEvent03() {
  let womendata03 = [
    {
      image: require('../assets/image/women/Women7.jpg'),
    },
    {
      image: require('../assets/image/women/2021-03-23-dscn1073-ashakiranorg.jpg'),
    },
    {
      image: require('../assets/image/women/Women8.jpg'),
    },

  ]

  return (
    <div className='container py-5 text-center'>
      <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
      <div className='abouthead fs-1 fw-bold'>Break    <span className='headcolor'> Discrimination,</span>  Build  <span className='headcolor'> Unity</span> </div>
      <div className="pera pt-1">
        Empowering women in rural areas and addressing the specific challenges faced by elderly
        women are crucial aspects of social development. In rural settings, women often encounter barriers to education,
        healthcare, economic opportunities, and decision-making. Empowering them involves implementing comprehensive
        strategies to enhance their well-being and autonomy. Additionally, older women in rural areas may face unique
        challenges such as limited access to healthcare and social isolation. We strive to provide safety and protection
        for them.
      </div>


      <div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Gallery</span> </div>
      <div className='row  m-0 p-0 g-5'>
        {
          womendata03.map((x, i) => {
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

export default WomenEvent03