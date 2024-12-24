import React from 'react';
import { BsFeather } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
function FoodEvent01() {
    let foodData01=[
        {
            image:require('../assets/image/annsathi/foodblog0001 (5).jpg'),
        },
     
      
      {
          image:require('../assets/image/annsathi/foodblog0001 (3).jpg'),
        },
        {
          image:require('../assets/image/annsathi/foodblog0001 (2).jpg'),
      },
      {
        image:require('../assets/image/annsathi/foodblog0001 (4).jpg'),
    },
    {
        image:require("../assets/image/annsathi/418209587_814444940486407_5756969780320246560_n.jpg")
    },
      {
        image:require('../assets/image/annsathi/foodblog0001 (1).jpg'),
    },
       
        {
          image:require('../assets/image/annsathi/foodblog0001 (6).jpg'),
      },
      {
        image:require('../assets/image/annsathi/foodblog0001 (8).jpg'),
    },
        {
          image:require('../assets/image/annsathi/401830344_783042030293365_3062549122870050911_n.jpg'),
      },
     
      ]
      
      let food01video=[
        {
          src:"https://www.youtube.com/embed/thVH-_XAd-k?si=dbWDxLCaewv3AjFO"
        },
        {
          src:"https://www.youtube.com/embed/vkIaqZzegjQ?si=dsGqOMN279nfy-dI"
        },
        {
          src:"https://www.youtube.com/embed/yp97zsDMzWY?si=Y7DPiPy9VCYKDjeG"
        },
        {
          src:"https://www.youtube.com/embed/beppWeFJ_cI?si=vtyhhZxEJou6x73W"
        },
      ]
      
  return (
    <>
       <div className='container py-5 text-center'>
    <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
    <div className='abouthead fs-1 fw-bold'>Wasting  <span className='headcolor'>  Food</span> Will Not Feed  <span className='headcolor'> The Hungry.</span></div>
<div className="pera pt-1">"Save the Food And Food Friends" envisions a world where every individual has access to nutritious meals, and food resources are utilized responsibly.  we can make significant strides in reducing food waste, alleviating hunger, and building a more sustainable and compassionate society. Through collective action and awareness, we work towards creating a future where no one goes to bed hungry, and food is cherished as a precious resource. </div>


<div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Gallery</span> </div>
<div className='row  m-0 p-0 g-5'>
{
  foodData01.map((x,i)=>{
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
  food01video.map((x,i)=>{
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

export default FoodEvent01