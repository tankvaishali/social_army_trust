import React from 'react';
import { BsFeather } from "react-icons/bs";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';
function ShikshaEvent03() {
  let shikshaData01 = [
    {
      image: require('../assets/image/shiksha/shiksha 3 (1).jpg'),
    },
    {
      image: require('../assets/image/shiksha/shiksha 3 (2).jpg'),
    },
    {
      image: require('../assets/image/shiksha/shiksha 3 (3).jpg'),
    },
    {
      image: require('../assets/image/shiksha/415011566_811695810761320_5129452362399419489_n.jpg'),
    },
    {
      image: require('../assets/image/shiksha/414631959_807665021164399_3300038725841384477_n.jpg'),
    },
    {
      image: require('../assets/image/shiksha/shiksha 2 (1).jpg'),
    },



  ]
  let shiksha02video = [
    {
      src: "https://www.youtube.com/embed/lY2ji5Y2XeQ?si=QBFTwGML5YNEnPAX"
    }
  ]
  return (
    <div className='container py-5 text-center'>
      <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
      <div className='abouthead fs-1 fw-bold'>There is nothing lost or wasted in this life by <span className='headcolor'>- Bhagwat Geeta.</span>   </div>
      <div className="pera pt-1">The Gita emphasizes the practice of meditation as a means to achieve self-realization. Incorporate meditation into your daily routine to deepen your understanding and experience the teachings on a profound level. We read, learn, and teach the Bhagavad Gita.</div>


      <div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Gallery</span> </div>
      <div className='row  m-0 p-0 g-5'>
        {
          shikshaData01.map((x, i) => {
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
      {/* <Link to={"/eventpage"} className='nav-link volunteer p-2 pt-1 fw-medium m-auto my-5 text-center fs-5 mb-2' ><span className='fw-bold'><MdKeyboardDoubleArrowLeft /></span> Bact To Home</Link> */}
      <div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Videos</span> </div>
      <div className=' text-center m-0 p-0'>
        {
          shiksha02video.map((x, i) => {
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

export default ShikshaEvent03