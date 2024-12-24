import React from "react";
import { FaHandsHelping } from "react-icons/fa";

function SaveHome() {
  return (
    <>
      <div className="Kindness">
        <div className="container-sm">
          <div className="abouththought fw-bold text-center headcolor" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="50" data-aos-duration="1800">
            <span className="fs-3 "><FaHandsHelping className="me-2" /></span> How We Can Help
          </div>
          <div className="abouthead fs-1 fw-bold text-center" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="50"
            data-aos-duration="1800">
            <div className="shadow-lg p-5 m-3 bg-body-tertiary rounded text-center">
              Let's A Save <span className="headcolor">Many Lifes</span>
              <div className="pera text-center py-2 container col-sm-10 col-12" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="50"
                data-aos-duration="1800">
                Life’s most persistent question is, what are you doing for others? Volunteerism is one of the most selfless acts that we can become involved in. Start where you are. Use what you have. Do what you can.
              </div>
            </div>
          </div>
          <div className="row m-0 p-0 py-3 g-4">
            <div className="row justify-content-center align-items-center  m-0 p-0 py-3 g-4">
              <div className="col-10 col-lg-3 col-md-6 col-sm-6 order-1 order-md-1 order-sm-1" data-aos="flip-left" data-aos-anchor-placement="top-bottom" data-aos-delay="50" data-aos-duration="1800">
                <div className=" saveimage rounded rounded-4" style={{ height: '215px' }}>
                  <img src={require("../assets/image/HomePage/SaveFood.jpg")} alt="" className="img-fluid h-100 object-fit-cover rounded rounded-4 w-100" />
                </div>
              </div>
              <div className="col-10 col-lg-3 col-md-6 col-sm-6 order-2 order-md-2 order-sm-2" data-aos="flip-left" data-aos-anchor-placement="top-bottom" data-aos-delay="50" data-aos-duration="1800">
                <div className="savedata  rounded rounded-4 text-center d-flex justify-content-center align-items-center align-content-center shadow" style={{ height: '215px' }}>
                  <div className="fs-6 fw-bold savecontent p-3 text-center"><p>"Savor every bite, honor its journey, waste not, nourish all." </p></div>
                </div>
              </div>
              <div className="col-10 col-lg-3 col-md-6 col-sm-6 order-3 order-lg-3 order-md-4 order-sm-4" data-aos="flip-left" data-aos-anchor-placement="top-bottom" data-aos-delay="50" data-aos-duration="1800">
                <div className=" saveimage rounded rounded-4 " style={{ height: '215px' }}>
                  <img src={require("../assets/image/HomePage/SaveCow.jpg")} alt="" className="img-fluid h-100 object-fit-cover rounded rounded-4 w-100" />
                </div>
              </div>
              <div className="col-10 col-lg-3 col-md-6 col-sm-6 order-4 order-lg-4 order-md-3 order-sm-3" data-aos="flip-left" data-aos-anchor-placement="top-bottom" data-aos-delay="50" data-aos-duration="1800">
                <div className="savedata rounded rounded-4 text-center d-flex justify-content-center align-items-center align-content-center shadow" style={{ height: '215px' }}>
                  <div className="fs-6 fw-bold savecontent p-3 text-center"><p>
                    "Respect all life, protect habitats, cherish creatures, advocate compassion."
                  </p></div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center align-items-center  m-0 p-0 py-3 g-4">
              <div className="col-10 col-lg-3 col-md-6 col-sm-6 order-2 order-lg-1 order-md-2 order-sm-2" data-aos="flip-left" data-aos-anchor-placement="top-bottom" data-aos-delay="50" data-aos-duration="1800">
                <div className="savedata rounded rounded-4 text-center d-flex justify-content-center align-items-center align-content-center shadow" style={{ height: '215px' }}>
                  <div className="fs-6 fw-bold savecontent p-3 text-center"><p>"Protect the environment: our home, our future, our responsibility." </p></div>
                </div>
              </div>
              <div className="col-10 col-lg-3 col-md-6 col-sm-6 order-1 order-lg-2 order-md-1 order-sm-1" data-aos="flip-left" data-aos-anchor-placement="top-bottom" data-aos-delay="50" data-aos-duration="1800">
                <div className=" saveimage rounded rounded-4 " style={{ height: '215px' }}>
                  <img src={require("../assets/image/HomePage/SaveEnviroment.jpg")} alt="" className="img-fluid h-100 object-fit-cover rounded rounded-4 w-100" />
                </div>
              </div>
              <div className="col-10 col-lg-3 col-md-6 col-sm-6 order-4 order-md-3 order-sm-3" data-aos="flip-left" data-aos-anchor-placement="top-bottom" data-aos-delay="50" data-aos-duration="1800">            <div className="savedata rounded rounded-4 text-center d-flex justify-content-center align-items-center align-content-center shadow" style={{ height: '215px' }}>
                <div className="fs-6 fw-bold savecontent p-3 text-center"><p>
                  "Give blood: save lives, spread hope, be a hero." </p></div>
              </div>
              </div>
              <div className="col-10 col-lg-3 col-md-6 col-sm-6 order-3 order-md-4 order-sm-4" data-aos="flip-left" data-aos-anchor-placement="top-bottom" data-aos-delay="50" data-aos-duration="1800">            <div className=" saveimage rounded rounded-4" style={{ height: '215px' }}>
                <img src={require("../assets/image/HomePage/SaveBlood.jpg")} alt="" className="img-fluid h-100 object-fit-cover rounded rounded-4 w-100" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default SaveHome;
