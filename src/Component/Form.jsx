import React from "react";
import { AiTwotoneMessage } from "react-icons/ai";

function Form() {
  const handleSubmit = (e) => {
    const emailInput = e.target.elements.email.value.trim();
    const allowedDomains = ["gmail.com", "yahoo.com"];

    const emailDomain = emailInput.split("@")[1];
    if (!allowedDomains.includes(emailDomain)) {
      alert("please enter your valid email.");
      e.preventDefault(); // Stop form submission
    }
    document.getElementById('formid').reset();

  };

  return (
    <div className="formclass py-5">
      <div className="container py-5">
        <div className="row align-items-cn py-5 g-1 g-lg-5 m-0">
          <div className="col-12 col-lg-6">
            <div
              className="h-100"
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1800"
            >
              <iframe
                title="MAP"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.52982230402!2d72.82229625000001!3d21.15920015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1707367688482!5m2!1sen!2sin"
                width="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-100"
              ></iframe>
            </div>
          </div>
          <div
            className="col-12 col-lg-6"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1800"
          >
            <div className="shadow-lg bg-body-tertiary p-3 mb-5 h-100 rounded-0">
              <div className="h-100">
                <div className="abouththought fw-bold pt-2 headcolor">
                  <span className="fs-2">
                    <AiTwotoneMessage />
                  </span>{" "}
                  Drop the message{" "}
                </div>
                <form
                  target="_blank"
                  action="https://formsubmit.co/official.socialarmytrust@gmail.com"
                  method="POST"
                  id="formid"
                  onSubmit={handleSubmit}
                >
                  <div className="row row-cols-1 row-cols-lg-2 w-100 m-0 p-0">
                    <div className="col py-2">
                      <input
                        type="text"
                        name="name"
                        placeholder=" Enter Your Name"
                        className="form-control border-bottom rounded-0 border-1 border-dark"
                        style={{ boxShadow: "none", background: "none" }}
                        required
                      />
                    </div>
                    <div className="col py-2">
                      <input
                        type="email"
                        name="email"
                        placeholder=" Enter Your Email"
                        pattern="^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$"
                        title="Only gmail.com and yahoo.com emails are allowed"
                        className="form-control border-bottom rounded-0 border-1 border-dark"
                        style={{ boxShadow: "none", background: "none" }}
                        required
                      />

                    </div>
                    <div className="col py-2">
                      <input
                        type="tel"
                        name="phonenumber"
                        placeholder=" Enter Your Phone Number"
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit phone number"
                        className="form-control border-bottom rounded-0 border-1 border-dark"
                        style={{ boxShadow: "none", background: "none" }}
                        required
                      />
                    </div>
                    <div className="col py-2">
                      <input
                        type="text"
                        name="subject"
                        placeholder=" Enter Your Subject"
                        className="form-control border-bottom rounded-0 border-1 border-dark"
                        style={{ boxShadow: "none", background: "none" }}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 p-2 m-1 form-group">
                    <textarea
                      name="message"
                      cols="30"
                      rows="10"
                      className="form-control border-bottom rounded-0 border-1 border-dark"
                      style={{ boxShadow: "none", background: "none" }}
                      placeholder=" Enter Your Message"
                      required
                    ></textarea>
                  </div>
                  <div className="m-2 mb-1 p-1">
                    <button
                      type="submit"
                      className="btn volunteer p-2 fw-medium w-100 text-center fs-5 btn-block"
                    >
                      Submit Form
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
