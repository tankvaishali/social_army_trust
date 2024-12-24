import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa6'
import { IoLogoYoutube } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

function BoxHome() {
   let navigate = useNavigate()
   let readmore = () => {
      navigate("/volunteerpage")
   }
   let readmore2 = () => {
      navigate('/paymentpage')
   }
   return (
      <>
         <div className='container-lg boxhomepage '>
            <div className='row justify-content-center text-white py-5'>
               <div className='col-lg-4 col-md-4 col-sm-9 col-11 p-1 rounded-5' data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1500">
                  <div className='h-100 boxhome1 px-4' style={{ paddingBlock: '5rem' }}>
                     <p className='boxhead fw-bold' style={{ height: '20%' }}>GET INVOLVED</p>
                     <div className='pera' style={{ height: '67%' }}>Our NGO is a non-profit, voluntary group of individuals established to address various social issues such
                        as child welfare, poverty, and environmental concerns. Let's get involved as volunteers and provide the necessary help. </div>
                     <p className='pt-4 mt-auto text-center'><button className='px-2 p-1 donatebtn border-0 shadow fs-5 fw-medium' onClick={readmore}>Read More</button></p>
                  </div>
               </div>
               <div className='col-lg-4 col-md-4 col-sm-9 col-11 p-1 ' data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1500">
                  <div className='h-100 boxhome2 px-4' style={{ paddingBlock: '5rem' }}>
                     <p className='boxhead fw-bold' style={{ height: '20%' }}>JOIN WITH US</p>
                     <div className='pera' style={{ height: '67%' }}>Social media can connect you with established NGOs like ours. You can join us through social media
                        platforms. Play a role in our constructive cause at the NGO. Let's come together and join hands to make a difference.</div>
                     <div className='d-flex align-items-center justify-content-md-evenly w-100 pt-4 mt-auto' >
                        <div data-aos="flip-left" data-aos-anchor-placement="top-bottom" data-aos-delay="50" data-aos-duration="1800">
                           <Link to={"https://www.facebook.com/Socialarmy007/"} className='footericon fs-4 p-2 m-1 text-center d-flex align-items-center ms-0' target='blank'><FaFacebookF /></Link>
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-bottom" data-aos-delay="50" data-aos-duration="1800">
                           <Link to={"https://www.instagram.com/socialarmytrust/"} className='footericon fs-4 p-2 m-1 text-center d-flex align-items-center' target='blank'><BsInstagram /></Link>
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-bottom" data-aos-delay="50" data-aos-duration="1800">
                           <Link to={"https://www.youtube.com/@socialarmysurat-ngo6258"} className='footericon fs-4 p-2 m-1 text-center d-flex align-items-center' target='blank'><IoLogoYoutube /></Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='col-lg-4 col-md-4 col-sm-9 col-11  p-1 rounded-5' data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1500">
                  <div className='h-100 boxhome3 px-4' style={{ paddingBlock: '5rem' }}>
                     <p className='boxhead fw-bold' style={{ height: '20%' }}>DONATE NOW!</p>
                     <div className='pera' style={{ height: '67%' }}><b>The Social Unity Charitable Trust</b> is dedicated to supporting children in need with nourishment, clothing, and education. Your donations help sustain and expand our mission, transforming lives one contribution at a time.</div>
                     <p className='pt-4 mt-auto text-center'>
                        <button className='px-2 p-1 donatebtn border-0 shadow fs-5 fw-medium' onClick={readmore2}>Read More</button>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default BoxHome