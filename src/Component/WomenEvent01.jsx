import React from 'react';
import { BsFeather } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
function WomenEvent01() {
  let womendata01 = [
    {
      image: require('../assets/image/women/Womenempower4.jpg'),
    },
    {
      image: require('../assets/image/women/Womenempower3.jpg'),
    },
    {
      image: require('../assets/image/women/Womenempower5.jpg'),
    },

  ]

  return (
    <div className='container py-5 text-center'>
      <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
      <div className='abouthead fs-1 fw-bold'>Never Restrict <span className='headcolor'> A Woman</span>  </div>
      <div className="pera pt-1">
        Women's empowerment refers to the process of providing women with the resources, opportunities, and tools
        needed to participate fully in all aspects of life. This includes economic, social, and political spheres,
        with the ultimate goal of ensuring gender equality. Empowering women is not only a matter of justice and
        basic rights but also a key driver for sustainable development and societal progress.
      </div>
      <div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Gallery</span> </div>
      <div className='row  m-0 p-0 g-5'>
        {
          womendata01.map((x, i) => {
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

export default WomenEvent01