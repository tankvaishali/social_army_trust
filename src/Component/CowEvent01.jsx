import React from 'react'
import { BsFeather } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
function CowEvent01() {

  let cowdata01 = [
    {
      image: require('../assets/image/gaushala/gauseva02.jpg'),
    },
    {
      image: require('../assets/image/gaushala/cowblog01 (1).jpg')
    },
    {
      image: require('../assets/image/gaushala/cowblog01 (8).jpg')
    },
    {
      image: require('../assets/image/gaushala/cowblog01 (2).jpg')
    },
    {
      image: require('../assets/image/gaushala/cowblog01 (3).jpg')
    },
    {
      image: require('../assets/image/gaushala/cowblog01 (4).jpg')
    },
    {
      image: require('../assets/image/gaushala/cowblog01 (5).jpg')
    },
    {
      image: require('../assets/image/gaushala/cowblog01 (6).jpg')
    },
    {
      image: require('../assets/image/gaushala/cowblog01 (7).jpg')
    },
  ]

  let cow01video = [
    {
      src: "https://www.youtube.com/embed/kfBgGrEp2rs?si=Nei7RqeVo1wr_J8x"
    },
    {
      src: "https://www.youtube.com/embed/wDPTKsPExgM?si=mHF7QtZ2r2va0_vr"
    },
  ]

  return (
    <>
      <div className='container py-5 text-center'>
        <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
        <div className='abouthead fs-2 fw-bold'>Cow Is <span className='headcolor'> Our Mother,</span>  Let's  <span className='headcolor'> Save And Honor Her</span> Like No Other. </div>
        <div className="pera pt-1">Through collaborative efforts and support from compassionate individuals, "Save the Cow and Animals" envisions a world where every being is valued, protected, and coexists in harmony with nature. Together,Social Army Charitable Trust are committed to building a future where the welfare of cows and animals is safeguarded, and the principles of compassion and sustainability guide our actions. </div>


        <div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Gallery</span> </div>
        <div className='row  m-0 p-0 g-5'>
          {
            cowdata01.map((x, i) => {
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

export default CowEvent01