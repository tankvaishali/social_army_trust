import React from 'react'
import { BsFeather } from "react-icons/bs";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';
function DrugEvent03() {
  let drugData03 = [

    {
      image: require('../assets/image/drugbank/drug 103 (2).jpg'),
    },
    {
      image: require('../assets/image/drugbank/drug 103 (3).jpg'),
    },
    {
      image: require('../assets/image/drugbank/drug 103 (1).jpg'),
    },
  ]

  return (
    <div className='container py-5 text-center'>
      <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
      <div className='abouthead fs-1 fw-bold'>Your  <span className='headcolor'> Health, </span>  Is The  <span className='headcolor'> Priority</span> </div>
      <div className="pera pt-1">When accessing drug information, it's essential to ensure that the source is reputable, up-to-date, and aligned with established medical guidelines and regulatory standards. Always consult with healthcare professionals for accurate diagnosis, treatment, and medication management through the our drug bank </div>

      <div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Gallery</span> </div>
      <div className='row  m-0 p-0 g-5'>
        {
          drugData03.map((x, i) => {
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

export default DrugEvent03