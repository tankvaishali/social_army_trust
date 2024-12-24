import React from 'react';
import { BsFeather } from "react-icons/bs";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';
function ShikshaEvent02() {
  let shikshaData01=[
 
 
    {
        image:require('../assets/image/shiksha/shiksha 2 (4).jpg'),
    },
    {
        image:require('../assets/image/shiksha/shiksha 2 (3).jpg'),
    },
    {
      image:require('../assets/image/shiksha/shiksha 2 (6).jpg'),
  },

  
  {
    image:require('../assets/image/shiksha/shiksha 2 (8).jpg'),
  },
  {
      image:require('../assets/image/shiksha/shiksha 2 (5).jpg'),
  },
  {
    image:require('../assets/image/shiksha/shiksha 2 (10).jpg'),
},

   
 

  ]
  let shiksha02video=[
{
  src:"https://www.youtube.com/embed/l_O6iOPe6SQ?si=2NT3h7dg_Qfxzi4h"
}
  ]
  return (
    <div className='container py-5 text-center'>
    <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
          <div className='abouthead fs-1 fw-bold'>Thousant   <span className='headcolor'> Problems</span>  Mostly Solution Is  <span className='headcolor'> Bhagwat Geeta.</span>  </div>
<div className="pera pt-1">Once you have a solid understanding, share the teachings of the Bhagavad Gita with others. We are  organize study groups, workshops, or discussions. Teaching others reinforces your own understanding and contributes to the dissemination of this timeless wisdom.</div>


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
{/* <Link to={"/eventpage"} className='nav-link volunteer p-2 pt-1 fw-medium m-auto my-5 text-center fs-5 mb-2' ><span className='fw-bold'><MdKeyboardDoubleArrowLeft /></span> Bact To Home</Link> */}
<div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Videos</span> </div>
<div className=' text-center m-0 p-0'>
{
  shiksha02video.map((x,i)=>{
    return(
      <>
              <div className='py-3'  data-aos="zoom-in"
                  data-aos-delay="50"
                  data-aos-duration="1800" key={i}>
    <div className='videoclass m-auto' >
    <iframe width="100%" height="100%" src={x.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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

export default ShikshaEvent02