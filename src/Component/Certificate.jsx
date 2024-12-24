import React from 'react';
import { BsFeather } from "react-icons/bs";
import { LiaCertificateSolid } from 'react-icons/lia';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { TbFileCertificate } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Certificate() {
    let cowdata02 = [
        {
            image: require("../assets/image/awards and certificates/Certificate_5916095.jpg")
        },
        {
            image: require("../assets/image/awards and certificates/Certificate_5916095.jpg")
        }
    ]

    return (
        <>
            <div className='container py-5 text-center'>
                <div className='fw-bold fs-2 mb-5' style={{ color: "#654433" }}> <span className='fs-3 '><LiaCertificateSolid className='me-2' /></span>Achievements</div>
                <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                    <div className='abouthead fs-1 fw-bold'>Certifying <span className='headcolor'> Compassionate Impact</span></div>
                    <div className="pera pt-1 headcolor" style={{ fontFamily: 'Verdana, Geneva, sans-serif', fontSize: '13px', fontWeight: 'bold', textAlign: "center" }}>
                        Our Goal to Acknowledge and Appreciate Every Act of Kindness
                    </div>
                </div>
                <div className='abouthead fs-1 fw-bold '><span className='headcolor'><TbFileCertificate className='me-2' /> Certificates</span> </div>
                <div className='row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3 m-0 p-0 g-5'>
                    {
                        cowdata02.map((x, i) => {
                            return (
                                <>
                                    <div className=' col ' key={i} data-aos="zoom-in"
                                        data-aos-delay="50"
                                        data-aos-duration="1800">
                                        <div className='eventimagezoom rounded-2 shadow' >
                                            <img src={x.image} alt="" className='img-fluid object-fit-cover h-100 w-57' />
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

export default Certificate