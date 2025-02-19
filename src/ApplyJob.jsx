import React, { useState } from "react";
import './ApplyJob.css';
import axios from "axios";
import ConfirmPopup from "./ConfirmPopup";
import { waveform } from "ldrs";

waveform.register();

export const ApplyJob = () => {
  waveform.register();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    qualification: "",
    experience: "",
    domain: "",
    role: "",
    file: null,
  });

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isQualificationSelected, setIsQualificationSelected] = useState(false);
  const [isExperienceSelected, setIsExperienceSelected] = useState(false);
  const [isDomainSelected, setIsDomainSelected] = useState(false);
  const [isRoleSelected, setIsRoleSelected] = useState(false);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSelectQual = (value) => {
    setFormData({ ...formData, qualification: value });
    setIsQualificationSelected(true);
  };

  const handleSelectExp = (value) => {
    setFormData({ ...formData, experience: value });
    setIsExperienceSelected(true);
  };
  const handleSelectDomain = (value) => {
    setFormData({ ...formData, domain: value });
    setIsDomainSelected(true);
  };
  const handleSelectRole = (value) => {
    setFormData({ ...formData, role: value });
    setIsRoleSelected(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedExtensions = [".doc", ".docx", ".pdf"];
      const fileExtension = file.name.split(".").pop().toLowerCase();
      if (!allowedExtensions.includes("." + fileExtension)) {
        alert("Only .doc, .docx, and .pdf files are allowed");
        e.target.value = null;
        return;
      }
      if (file.size > 42 * 1024) {
        alert("File size should be less than 42 KB");
        e.target.value = null;
        return;
      }
    }

    setFormData({ ...formData, file });
  };

  // const handleSubmit = async (e) => {
  //   setIsDataLoading(true);
  //   e.preventDefault();
  //   if (!isQualificationSelected || !isExperienceSelected || !isRoleSelected) {
  //     let errorMessage = "";
  //     if (!isQualificationSelected) {
  //       errorMessage += "Please select your qualification.\n";
  //     }
  //     if (!isExperienceSelected) {
  //       errorMessage += "Please select your experience.\n";
  //     }
  //     if (!isDomainSelected) {
  //       errorMessage += "Please select your domain.\n";
  //     }
  //     if (!isRoleSelected) {
  //       errorMessage += "Please select your role.";
  //     }
  //     alert(errorMessage);
  //   } else {
  //     try {
  //       const response = await axios.post(
  //         // "http://localhost:3001/api/submitForm",
  //         "https://homepage-12.onrender.com/api/submitForm",
  //         formData,
  //         {
  //           headers: {
  //             "Content-type": "multipart/form-data",
  //           },
  //         }
  //       );
  //       console.log(
  //         "Form submitted successfully and also, ",
  //         response.data.message
  //       );
  //       setIsDataLoading(false);
  //       setIsPopupVisible(true);
  //       setFormData({
  //         name: "",
  //         email: "",
  //         message: "",
  //         qualification: "",
  //         experience: "",
  //         domain:"",
  //         role: "",
  //         file: null,
  //       });
  //       document.getElementById("file").value = "";
  //     } catch (error) {
  //       console.error("Error submitting form:", error);
  //     }
  //   }
  // };
  const handleSubmit = async (e) => {
    setIsDataLoading(true);
    e.preventDefault();
    if (!isQualificationSelected || !isExperienceSelected || !isRoleSelected) {
      let errorMessage = "";
      if (!isQualificationSelected) {
        errorMessage += "Please select your qualification.\n";
      }
      if (!isExperienceSelected) {
        errorMessage += "Please select your experience.\n";
      }
      if (!isDomainSelected) {
        errorMessage += "Please select your domain.\n";
      }
      if (!isRoleSelected) {
        errorMessage += "Please select your role.";
      }
      alert(errorMessage);
      setIsDataLoading(false); // Hide loader if form submission fails
    } else {
      try {
        const response = await axios.post(
          "https://homepage-12.onrender.com/api/submitForm",
          formData,
          {
            headers: {
              "Content-type": "multipart/form-data",
            },
          }
        );
        console.log(
          "Form submitted successfully and also, ",
          response.data.message
        );
        setIsPopupVisible(true);
        setFormData({
          name: "",
          email: "",
          message: "",
          qualification: "",
          experience: "",
          domain: "",
          role: "",
          file: null,
        });
        document.getElementById("file").value = "";
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsDataLoading(false); 
      }
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

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
      <section className="mb-5">
        <a id="form"></a>
        <div class="container pb-7">
          <div class="card bg-soft-primary mb-8">
            <div class="card-body p-12">
              <div class="row gx-md-8 gx-xl-12 gy-10">
                <div class="col-lg-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-400 -100 4502 595.7"
                    class="svg-inject icon-svg icon-svg-sm mb-4"
                  >
                    <path
                      class="lineal-stroke"
                      d="M483.6 395.7H53.3C23.9 395.7 0 371.9 0 342.4V53.3C0 23.9 23.9 0 53.3 0h405.4C488.1 0 512 23.9 512 53.3v222.8c0 7.9-6.4 14.2-14.2 14.2s-14.2-6.4-14.2-14.2V53.3c0-13.7-11.1-24.8-24.8-24.8H53.3c-13.7 0-24.8 11.1-24.8 24.8v289.2c0 13.7 11.1 24.8 24.8 24.8h430.3c7.9.2 14.1 6.7 13.8 14.6-.2 7.5-6.3 13.6-13.8 13.8z"
                    ></path>
                    <path
                      class="lineal-fill"
                      d="M497.8 53.3L256 236.4 14.2 53.3c0-21.6 17.5-39.1 39.1-39.1h405.4c21.6 0 39.1 17.5 39.1 39.1z"
                    ></path>
                    <path
                      class="lineal-stroke"
                      d="M256 250.6c-3.1 0-6.1-1-8.6-2.9L5.6 64.6C2.1 61.9 0 57.7 0 53.3 0 23.9 23.9 0 53.3 0h405.4C488.1 0 512 23.9 512 53.3c0 4.4-2.1 8.6-5.6 11.3L264.6 247.7c-2.5 1.9-5.5 2.9-8.6 2.9zM29.3 46.8L256 218.6 482.7 46.8c-2.9-10.9-12.8-18.4-24-18.4H53.3c-11.3.1-21.1 7.6-24 18.4zm454.2 348.7c-3.1 0-6.1-1-8.6-2.9l-99.6-75.4c-6.3-4.7-7.5-13.7-2.7-19.9 4.7-6.3 13.7-7.5 19.9-2.7l99.6 75.4c6.3 4.7 7.5 13.7 2.8 19.9-2.7 3.6-6.9 5.7-11.4 5.6zm-449-4.6c-7.9 0-14.2-6.4-14.2-14.2 0-4.5 2.1-8.7 5.6-11.4l93.5-70.8c6.3-4.7 15.2-3.5 19.9 2.7 4.7 6.3 3.5 15.2-2.7 19.9L43.1 388c-2.5 1.9-5.5 2.9-8.6 2.9z"
                    ></path>
                  </svg>
                  <h2
                    class="display-4 mb-3 pe-lg-10 fw-bold"
                    style={{ fontSize: "30px" }}
                  >
                    Start your journey with TechsoC.
                  </h2>
                  <p class="lead pe-lg-12 mb-0">
                    I bring rapid solutions to make the life of my clients
                    easier. Have any questions? Reach out to me from this
                    contact form and I will get back to you shortly.
                  </p>
                </div>
                <div class="col-lg-9">
                  <form
                    class="contact-form needs-validation"
                    // onSubmit={handleSubmit}
                    novalidate=""
                  >
                    <div class="messages"></div>

                    <div class="row gx-4">
                      <div class="col-md-6">
                        <div class="form-floating mb-4">
                          <input
                            type="text"
                            className={`form-control border-0 ${
                              formData.name.length === 0
                                ? "is-invalid"
                                : "is-valid"
                            }`}
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            title="First Name is required."
                          />
                          <label htmlFor="name" className="form-label">
                            Name *
                          </label>
                          <div class="valid-feedback"> Looks good! </div>
                          {formData.name.length === 0 && (
                            <div className="invalid-feedback">
                              Please enter your name.
                            </div>
                          )}
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating mb-4">
                          <input
                            id="email"
                            type="email"
                            name="email"
                            className={`form-control border-0 ${
                              formData.email.trim() === "" ||
                              !isEmailValid(formData.email)
                                ? "is-invalid"
                                : "is-valid"
                            }`}
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <label htmlFor="email" className="form-label">
                            Email *
                          </label>
                          {formData.email.trim() === "" && (
                            <div className="invalid-feedback">
                              {/* Please provide an email address. */}
                            </div>
                          )}
                          {!isEmailValid(formData.email) && (
                            <div className="invalid-feedback">
                              Please provide a valid email address.
                            </div>
                          )}
                          {formData.email.trim() !== "" &&
                            isEmailValid(formData.email) && (
                              <div className="valid-feedback">Looks good!</div>
                            )}
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating mb-4">
                          <textarea
                            id="message"
                            name="message"
                            className={`form-control border-0 ${
                              formData.message.trim() === ""
                                ? "is-invalid"
                                : "is-valid"
                            }`}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message"
                            style={{ height: "150px" }}
                            required
                          ></textarea>
                          <label htmlFor="message" className="form-label">
                            Message *
                          </label>
                          {formData.message.trim() === "" && (
                            <div className="invalid-feedback">
                              Please enter your message.
                            </div>
                          )}
                          {formData.message.trim() !== "" && (
                            <div className="valid-feedback">Looks good!</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="input-group mb-4">
                          <input
                            type="text"
                            className="form-control border-0"
                            placeholder="Qualification *"
                            name="qualification"
                            aria-label="Qualification *"
                            aria-describedby="qualification-dropdown"
                            required
                            readOnly
                            value={formData.qualification}
                            onChange={handleChange}
                          />
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="qualification-dropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bi bi-caret-down-fill"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() =>
                                  handleSelectQual("Bachelor's Degree")
                                }
                              >
                                Bachelor's Degree
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() =>
                                  handleSelectQual("Master's Degree")
                                }
                              >
                                Master's Degree
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() => handleSelectQual("PhD")}
                              >
                                PhD
                              </button>
                            </li>
                          </ul>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please select your qualification.
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="input-group mb-4">
                          <input
                            type="text"
                            className="form-control border-0"
                            placeholder="Experience *"
                            name="experience"
                            aria-label="Experience *"
                            aria-describedby="experience-dropdown"
                            required
                            readOnly
                            value={formData.experience}
                            onChange={handleChange}
                          />
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="experience-dropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bi bi-caret-down-fill"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() =>
                                  handleSelectExp("Less than 1 year")
                                }
                              >
                                Less than 1 year
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() => handleSelectExp("1-3 years")}
                              >
                                1-3 years
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() => handleSelectExp("3-5 years")}
                              >
                                3-5 years
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() => handleSelectExp("Above 5 years")}
                              >
                                Above 5 Years
                              </button>
                            </li>
                          </ul>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please select your experience.
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="input-group mb-4">
                          <input
                            type="text"
                            className="form-control border-0"
                            placeholder="Choose Domain *"
                            name="role"
                            aria-label="Choose Domain*"
                            aria-describedby="role-dropdown"
                            required
                            readOnly
                            value={formData.domain}
                            onChange={handleChange}
                          />
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="role-dropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bi bi-caret-down-fill"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() =>
                                  handleSelectDomain("DV Engineer")
                                }
                              >
                                DV Engineer
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() =>
                                  handleSelectDomain("Analog Design Engineer")
                                }
                              >
                                Analog Design Engineer
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() =>
                                  handleSelectDomain("Layout Design Engineer")
                                }
                              >
                                Layout Design Engineer
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() =>
                                  handleSelectDomain("PD Engineer")
                                }
                              >
                                PD Engineer
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() =>
                                  handleSelectDomain("DFT Engineer")
                                }
                              >
                                DFT Engineer
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() =>
                                  handleSelectDomain("RTL Engineer")
                                }
                              >
                                RTL Engineer
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() =>
                                  handleSelectDomain("FPGA Engineer")
                                }
                              >
                                FPGA Engineer
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() =>
                                  handleSelectDomain("STA Engineer")
                                }
                              >
                                STA Engineer
                              </button>
                            </li>

                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() =>
                                  handleSelectDomain("Emulation Engineer")
                                }
                              >
                                Emulation Engineer
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() =>
                                  handleSelectDomain("Software Engineer")
                                }
                              >
                                Software Engineer
                              </button>
                            </li>
                          </ul>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please select your Domain.
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="input-group mb-4">
                          <input
                            type="text"
                            className="form-control border-0"
                            placeholder="Choose Role *"
                            name="role"
                            aria-label="Choose Role*"
                            aria-describedby="role-dropdown"
                            required
                            readOnly
                            value={formData.role}
                            onChange={handleChange}
                          />
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="role-dropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bi bi-caret-down-fill"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() => handleSelectRole("IC Role")}
                              >
                                IC Role
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() => handleSelectRole("Senior Role")}
                              >
                                Senior Role
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() => handleSelectRole("Lead")}
                              >
                                Lead
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() => handleSelectRole("Sr. Lead")}
                              >
                                Sr. Lead
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() => handleSelectRole("Manager")}
                              >
                                Manager
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() =>
                                  handleSelectRole("Technical/Principal Mgr")
                                }
                              >
                                Technical/Principal Mgr
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() =>
                                  handleSelectRole("Ass. Director/Director")
                                }
                              >
                                Ass. Director/Director
                              </button>
                            </li>
                          </ul>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please select your Role.
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="file" className="form-label">
                          Attach File (.doc, .docx, .pdf):
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="file"
                          name="file"
                          accept=".doc, .docx, .pdf"
                          onChange={handleFileChange}
                        />
                      </div>
                      <div class="col-12">
                        <input
                          type="submit"
                          class="btn btn-primary rounded-pill btn-send mb-1 mt-3"
                          value="Send message"
                          onClick={handleSubmit}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {isDataLoading && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <l-waveform
            size="146"
            stroke="20"
            speed="1"
            color="black"
          ></l-waveform>
        </div>
      )} */}
      {isPopupVisible && <ConfirmPopup onClose={closePopup} />}
    </>
  );
};
