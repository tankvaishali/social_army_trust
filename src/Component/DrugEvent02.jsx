import React from 'react';
import { BsFeather } from "react-icons/bs";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';
function DrugEvent02() {
  let drugData02 = [
    {
      image: require('../assets/image/drugbank/drug102 (1).jpg'),
    },
    {
      image: require('../assets/image/drugbank/drug102 (2).jpg'),
    },
    {
      image: require('../assets/image/drugbank/drug102 (3).jpg'),
    },


  ]

  return (
    <div className='container py-5 text-center'>
      <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
      <div className='abouthead fs-1 fw-bold'>Go    <span className='headcolor'> Healthy </span>  And Be<span className='headcolor'> Happy</span> </div>
      <div className="pera pt-1">Users can always consult healthcare professionals and authoritative sources for medical decisions and information and easily purchase it. We are provide medicine who can not capable to purchase it.</div>

      <div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Gallery</span> </div>
      <div className='row  m-0 p-0 g-5'>
        {
          drugData02.map((x, i) => {
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
export default DrugEvent02