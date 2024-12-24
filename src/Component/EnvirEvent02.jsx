import React from 'react'
import { BsFeather } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
function EnvirEvent02() {
  let envData02 = [
    {
      image: require('../assets/image/environment/envir222 (4).jpg'),
    },
    {
      image: require('../assets/image/environment/env66.jpg'),
    },
    {
      image: require('../assets/image/environment/envir222 (5).jpg'),
    },
    {
      image: require('../assets/image/environment/envir222 (3).jpg'),
    },
    {
      image: require('../assets/image/environment/356357401_709806554283580_5455918294927817262_n.jpg'),
    },
    {
      image: require('../assets/image/environment/envir222 (6).jpg'),
    },
  ]

  let env02video = [
    {
      src: "https://www.youtube.com/embed/abVlZE3Wqok?si=Uzxm_V5YgI15rTn8"
    }
  ]

  return (
    <div className='container py-5 text-center'>
      <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
      <div className='abouthead fs-1 fw-bold'>Keep environment <span className='headcolor'> safe</span> and  <span className='headcolor'>  pollution free</span> </div>
      <div className="pera pt-1">"Save The Environment" envisions a future where every individual recognizes their role as a custodian of the Earth. Together, we are dedicated to implementing positive changes that safeguard biodiversity, reduce pollution, and ensure a thriving planet for generations to come. Through our collective actions, we believe in building a world where harmony between humanity and nature is a guiding principle, and the environment is cherished and protected.</div>


      <div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Gallery</span> </div>
      <div className='row  m-0 p-0 g-5'>
        {
          envData02.map((x, i) => {
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

      <div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Videos</span> </div>
      <div className=' text-center m-0 p-0'>
        {
          env02video.map((x, i) => {
            return (
              <>
                <div className='py-3' data-aos="zoom-in"
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

export default EnvirEvent02