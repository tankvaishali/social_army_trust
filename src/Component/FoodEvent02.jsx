import React from 'react';
import { BsFeather } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
function FoodEvent02() {
    let foodData02=[
     
        {
            image:require('../assets/image/annsathi/foodblog0002 (2).jpg'),
          },
        {
            image:require('../assets/image/annsathi/food003.jpg'),
        },
      {
          image:require('../assets/image/annsathi/310631738_5532167223528917_663866424670814324_n.jpg'),
        },
        {
            image:require('../assets/image/annsathi/foodblog0002 (9).jpg'),
          },
        {
            image:require('../assets/image/annsathi/foodblog0002 (1).jpg'),
          },
          {
              image:require('../assets/image/annsathi/foodblog0002 (5).jpg'),
            },
      {
          image:require('../assets/image/annsathi/foodblog0002 (4).jpg'),
        },
      {
          image:require('../assets/image/annsathi/foodblog0002 (6).jpg'),
        },
  
      {
          image:require('../assets/image/annsathi/foodblog0001 (7).jpg'),
        },
   
   
  
     
      ]
      
      let food02video=[
        {
          src:"https://www.youtube.com/embed/B0RIevaXrF8?si=SIaxiURKegPRAanN"
        },
        {
          src:"https://www.youtube.com/embed/AuWoCaOUCbQ?si=7s6_iJUO82sWgulG"
        },
      
      ]
      
  return (
   <>
        <div className='container py-5 text-center'>
    <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
      
          <div className='abouthead fs-1 fw-bold'>Think Of <span className='headcolor'> The Poor </span> Before You Waste <span className='headcolor'>Your Food.</span>  </div>
<div className="pera pt-1">By working closely with  volunteers, donors, and local authorities, we can make a significant impact on the lives of these children. We believe that no child should ever have to go to bed hungry, and our efforts are geared towards building a future where every child has the opportunity to grow, learn, and thrive. </div>


<div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Gallery</span> </div>
<div className='row  m-0 p-0 g-5'>
{
  foodData02.map((x,i)=>{
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
<div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Videos</span> </div>
<div className='row row-cols-1 row-cols-lg-2 m-0 p-0 g-5'>
{
  food02video.map((x,i)=>{
    return(
      <>
              <div className=' col '  data-aos="zoom-in"
                  data-aos-delay="50"
                  data-aos-duration="1800" key={i}>
    <div className='videoclass' >
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
   </>
  )
}

export default FoodEvent02