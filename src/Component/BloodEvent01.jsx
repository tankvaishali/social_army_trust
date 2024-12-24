import React from 'react';
import { BsFeather } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
function BloodEvent01() {
  let blood01 = [
    {
      image: require('../assets/image/blood/blood121 (8).jpg'),
    },

    {
      image: require('../assets/image/blood/blood-1.jpg'),
    },
    {
      image: require('../assets/image/blood/blood121 (4).jpg'),
    },
    {
      image: require('../assets/image/blood/blood121 (2).jpg'),
    },
    {
      image: require('../assets/image/blood/blood121 (5).jpg'),
    },

    {
      image: require('../assets/image/blood/blood121 (9).jpg'),
    },
    {
      image: require('../assets/image/blood/blood121 (6).jpg'),
    },
    {
      image: require('../assets/image/blood/blood121 (7).jpg'),
    },


    {
      image: require('../assets/image/blood/blood121 (10).jpg'),
    },
  ]
  let bloodvideo01 = [
    {
      src: "https://www.youtube.com/embed/Tkdt519U1S4?si=enk22Zu99janGyKI"
    }
  ]
  return (
    <div className='container py-5 text-center'>
      <div className='abouththought fw-bold headcolor'> <span className='fs-3 '><BsFeather /></span>Our Blogs</div>
      <div className='abouthead fs-1 fw-bold'>Blood    <span className='headcolor'> Owners</span>  Should Be <span className='headcolor'> Blood Donors.</span> </div>
      <div className="pera pt-1">At "Live Blood Bank," we are committed to promoting and facilitating blood donation to meet the constant demand for blood in hospitals and medical facilities. Our organization conducts regular blood drives, awareness campaigns, and community outreach programs to educate people about the importance of blood donation and encourage voluntary participation. </div>


      <div className='abouthead fs-1 fw-bold pt-5'>Our <span className='headcolor'> Gallery</span> </div>
      <div className='row  m-0 p-0 g-5'>
        {
          blood01.map((x, i) => {
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
          bloodvideo01.map((x, i) => {
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

export default BloodEvent01