
import React, { useState } from "react";
import "./BussCont.css";
import axios from "axios";
import contactImage from "../src/images/ContactUs.webp";
import ConfirmPopup from './ConfirmPopup';
import { waveform } from "ldrs";


waveform.register();

const BussCont = () => {
  waveform.register();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file: null,
  });
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        alert("File size should be less than 14 KB");
        e.target.value = null;
        return;
      }
    }

    setFormData({ ...formData, file });
  };

  const handleSubmit = async (e) => {
    setIsDataLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        // "http://localhost:3001/api/submitForm",
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
        file: null,
      });
      document.getElementById("file").value = "";
    } catch (error) {
      console.error("Error submitting form:", error);
     
      
    
    } finally {
      setIsDataLoading(false); 
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
    <section className="wrapper bg-soft-primary mt-5 mb-5">
      <div className="container">
        <div className="row py-1 g-1">
          <div className="col-md-6 first-col">
            <h1 className="text-center mt-3">Contact Us</h1>
            <form className="p-2" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Enter Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="">
                <label htmlFor="email" className="form-label">
                  Your Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Write Your Message Here
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="mb-3">
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
                  required
                />
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Send Now
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <img
              src={contactImage}
              alt="Contact Us Page"
              className="img-fluid mt-5"
            />
          </div>
        </div>
      </div>
      {isPopupVisible && <ConfirmPopup onClose={closePopup} />}
      </section>
    </>
  );
};

export default BussCont;
