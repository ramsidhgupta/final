import React, {useState, Suspense} from "react";
import axios from "axios";
import useInView from "./useInView";
import Placeholder from "./PlaceHolder";



import { Icon } from "@iconify/react";
// import { useInView } from "react-intersection-observer";
import "reactjs-popup/dist/index.css";

import HeadSection from "./HeadSection";
import contactUs from './assets/contact-us.jpg';
import Fireworks from "./ParticlesComponent";
import ConfirmPopup from "./ConfirmPopup";
import { waveform } from "ldrs";


const LazyTextEmbedded = React.lazy(() => import("./TextEmbedded"));
waveform.register();


const ContactUs = () => {
  const inView = useInView();

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);


  waveform.register();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname:"",
    email: "",
    location:"",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setIsDataLoading(true);
      const response = await axios.post(
        "https://homepage-12.onrender.com/api/submitFormEnq",
        {
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          location: formData.location,
          message: formData.message,
        }
      );
      console.log(
        "Form submitted successfully and also, ",
        response.data.message
      );
      
      setIsPopupVisible(true);
      
      setFormData({
        firstname: "",
        lastname:"",
        email: "",
        location:"",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsDataLoading(false);
    }
  };
  const closePopup = () => {
    setIsPopupVisible(false);
  };


  // const [ref1, inView1] = useInView({threshold:0.8});
  // const [ref2, inView2] = useInView({threshold:0.8});
  // const [ref3, inView3] = useInView({threshold:0.8});

  return (
    <>
    {isDataLoading && (
        <div className="loader-container">
          <div className="blur-background-loader">
            <div className="loader">
              <l-waveform
                size="146"
                stroke="20"
                speed="1"
                color="#1268b3"
              ></l-waveform>
              <h3>Please wait.........</h3>
            </div>
          </div>
        </div>
      )}
      <section className="wrapper bg-soft-primary">
        <HeadSection
          header1="Contact Us"
          header2="Let's make something great together."
          imageUrl={contactUs}
        />
      </section>
      <section className="wrapper bg-dark">
      <div className="container pb-md-16 py-14 py-md-21">
      <Fireworks/>
        <div className="row">
        <Placeholder id="placeholder">
              {inView && (
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyTextEmbedded />
                </Suspense>
              )}
            </Placeholder>
          <div className="col-xl-12 mt-5">
            <div className="row gy-10 gx-lg-8 gx-xl-12">
            {/* <Fireworks/> */}
              <div className="col-lg-6">
                <div className="card bg-info text-center mt-md-10 mt-5">
                  <div
                    // ref={ref1}
                    className="card-body counter-wrapper text-center"
                  >
                    <div className="d-flex flex-row justify-content-center">
                      {/* <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1">
                          {" "}
                          <Icon icon="openmoji:location-indicator-red" />
                        </div>
                      </div> */}
                      <div className="text-center">
                        <h4 className="mb-1 text-center">Registered Address</h4>
                        <address>
                          <strong>Techsoc Technologies Private Limited</strong>
                          <br />
                          Workhub by Noval Office,
                          <br />
                          Doddanakundi Industrial Area, Graphite India Main Rd.<br />
                          Whitefield, KEB Colony, Industrial Area,<br />
                          Mahadevapura, Bengaluru, Karnataka, 560048, INDIA.
                        </address>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-center">
                      <div className="icon text-primary fs-28 me-4 mt-n1">
                        {" "}
                        <Icon icon="flat-color-icons:cell-phone" />
                      </div>
                    </div> 
                    <div className="d-flex flex-row justify-content-center">
                      <h5 className="mb-1">Phone</h5>
                      <p className="mt-1 ms-2"> +91 8067577879</p>
                    </div>

                    <div>
                      <div className="icon text-primary fs-28 me-4 mt-n1">
                        {" "}
                        <Icon icon="noto-v1:envelope" />{" "}
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-1">E-mail</h5>
                      <p className="mb-0">
                      contact@techsocind.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4">
                <div className="card bg-success text-center mt-md-10 mt-5">
                  <div
                   
                    className="card-body counter-wrapper text-center"
                  >
                    <div className="d-flex flex-row justify-content-center">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1">
                          {" "}
                          <Icon icon="openmoji:location-indicator-red" />
                        </div>
                      </div>
                      <div className="text-center">
                        <h4 className="mb-1 text-center">Registered Address</h4>
                        <address>
                          <strong>Techsoc Technologies Private Limited</strong>
                          <br />
                          Level 8, Ikeva, Tower 1, Umiya Business Bay,
                          <br />
                          Cessna Business Park, Marathalli, <br />
                          Bengaluru 560037, India{" "}
                        </address>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-center">
                      <div className="icon text-primary fs-28 me-4 mt-n1">
                        {" "}
                        <Icon icon="flat-color-icons:cell-phone" />
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                      <h5 className="mb-1">Phone</h5>
                      <p className="mt-1 ms-2">+91 8067577879</p>
                    </div>

                    <div>
                      <div className="icon text-primary fs-28 me-4 mt-n1">
                        {" "}
                        <Icon icon="noto-v1:envelope" />{" "}
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-1">E-mail</h5>
                      <p className="mb-0">
                      contact@techsocind.com
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-6">
                <div className="card bg-success text-center mt-md-10 mt-5">
                  <div
                    // ref={ref3}
                    className="card-body counter-wrapper text-center"
                  >
                    <div className="d-flex flex-row justify-content-center">
                      {/* <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1">
                          {" "}
                          <Icon icon="openmoji:location-indicator-red" />
                        </div>
                      </div> */}
                      <div className="text-center ">
                        <h4 className="mb-1 text-center">Malaysia Office</h4>
                        <address>
                          <strong>Techsoc Technologies Private Limited</strong>
                          <br />
                          <h5 className="text-center">K L</h5>
                        </address>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-center">
                      <div className="icon text-primary fs-28 me-4 mt-n1">
                        <Icon icon="flat-color-icons:cell-phone" />
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                      <h5 className="mb-1 text-center">Phone</h5>
                      <p className="text-center mt-1 ms-2">+60 195466430</p>
                    </div>

                    <div>
                      <div className="icon text-primary fs-28 me-4 mt-n1">
                        {" "}
                        <Icon icon="noto-v1:envelope" />{" "}
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-1">E-mail</h5>
                      <p className="mb-0">
                        contact@techsocind.com
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="card shadow-lg lift h-70 mt-5 bg-light">
              <div class="card-body p-4 d-flex flex-row">
                <div className="col-lg-12">
                  <h1 class="lh-xxs mb-4 text-center">
                    Feel Free To Contact with Us
                  </h1>
                  <form
                    className="contact-form needs-validation"
                    novalidate=""
                  >
                    <div className="messages"></div>
                    <div className="row gx-4">
                      <div className="col-md-6">
                        <div className="form-floating mb-4">
                          <input
                            id="firstname"
                            type="text"
                            name="firstname"
                            className="form-control"
                            placeholder="Jane"
                            value={formData.firstname}
                            onChange={handleChange}
                            required="required"
                            data-error="First Name is required."
                          />
                          <label htmlFor="form_name">First Name *</label>
                          <div className="valid-feedback"> Looks good! </div>
                          <div className="invalid-feedback">
                            Please enter your first name.
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-floating mb-4">
                          <input
                            id="lastname"
                            type="text"
                            name="lastname"
                            className="form-control"
                            placeholder="Doe"
                            value={formData.lastname}
                            onChange={handleChange}
                            required="required"
                            data-error="Last Name is required."
                          />
                          <label htmlFor="lastname">Last Name *</label>
                          <div className="valid-feedback"> Looks good! </div>
                          <div className="invalid-feedback">
                            {" "}
                            Please enter your last name.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating mb-4">
                          <input
                            id="email"
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="jane.doe@example.com"
                            required="required"
                            value={formData.email}
                            onChange={handleChange}
                            data-error="Valid email is required."
                          />
                          <label htmlFor="email">Email *</label>
                          <div className="valid-feedback"> Looks good! </div>
                          <div className="invalid-feedback">
                            {" "}
                            Please provide a valid email address.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating mb-4">
                          <input
                            id="location"
                            type="text"
                            name="location"
                            className="form-control"
                            placeholder="Banglore, India"
                            required="required"
                            value={formData.location}
                            onChange={handleChange}
                            data-error="Valid Location is required."
                          />
                          <label htmlFor="location">Location</label>
                          <div className="valid-feedback"> Looks good! </div>
                          <div className="invalid-feedback">
                            {" "}
                            Please provide a Location.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-4">
                          <textarea
                            id="message"
                            name="message"
                            className="form-control"
                            placeholder="Your message"
                            style={{ height: "150px" }}
                            required="required"
                            value={formData.message}
                            onChange={handleChange}
                            data-error="Valid message is required."
                          ></textarea>
                          <label htmlFor="message">Message *</label>
                          <div className="valid-feedback"> Looks good! </div>
                          <div className="invalid-feedback">
                            {" "}
                            Please enter your messsage.{" "}
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-check mb-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="invalidCheck"
                            required=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="invalidCheck"
                          >
                            {" "}
                            I agree to{" "}
                            <a href="#" className="hover">
                              terms and policy
                            </a>
                            .{" "}
                          </label>
                          <div className="invalid-feedback">
                            {" "}
                            You must agree before submitting.{" "}
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <input
                          type="submit"
                          className="btn btn-primary rounded-pill btn-send mb-3"
                          value="Send message"
                          onClick={handleSubmit}
                        />
                        <p className="text-muted">
                          <strong>*</strong> These fields are required.
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section class="wrapper bg-light">
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.353655952481!2d77.70445467375197!3d12.988913714501122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13ac250d0185%3A0x3b995531e2b6d771!2sTechsoc%20Technologies%20Private%20Limited!5e1!3m2!1sen!2sin!4v1738822502314!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      {isPopupVisible && <ConfirmPopup onClose={closePopup} />}

    </>
  );
};

export default ContactUs;
