import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdWifiCalling3 } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='footerbck_image selector'>
      <div className='container'>
        <div className='row justify-content-between m-0 p-0 py-3 g-5'>
          <div className='col-12 col-lg-3 col-md-10 col-sm-10 text-white' style={{ textAlign: "justify" }} >
            <div className='rounded-circle ps-0 ps-lg-1 mx-auto' style={{ height: "80px", width: "80px" }} data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1800">
              <img src={require("../assets/image/logos/social army.jpg")} alt="" className='img-fluid  text-center rounded-circle ' />
            </div>
            <div className='pera py-1 ' data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1800">Our <b>Social Unity Charitable Trust</b> is a non-profit, voluntary group where we endeavor to address social issues through our seven projects.</div>
            <div className='d-flex align-items-center w-100 justify-content-evenly' >
              <div data-aos="flip-left" data-aos-anchor-placement="top-bottom" data-aos-delay="50" data-aos-duration="1800">
                <Link to={"https://www.facebook.com/Socialarmy007/"} className='footericon fs-4 p-2 m-1 text-center d-flex align-items-center ms-0' target='blank'><FaFacebookF /></Link>
              </div>
              <div data-aos="flip-left" data-aos-anchor-placement="top-bottom" data-aos-delay="50" data-aos-duration="1800">
                <Link to={"https://www.instagram.com/socialarmytrust/"} className='footericon fs-4 p-2 m-1 text-center d-flex align-items-center' target='blank'><BsInstagram /></Link></div>
              <div data-aos="flip-left" data-aos-anchor-placement="top-bottom" data-aos-delay="50" data-aos-duration="1800">
                <Link to={"https://www.youtube.com/@socialarmysurat-ngo6258"} className='footericon fs-4 p-2 m-1 text-center d-flex align-items-center' target='blank'><IoLogoYoutube /></Link></div>
            </div>
          </div>
          <div className='col-10 col-lg-3 col-md-5 col-sm-6' data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1800">
            <div className="abouthead fs-2 fw-bold text-white">
              Our <span className="spncolor"> Projects</span>
            </div>
            <div className='text-white pt-1'>
              <Link to={"/CowEvent02"} className='nav-link linkitem pt-1'><span className='fs-6'><IoIosArrowDropright /></span> GauSeva</Link>
              <Link to={"/EnvirEvent01"} className='nav-link linkitem pt-1'><span className='fs-6'><IoIosArrowDropright /></span> Paryavaran Raksha</Link>
              <Link to={"/FoodEvent01"} className='nav-link linkitem pt-1'><span className='fs-6'><IoIosArrowDropright /></span> AnnSathi</Link>
              <Link to={"/BloodEvent01"} className='nav-link linkitem pt-1'><span className='fs-6'><IoIosArrowDropright /></span> Live Blood Bank</Link>
              <Link to={"/ShikshaEvent01"} className='nav-link linkitem pt-1'><span className='fs-6'><IoIosArrowDropright /></span> Shiksha</Link>
              <Link to={"/WomenEvent01"} className='nav-link linkitem pt-1'><span className='fs-6'><IoIosArrowDropright /></span> Mahila Shashiktikaran</Link>
              <Link to={"/DrugEvent01"} className='nav-link linkitem pt-1'><span className='fs-6'><IoIosArrowDropright /></span> Drug Bank</Link>
            </div>
          </div>

          <div className='col-12 col-lg-3 col-md-10 col-sm-10 order-md-last order-sm-last order-last' data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1800">
            <div className="abouthead fs-2 fw-bold text-white">
              Our <span className="spncolor"> Gallery</span>
            </div>
            <Link to={"/Eventpage"} className='row row-cols-2 row-cols-sm-2 row-cols-md-2 m-0 p-0 pt-3'>
              <div className='col p-0'>
                <div className='p-0 w-100 footerimagesize'>
                  <img src={require("../assets/image/HomePage/SaveFood.jpg")} alt="" className='img-fluid object-fit-cover w-100 h-100' />
                </div>
              </div>
              <div className='col p-0'>
                <div className='p-0 w-100 footerimagesize'>
                  <img src={require("../assets/image/HomePage/SaveCow.jpg")} alt="" className='img-fluid object-fit-cover w-100 h-100' />
                </div>
              </div>
              <div className='col p-0'>
                <div className='p-0 w-100 footerimagesize'>
                  <img src={require("../assets/image/HomePage/SaveEnviroment.jpg")} alt="" className='img-fluid object-fit-cover w-100 h-100' />
                </div>
              </div>
              <div className='col p-0 '>
                <div className='p-0 w-100 footerimagesize'>
                  <img src={require("../assets/image/HomePage/SaveBlood.jpg")} alt="" className='img-fluid object-fit-cover w-100 h-100' />
                </div>
              </div>
            </Link>
          </div>

          <div className='col-10 col-lg-3 col-md-5 col-sm-6' data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1800">
            <div className="abouthead fs-2 fw-bold text-white">
              Our <span className="spncolor"> Links</span>
            </div>
            <div className='text-white pera py-1'><span className='spncolor fs-3'><FaMapLocationDot /></span> Surat, Gujarat. </div>
            <div className='text-white pera py-1 d-block d-lg-flex align-content-center align-items-center'><span className='spncolor fs-3'><IoIosMail /></span> official@socialarmytrust.com</div>
            <div className='text-white pera py-1'><span className='spncolor fs-3'><MdWifiCalling3 /></span> (+91) 90676 65653</div>
          </div>
        </div>
      </div>
      <div className='text-white text-center copyright p-2'>© Copyright <b>Social Unity Charitable Trust</b>. All Rights Reserved</div>
    </div>
  )
}

export default Footer