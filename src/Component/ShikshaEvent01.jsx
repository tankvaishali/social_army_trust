import React from 'react';
import { BsFeather } from "react-icons/bs";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';
function ShikshaEvent01(){
    let shikshaData01=[
        {
            image:require('../assets/image/shiksha/shiksha1 (3).png'),
        },
        {
            image:require('../assets/image/shiksha/shiksha100 (1).png'),
        },
        {
            image:require('../assets/image/shiksha/shiksha1 (4).png'),
        },
        {
            image:require('../assets/image/shiksha/shiksha1 (5).png'),
        },
        {
            image:require('../assets/image/shiksha/shiksha1 (9).png'),
        },
        {
            image:require('../assets/image/shiksha/shiksha1 (8).png'),
        },
        {
            image:require('../assets/image/shiksha/shiksha1 (7).png'),
        },
        {
            image:require('../assets/image/shiksha/shiksha1 (6).png'),
        },
        {
            image:require('../assets/image/shiksha/shiksha1 (2).png'),
        },
 
      ]
  return (
    <div className='container py-5 text-center'>
    <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
          <div className='abouthead fs-1 fw-bold'>Learn And Teach <span className='headcolor'> Good Thinks </span>  </div>
<div className="pera pt-1">Learning and teaching the Bhagavad Gita is a transformative journey that delves into the profound wisdom of Hindu philosophy. The Bhagavad Gita, often referred to as the Gita, is a 700-verse scripture that is part of the Indian epic Mahabharata. It is presented in the form of a dialogue between Prince Arjuna and the god Krishna, who serves as his charioteer.</div>


<div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Gallery</span> </div>
<div className='row  m-0 p-0 g-5'>
{
  shikshaData01.map((x,i)=>{
    return(
      <>
        <div className=' col-12 col-md-6 col-lg-4' key={i} data-aos="zoom-in"
                  data-aos-delay="50"
                  data-aos-duration="1800">
    <div className='eventimagezoom rounded-2 shadow' >
      <img src={x.image} alt="" className='img-fluid object-fit-cover h-100 w-100'/>
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

export default ShikshaEvent01