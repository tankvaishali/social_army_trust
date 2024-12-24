import React from 'react';
import { FaHandsHoldingChild } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { FaDonate } from "react-icons/fa";
import CountUp from 'react-countup';
import { TfiThought } from 'react-icons/tfi';

function AboutHome() {
    return (
        <>
            <div className='w-100 mt-5'>
                <div className='back1 text-light '>
                    <div className='overlay p-3'>
                        <div className="container-fluid ">
                            <div className="row justify-content-center align-items-center">
                                <div className='col-lg-8 col-md-10 col-sm-11 col-12' data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1800">
                                    <div className='container h-100'>
                                        <div className='abouththought fw-bold text-light'>
                                            <span className='fs-3 '><TfiThought className='text-light me-3' /></span>  About Thoughts
                                        </div>
                                        <div className='abouthead fw-bold display-6' >
                                            <span className=''>Give a little, Change a lot.!</span>
                                        </div>
                                        <div className='row justify-content-center align-items-center py-2 g-3'>
                                            <div className='col-7 col-lg-4 col-md-4'>
                                                <div className='h-100 border-light'>
                                                    <img src={require("../assets/image/HomePage/NoOneHas.jpg")} alt="" className='img-fluid border-5 border rounded-pill object-fil-cover' />
                                                </div>
                                            </div>
                                            <div className='col-12 col-lg-8 col-md-8'>
                                                <div className='row justify-content-evenly m-0 p-0'>
                                                    <div className='col-4 col-lg-4 col-md-4 col-sm-4 text-sm-center text-start fw-medium fs-5 abouthover'>
                                                        <div className='abouticon'><FaDonate className='bg-light p-2 rounded-2 ' /></div>
                                                        <div className=' fw-bold fs-5'>Give</div>
                                                        <p><CountUp end={2500} enableScrollSpy={true} separator="" /> +</p>
                                                        <hr style={{ opacity: "1.25" }} />
                                                    </div>
                                                    <div className='col-4 col-lg-4 col-md-4 col-sm-4  text-sm-center text-start fw-medium fs-5 abouthover'>
                                                        <div className='abouticon'><HiUserGroup className='bg-light p-2 rounded-2 ' /></div>
                                                        <div className=' fw-bold fs-5'>Union</div>
                                                        <p><CountUp end={200} enableScrollSpy={true} separator="" /> +</p>
                                                        <hr style={{ opacity: "1.25" }} />
                                                    </div>
                                                    <div className='col-4 col-lg-4 col-md-4 col-sm-4 text-sm-center text-start fw-medium fs-5 abouthover'>
                                                        <div className='abouticon'><FaHandsHoldingChild className='bg-light p-2 rounded-2 ' /></div>
                                                        <div className=' fw-bold fs-5'>Rescue</div>
                                                        <p><CountUp end={1500} enableScrollSpy={true} separator="" /> +</p>
                                                        <hr style={{ opacity: "1.25" }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr style={{ opacity: "1.25" }} />
                                        <div className='h-100' style={{ textAlign: 'justify' }}>
                                            Generosity is the cornerstone of abundance, revealing that in giving, we unlock not only the richness of our hearts
                                            but also the boundless potential of our own prosperity. It's a reminder that sharing, whether of material wealth,
                                            time, or kindness, is not a subtraction but a multiplication of blessings, echoing the timeless wisdom that true
                                            enrichment lies in our willingness to give.
                                        </div>
                                        <hr style={{ opacity: "1.25" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default AboutHome



