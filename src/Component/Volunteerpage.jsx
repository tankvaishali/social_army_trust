import React, { useState } from 'react'
import HOC from './HOC'

function Volunteerpage() {
  const [errmsg, seterrmsg] = useState({});
  const [blankobj, setblankobj] = useState({});
  const [obj, setobj] = useState({});
  let getdata = (e) => {
    if (e.target.name === "name") {
      if (e.target.value?.length <= 0) {
        errmsg.name = "Your name is require !"
      } else {
        errmsg.name = ""
      }
    }
    if (e.target.name === "email") {
      if (e.target.value?.length <= 0) {
        errmsg.email = "Your email is require !"
      } else {
        errmsg.email = ""
      }
    }
    if (e.target.name === "phonenumber") {
      if (e.target.value.length === 10) {
        errmsg.phonenumber = ""
      } else if (e.target.value.length < 10) {
        errmsg.phonenumber = "number must be require 10 digits"
      } else if (e.target.value.length > 10) {
        errmsg.phonenumber = "number is not valid"
      }
    }
    if (e.target.name === "date") {
      if (e.target.value?.length <= 0) {
        errmsg.date = "Your email is require !"
      } else {
        errmsg.date = ""
      }
    }
    if (e.target.name === "address") {
      if (e.target.value?.length <= 0) {
        errmsg.address = "Your Address is require !"
      } else {
        errmsg.address = ""
      }
    }
    if (e.target.name === "textarea") {
      if (e.target.value?.length <= 0) {
        errmsg.textarea = "Your textarea is require !"
      } else {
        errmsg.textarea = ""
      }
    }
    if (e.target.name === "bloodgroup") {
      // Clear error message for blood group when an option is selected
      errmsg.bloodgroup = "";
    }
    if (e.target.name === "gender") {
      errmsg.gender = e.target.value.length <= 0 ? "Gender is required!" : "";
    }
    obj[e.target.name] = e.target.value;
    blankobj[e.target.name] = ""
    setobj({ ...obj })
    setblankobj({ ...blankobj })
    seterrmsg({ ...errmsg })
  }

  let savedata = () => {
    if (obj.name === "" || obj.name === undefined) {
      errmsg.name = "Your Name is require !"
    }
    if (obj.email === "" || obj.email === undefined) {
      errmsg.email = "Your Email is require !"
    }
    if (obj.phonenumber === "" || obj.phonenumber === undefined) {
      errmsg.phonenumber = "Your Phone Number is require !"
    }
    if (obj.date === "" || obj.date === undefined) {
      errmsg.date = "Date is reaquire!"
    }
    if (obj.address === "" || obj.address === undefined) {
      errmsg.address = "address is reaquire!"
    }
    if (obj.textarea === "" || obj.textarea === undefined) {
      errmsg.textarea = "textarea is reaquire!"
    }
    if (obj.gender === "" || obj.gender === undefined) {
      errmsg.gender = "gender is require"
    }
    if (obj.bloodgroup === undefined || obj.bloodgroup === "") {
      errmsg.bloodgroup = "Blood Group is required";
    }
    if (Object.values(errmsg).every((x) => x === "")) {
      setobj({ ...blankobj })
      // setobj({...obj})
      console.log(obj);
    }
    seterrmsg({ ...errmsg })
  }
  return (
    <>
      <div className='Volunteerpage_image'>
        <div className='container text-center text-white' data-aos="fade-up"
          data-aos-anchor-placement="top-bottom" data-aos-duration="1800">
          <p className='hometext'>Join <span className='spncolor'>With Us...</span>
          </p>
        </div>
      </div>

      <div className='volunteercolor py-5'>

        <div className='container'>

          <div className='text-center' data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1800" >
            <img src={require("../assets/image/logos/social army.jpg")} alt="" className='img-fluid rounded-circle ' height={"150px"} width={"150px"} />
          </div>

          <form>
            <div className='row justify-content-center align-items-center m-0 p-0' >
              <div className='col-12 col-lg-9 col-md-11'>
                <div className='row justify-content-center align-items-center m-0 p-0' >

                  <div className='col-12 col-sm-6' >
                    <label htmlFor='text' className='d-block fw-medium fs-5'> Full Name :</label>
                    <input type="text" name='name' placeholder='Enter Your Name' className='form-control' onChange={getdata} value={obj.name} />
                    <span className='text-danger d-block' style={{ fontSize: "14px", height: "17px" }} >{errmsg.name}</span>
                  </div>
                  <div className='col-12 col-sm-6'>
                    <label htmlFor='text' className='d-block fw-medium fs-5'>Phone Number :</label>
                    <input type="number" name='phonenumber' placeholder=' Enter Your PhoneNumber' className='form-control' onChange={getdata} value={obj.phonenumber} />
                    <span className='text-danger d-block' style={{ fontSize: "14px", height: "17px" }} >{errmsg.phonenumber}</span>
                  </div>
                  <div className='col-12 col-sm-6'>
                    <label htmlFor='text' className='d-block fw-medium fs-5'>Email :</label>
                    <input type="email" name='email' placeholder=' Enter Your Email' className='form-control' onChange={getdata} value={obj.email} />
                    <span className='text-danger d-block' style={{ fontSize: "14px", height: "17px" }} >{errmsg.email}</span>
                  </div>
                  <div className='col-12 col-sm-6'>
                    <label htmlFor='date' className='d-block fw-medium fs-5'>Birth Date :</label>
                    <input type="date" name='date' placeholder=' Enter Your BirthDate' className='form-control' onChange={getdata} value={obj.date} />
                    <span className='text-danger d-block' style={{ fontSize: "14px", height: "17px" }} >{errmsg.date}</span>
                  </div>
                  <div className='col-12'>
                    <label htmlFor='text' className='d-block fw-medium fs-5'>Address : </label>
                    <input type='text' name='address' placeholder='Enter Your Address' className='form-control' onChange={getdata} value={obj.address} />
                    <span className='text-danger d-block' style={{ fontSize: "14px", height: "17px" }} >{errmsg.address}</span>
                  </div>
                  <div className='col-12'>
                    <label htmlFor='text' className='d-block fw-medium fs-5'>Message : </label>
                    <textarea name="textarea" id="" cols="30" rows="5" className='form-control' placeholder=' Enter Your Message' onChange={getdata} value={obj.textarea} ></textarea>
                    <span className='text-danger d-block' style={{ fontSize: "14px", height: "17px" }} >{errmsg.textarea}</span>
                  </div>
                  <div className='col-12 d-lg-flex d-block align-content-center align-items-center'>
                    <label htmlFor='gender' className='form-label fw-medium fs-5 me-3'>Gender:</label>
                    <div className='form-check form-check-inline'>
                      <input type="radio" name='gender' value="male" className='form-check-input' onChange={getdata} checked={obj.gender === "male"} />
                      <label className='form-check-label me-3'>Male</label>
                    </div>
                    <div className='form-check form-check-inline'>
                      <input type="radio" name='gender' value="female" className='form-check-input' onChange={getdata} checked={obj.gender === "female"} />
                      <label className='form-check-label'>Female</label>
                    </div>
                  </div>
                  <span className='d-block text-danger mt-0' style={{ fontSize: "14px", height: "15px" }}>{errmsg?.gender}</span>
                  <div className='col-12'>
                    <label htmlFor='bloodgroup' className='form-label fw-medium fs-5'>Blood Group:</label>
                    <select className="form-select ms-2 p-1" id="bloodgroup" name="bloodgroup" value={obj?.bloodgroup} onChange={getdata}>
                      <option value="">Select Blood Group</option>
                      <option value="AB+ (Positive)">AB+ (Positive)</option>
                      <option value="AB- (Negative)">AB- (Negative)</option>
                      <option value="A+ (Positive)">A+ (Positive)</option>
                      <option value="A- (Negative)">A- (Negative)</option>
                      <option value="B+ (Positive)">B+ (Positive)</option>
                      <option value="B- (Negative)">B- (Negative)</option>
                      <option value="O+ (Positive)">O+ (Positive)</option>
                      <option value="O- (Negative)">O- (Negative)</option>
                      <option value="Not Known">Not Known</option>
                    </select>
                    <div className='text-danger' style={{ fontSize: "14px" }}>{errmsg.bloodgroup}</div>
                  </div>

                  <div className='col-12 mt-4'>
                    <div className='volunteer p-2 fw-medium w-100 text-center fs-5 my-2' onClick={savedata}>Submit</div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default HOC(Volunteerpage)