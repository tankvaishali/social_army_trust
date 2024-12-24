import React from 'react'
import { RiServiceFill } from 'react-icons/ri';
function Videohome() {
  return (
    <>
      <div className='py-5'>
        <div className='abouththought fw-bold text-center headcolor' data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1800"><span className='fs-3'><RiServiceFill className="me-2" /></span> What We Are Do </div>
        <div className="abouthead fs-1 fw-bold text-center shadow-lg p-5 m-3 bg-body-tertiary rounded text-center" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="50"
          data-aos-duration="1800">
          Act
          <span className="headcolor"> Now,</span> Save A Life
          <span className="headcolor"> Forever.</span>
        </div>
        <div className='w-80 mt-5 m-auto'>
          <iframe className='vh-100 w-100 p-0' src="https://www.youtube.com/embed/ZHH79pP4d6k" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

      </div>
    </>
  )
}

export default Videohome