import React from 'react';
import { BsFeather } from "react-icons/bs";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';
function CowEvent02() {
  let cowdata02 = [
    {
      image: require("../assets/image/gaushala/cowblog02 (2).jpg")
    },
    {
      image: require("../assets/image/gaushala/cowblog02 (4).jpg")
    },
    {
      image: require("../assets/image/gaushala/cowblog02 (7).jpg")
    },
    {
      image: require("../assets/image/gaushala/cowblog02 (5).jpg")
    },
    {
      image: require("../assets/image/gaushala/cowblog02 (6).jpg")
    },
    {
      image: require("../assets/image/gaushala/cowblog02 (8).jpg")
    },
  ]

  let cow01video = [
    {
      src: "https://www.youtube.com/embed/EAqh2G0QUrw?si=Dyh0uhfOekl8nVPY"
    },
    {
      src: "https://www.youtube.com/embed/ySSpTF5KGlA?si=lKVSqhzeJ6HRkA8U"
    },


  ]
  return (
    <>
      <div className='container py-5 text-center'>
        <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
        <div className='abouthead fs-1 fw-bold'> Compassion For  <span className='headcolor'> Cows, </span>  Compassion For  <span className='headcolor'>  Life</span> </div>
        <div className="pera pt-1">At our Social Army Charitable Trust, "Save the Cow " our mission is rooted in compassion, environmental sustainability, and the well-being of all living beings. Our primary focus is on rescuing and protecting cows and other animals from cruelty, neglect, and exploitation. We are driven by the belief that every sentient being deserves a life free from suffering and harm.   </div>


        <div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Gallery</span> </div>
        <div className='row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 m-0 p-0 g-5'>
          {
            cowdata02.map((x, i) => {
              return (
                <>
                  <div className=' col ' key={i} data-aos="zoom-in"
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
        <div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Videos</span> </div>
        <div className='row row-cols-1 row-cols-lg-2 m-0 p-0 g-5'>
          {
            cow01video.map((x, i) => {
              return (
                <>
                  <div className=' col ' data-aos="zoom-in"
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

export default CowEvent02