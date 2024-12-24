import React from 'react'
import HOC from './HOC';
import { FaMailBulk } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaRegHandPointer } from "react-icons/fa6";
import Form from './Form';
import { useNavigate } from 'react-router-dom';
import HeartLine from './HeartLine';
import { IoMdContacts } from 'react-icons/io';
function Contactus() {
    let navigate = useNavigate()
    let joinus = () => {
        navigate("/volunteerpage")
    }
    return (
        <>
            <div className='home_backimage'>
                <div className="overlay3 w-100">
                    <div className="container">
                        <div className="row justify-content-center align-items-center vh-100 ">
                            <div className='container text-center text-white' data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" data-aos-duration="1800">
                                <p className='hometext'>Extend <span className='spncolor'>your hand</span>  to those<span className='spncolor'> in need.!</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid py-5 text-center'>
                <div data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1800" >
                    <img src={require("../assets/image/logos/social army.jpg")} alt="" style={{ borderradius: ' 77px', margin: "30px" }} className='img-fluid' height={"150px"} width={"150px"} />
                </div>
                <div className='abouththought fw-bold text-center pt-2 headcolor' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="50"
                    data-aos-duration="1500"><span className='fs-3'><IoMdContacts /></span> Contact Us </div>

                <div className='abouthead fs-1 fw-bold text-center py-1' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="50"
                    data-aos-duration="1500">Get In <span className='headcolor'>Touch </span> With <span className='headcolor'>Us </span> </div>
                <div className='pera col-12 col-sm-6 m-auto'style={{textAlign:'center'}} data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="50"
                    data-aos-duration="1500"> You have a question, idea, or simply want to be part of our mission. Contact us and let's work together to create a positive impact in the lives of those we serve.</div>

                <div className='row row-cols-1 row-cols-lg-3 text-center g-0 py-2'>
                    <div className='col-lg-4 col-md-4 col-sm-4 py-4 bg-white' data-aos="flip-left"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-delay="50"
                        data-aos-duration="1800">
                        <div>
                            <div className=' contacticon  d-flex align-items-center justify-content-center'><FaMailBulk /></div>
                            <div className='fw-bold fs-3'>Our Email</div>
                            <div className='pera display-6 fw-normal' style={{ textAlign: 'center' }}>official@socialarmytrust.com</div>

                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4 py-4 bg-white' >
                        <div data-aos="flip-left"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-delay="50"
                            data-aos-duration="1800">
                            <div className=' contacticon  d-flex align-items-center justify-content-center'><BiSolidPhoneCall /></div>
                            <div className='fw-bold fs-3'>Our Contacts</div>
                            <div className='pera' style={{ textAlign: 'center' }}>(+91) 90676 65653</div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4 py-4 bg-white' data-aos="flip-left"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-delay="50"
                        data-aos-duration="1800">
                        <div  >
                            <div className=' contacticon  d-flex align-items-center justify-content-center'><FaMapLocationDot /></div>
                            <div className='fw-bold fs-3'>Our Location</div>
                            <div className='pera' style={{textAlign:'center'}}>Surat , Gujarat.</div>
                        </div>

                    </div>
                </div>
            </div>
            <Form />
            <div className='becomeavol'>
                <div className="overlay3">
                    <div className='container py-5'>
                        <HeartLine />
                        <div className='row m-0 g-4 py-5'>

                            <div className='col-12 col-lg-9'>
                                <p className='hometext text-white' data-aos="zoom-in"
                                    data-aos-delay="50"
                                    data-aos-duration="1800">Become A <span className='spncolor'>Volunteer ?</span>
                                </p>
                            </div>

                            <div className='col-12 col-lg-3 d-flex align-content-center align-items-center justify-content-center'  >
                                <div className='volunteer p-2 pt-1 fw-medium w-100 text-center fs-5 mb-2' onClick={joinus}> <span className='fs-4'><FaRegHandPointer /></span> Join With Us <span className='fs-4'><FaRegHandPointer /></span> </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(Contactus)