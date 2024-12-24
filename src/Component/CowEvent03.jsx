import React from 'react';
import { BsFeather } from "react-icons/bs";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';
function CowEvent03() {
  let cowdata01 = [
    {
      image: require('../assets/image/gaushala/cowblog03 (2).jpg'),
    },
    {
      image: require('../assets/image/gaushala/gauseva05.jpg'),
    },
    {
      image: require('../assets/image/gaushala/cowblog03 (7).jpg'),
    },
    {
      image: require('../assets/image/gaushala/cowblog03 (1).jpg'),
    },
    {
      image: require('../assets/image/gaushala/420791923_822896559641245_8649926829850463432_n (1).jpg'),
    },
    {
      image: require('../assets/image/gaushala/411878317_804688201462081_9169281713226486159_n.jpg'),
    },


  ]

  let cow01video = [
    {
      src: "https://www.youtube.com/embed/pq82ULWQDT8?si=Z25t025kKWJV0GR1"
    },
    {
      src: "https://www.youtube.com/embed/ykLjVkuxSAg?si=vG8pFZUBHeqHmu1P"

    },

  ]
  return (
    <>
      <div className='container py-5 text-center'>
        <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
        <div className='abouthead fs-1 fw-bold'>Protect    <span className='headcolor'>Cows,</span>  Protect  <span className='headcolor'> Our Culture.</span>  </div>
        <div className="pera pt-1">Our Social Army dedicated team works tirelessly to provide a safe haven for cows, ensuring they are treated with kindness and respect. Through awareness campaigns, educational programs, and community outreach, we aim to shed light on the ethical treatment of animals and the environmental impact of our choices.</div>


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

export default CowEvent03