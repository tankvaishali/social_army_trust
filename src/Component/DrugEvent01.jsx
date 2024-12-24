import React from 'react'
import { BsFeather } from "react-icons/bs";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';
function DrugEvent01() {
  let drugData01 = [
    {
      image: require('../assets/image/drugbank/drug101 (1).jpg'),
    },

    {
      image: require('../assets/image/drugbank/drug101 (6).jpg'),
    },
    {
      image: require('../assets/image/drugbank/drug101 (2).jpg'),
    },
    {
      image: require('../assets/image/drugbank/drug101 (5).jpg'),
    },
    {
      image: require('../assets/image/drugbank/drug101 (3).jpg'),
    },

    {
      image: require('../assets/image/drugbank/323106408_1503150913508024_8472148859237989934_n.jpg'),
    },

  ]

  return (
    <div className='container py-5 text-center'>
      <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
      <div className='abouthead fs-1 fw-bold'>Inspiring   <span className='headcolor'>Better Health</span> </div>
      <div className="pera pt-1">
        Our DrugBank is a comprehensive  database that provides information about drugs,  interactions, and targets. It serves as a valuable resource for researchers, healthcare professionals, and the general public who seek information about pharmaceuticals . We also provide common medicines to those who are unable to purchase them, ensuring accessibility for those who need them.</div>


      <div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Gallery</span> </div>
      <div className='row  m-0 p-0 g-5'>
        {
          drugData01.map((x, i) => {
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

export default DrugEvent01