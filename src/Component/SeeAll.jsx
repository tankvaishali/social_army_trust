import React from 'react'
import { BsFeather } from "react-icons/bs";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';
function SeeAll() {
  let eventdata001 = [

    { image: require('../assets/image/image_2024_03_12T05_52_59_404Z.png') },
    { image: require('../assets/image/shiksha/shiksha1 (3).png') },
    { image: require('../assets/image/Event/eventimage.jpg') },
    { image: require('../assets/image/shiksha/shiksha1 (5).png') },
    { image: require('../assets/image/shiksha/shiksha1 (9).png') },
    { image: require('../assets/image/shiksha/shiksha1 (8).png') },
    { image: require('../assets/image/244504133_1032993954168486_4426103500774595196_n.jpg') },
    { image: require('../assets/image/image_2024_03_12T05_44_51_978Z.png') },
    { image: require('../assets/image/image_2024_03_12T05_47_23_214Z.png') },
    { image: require('../assets/image/Event/SAI_2199.JPG') },
    { image: require('../assets/image/Event/SAI_2456.JPG') },
    { image: require('../assets/image/Event/SAI_2290.JPG') },
    { image: require('../assets/image/Event/SAI_2457.JPG') },
    { image: require('../assets/image/Event/SAI_2293.JPG') },
    { image: require('../assets/image/Event/SAI_3010.JPG') },



  ]
  let eventvideo = [
    { src: "https://www.youtube.com/embed/ZHH79pP4d6k?si=X4TdCD2fhk5MdmSQ" },
    { src: "https://www.youtube.com/embed/00EjM-S7JKI?si=M276uqzmX5PrrZTT" },
    { src: "https://www.youtube.com/embed/HHMaweZPZsc" },
    { src: "https://www.youtube.com/embed/beppWeFJ_cI" },
    { src: "https://www.youtube.com/embed/K5p6Zwe5QcI" }

  ]
  return (
    <>
      <div className='container py-5 text-center'>
        <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
        <div className='abouthead fs-1 fw-bold'>Our <span className='headcolor'> Events</span>     </div>
        <div className="pera pt-1">Organizing impactful events is an essential aspect of our NGO's mission to create positive change and address pressing societal issues. These events serve as platforms to raise awareness, mobilize communities, and garner support for our various initiatives. Whether it's organizing educational seminars, Bhagwat Geeta leason , or community outreach programs, each event is meticulously planned to maximize its impact.</div>


        <div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Gallery</span> </div>
        <div className='row  m-0 p-0 g-5'>
          {
            eventdata001.map((x, i) => {
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
        <div className='row justify-content-center row-cols-1 row-cols-lg-2 m-0 p-0 g-5'>
          {
            eventvideo.map((x, i) => {
              return (
                <>
                  <div className='col' data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1800" key={i}>
                    <div className='videoclass' >
                      <iframe width="100%" height="100%" src={x.src} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
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

export default SeeAll