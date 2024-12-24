import React from 'react'
import HOC from './HOC'
import { SiPhonepe } from "react-icons/si";
import { SiGooglepay } from "react-icons/si";
import { SiPaytm } from "react-icons/si";
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaAmazonPay } from "react-icons/fa";
function Payment() {
  return (
    <>
      <div className='contact_image'>
        <div className="overlay3 w-100">
          <div className="container">
            <div className="row justify-content-center align-items-center vh-100 ">
              <div className='container text-center text-white' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-duration="1800">
                <p className='hometext'>We Are Also <span className='spncolor'>We're here, </span>standing strong<span className='spncolor'> for those who need us.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container py-5 my-3'>
        <div className="row m-0 g-5 mb-4">
          <div className="col-lg-4 col-12 ">
            <div className='h-100 shadow'>
              <img src={require("../assets/image/WhatsApp Image 2024-03-13 at 10.09.50_1a52ac9f.jpg")} width="100%" className="img-fluid shadow-lg" alt="" />

            </div>
          </div>
          <div className="col-lg-8 col-12 ">
            <div className='h-100 d-flex flex-column justify-content-between'>
              <h3 className="txt text-uppercase">PHONEPe</h3>
              <table className='table table-hover table-bordered'>

                <tbody>
                  <tr>
                    <th>UPI ID</th>
                    <td>9033403025@KOTAK</td>
                  </tr>

                </tbody>
              </table>

              <div className='py-2'>
                <h3 className="txt text-uppercase ">Online Banking</h3>
                <table className='table table-hover table-bordered'>

                  <tbody>
                    <tr>
                      <th>BANK NAME</th>
                      <td>Social Unity Charitable Trust</td>
                    </tr>
                    <tr>
                      <th>IFS CODE</th>
                      <td>KKBK0002872</td>
                    </tr>
                    <tr>
                      <th>A/C NO</th>
                      <td>7948341776</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='fs-1 d-flex'>
                <div className='me-3'><SiPhonepe /></div>
                <div className='mx-3 fw-bold'><SiGooglepay /></div>
                <div className='mx-3'><SiPaytm /></div>
                <div className='mx-3'><FaAmazonPay /></div>
              </div>

              <Link to={"/"} className='nav-link volunteer p-2 pt-1  text-center fs-5 mt-4' ><span className='fs-4 fw-bold'><MdKeyboardDoubleArrowLeft /></span>Back To Home</Link>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HOC(Payment)