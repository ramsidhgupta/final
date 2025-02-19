import React, { useState, useEffect, Suspense } from "react";
import useInView from "./useInView";
import Placeholder from "./PlaceHolder";

import gsap from "gsap";
import Textify from "textify.js";
import useAnimateOnScroll from "./useAnimateOnScroll";

import "./WhyEmbedded.css";
// import "./DivTest.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import axios from "axios";
import ErrorModal from "./ErrorModal";
import ConfirmPopup from "./ConfirmPopup";
import { waveform } from "ldrs";

import case3 from "./assets/case1.jpg";
import pic1 from "./assets/microchip_1.png";
import pic2 from "./assets/ai_board_1.jpg";
import pic3 from "./assets/ai_board_2.jpg";
import pic4 from "./assets/ai_board_3.jpg";
import pic5 from "./assets/ai_board_4.jpg";
import pic6 from "./assets/chip_engineer.jpg";
import pic7 from "./assets/human_machine.jpg";

const LazyTextEmbedded = React.lazy(() => import("./TextEmbedded"));

waveform.register();
const WhyEmbedded = () => {
  useAnimateOnScroll(
    ".raamm",
    { x: "-100%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 1, stagger: 0.1, ease: "expo.inOut" }
  );
  useAnimateOnScroll(
    ".ramParagraph",
    { scale: 0.5, opacity: 0 },
    { scale: 1, opacity: 1, duration: 2, stagger: 0.1, ease: "power3.inOut" }
  );
  useAnimateOnScroll(
    ".ramHeading",
    { y: "-100%", rotate: -180, scale: 0 },
    { y: "0", rotate: 0, scale: 1, duration: 0.7, ease: "power2.inOut" }
  );
  useAnimateOnScroll(
    ".paragraph-3",
    { rotate: 30, opacity: 0 },
    { rotate: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.inOut" }
  );
  useAnimateOnScroll(
    ".downtoup",
    { opacity: 0, x: "-100px", y: "-50px", scale: 2 },
    {
      opacity: 1,
      x: "0px",
      y: "0px",
      scale: 1,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.inOut",
    }
  );

  const inView = useInView();

  waveform.register();
  const [showModal, setShowModal] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const newErrors = {};

  // useEffect(() => {
  //   // Textify Configuration
  //   const textifyConfig = {
  //     el: ".raamm",
  //     observer: {
  //       repeat: true,
  //     },
  //     animation: {
  //       duration: 1,
  //       stagger: 0.1,
  //       ease: "expo.inOut",
  //       transformOrigin: "left right",
  //       animateProps: {
  //         x: "-100%",
  //         y: "0%",
  //       },
  //     },
  //   };

  //   const paragraphConfig = {
  //     el: ".ramParagraph",
  //     largeText: true,
  //     splitType: "lines",
  //     observer: {
  //       repeat: true,
  //     },
  //     animation: {
  //       by: "lines",
  //       duration: 2,
  //       ease: "power3.inOut",
  //       stagger: 0.1,
  //       animateProps: {
  //         scale: 0.5,
  //         opacity: 0,
  //       },
  //     },
  //   };

  //   const title2Config = {
  //     el: ".ramHeading",
  //     observer: {
  //       repeat: true,
  //     },
  //     animation: {
  //       duration: 0.7,
  //       ease: "power2.inOut",
  //       transformOrigin: "left top",
  //       animateProps: {
  //         y: "0",
  //         rotate: -180,
  //         scale: 0,
  //       },
  //     },
  //   };

  //   const paragraph3Config = {
  //     el: ".paragraph-3",
  //     observer: {
  //       repeat: true,
  //     },
  //     // largeText: true,
  //     // splitType: "lines",
  //     animation: {
  //       by: "lines",
  //       duration: 0.7,
  //       ease: "power3.inOut",
  //       stagger: 0.1,
  //       transformOrigin: "left top",
  //       animateProps: {
  //         rotate: 30,
  //         opacity: 0,
  //       },
  //     },
  //   };

  //   const RamConfig = {
  //     el: ".downtoup",
  //     largeText: true,
  //     splitType: "lines",
  //     observer: {
  //       repeat: true,
  //     },
  //     animation: {
  //       by: "lines",
  //       duration: 0.7,
  //       ease: "power3.inOut",
  //       stagger: 0.1,
  //       animateProps: {

  //         opacity: 0,
  //         x: "-100px",
  //         y: "-50px",
  //         scale: 2,
  //         // rotate: 360, // Animate rotation by 360 degrees
  //       },
  //     },
  //   };

  //   // Initialize Textify for banner title and paragraph with GSAP
  //   const titleInstance = new Textify(textifyConfig, gsap);
  //   const paragraphInstance = new Textify(paragraphConfig, gsap);
  //   const title2Instance = new Textify(title2Config, gsap);
  //   const paragraph3Instance = new Textify(paragraph3Config, gsap);
  //   const textifyInstance = new Textify(RamConfig, gsap);
  // }, []);

  const defaultFormData = {
    name: "",
    email: "",
    message: "",
    JobTitle: "",
    CompanyName: "",
    PhoneNo: "",
    isPhoneValid: false,
    Date: "",
    country: "",
    selectedFirmwareServices: {
      firmwareDevelopment: false,
      softwareDevelopment: false,
      systemIntegration: false,
      testingValidation: false,
      maintenanceSupport: false,
      securityServices: false,
      consultingTraining: false,
      iotConnectivity: false,
      prototypingPoc: false,
      embeddedUiUx: false,
    },
    selectedMiddlewareServices: {
      MiddleDevelopment: false,
      RTOS_Integration: false,
      Communication_Protocols: false,
      Security_Services: false,
      Device_Driver_Development: false,
      System_Integraton: false,
      Testing_Validation: false,
      Maintenance_Support: false,
      Custome_Software_Development: false,
      Consulting_Training: false,
    },
    selectedAIServices: {
      AI_Model_Development_training: false,
      Edge_AI_Deployment: false,
      Model_Optimization_Compression: false,
      AI_Driven_Analytics_Insights: false,
      Embedded_Vision_Systems: false,
      Natural_Language_Processing: false,
      AI_Based_Sensor_Fusion: false,
      Real_Time_AI_Inference: false,
      Custom_AI_Solutions: false,
      Integration_with_IoT_Cloud: false,
    },
    selectedHMIServices: {
      HMI_Design_and_Development: false,
      Custom_HMI_Solutions: false,
      Touchscreen_Integration: false,
      Graphics_Rendering: false,
      Embedded_Operating_Systems: false,
      HMI_Prototyping: false,
      Performance_Optimization: false,
      Connectivity_Communication: false,
      Security_Privacy: false,
      Maintenanc_Support: false,
    },
  };

  const [formData, setFormData] = useState(defaultFormData);

  const handleFirmwareCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedFirmwareServices: {
        ...prevFormData.selectedFirmwareServices,
        [name]: checked,
      },
    }));
  };

  const handleMiddlewareCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedMiddlewareServices: {
        ...prevFormData.selectedMiddlewareServices,
        [name]: checked,
      },
    }));
  };

  const handleAICheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedAIServices: {
        ...prevFormData.selectedAIServices,
        [name]: checked,
      },
    }));
  };

  const handleHMICheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedHMIServices: {
        ...prevFormData.selectedHMIServices,
        [name]: checked,
      },
    }));
  };

  const extractSelectedServices = (formData) => {
    const selectedServices = {};

    // Helper function to add selected services
    const addSelectedServices = (category, services) => {
      selectedServices[category] = Object.entries(services)
        .filter(([_, value]) => value)
        .map(([key, _]) => key);
    };

    // Extract selected services from each category
    addSelectedServices(
      "selectedFirmwareServices",
      formData.selectedFirmwareServices
    );
    addSelectedServices(
      "selectedMiddlewareServices",
      formData.selectedMiddlewareServices
    );
    addSelectedServices("selectedAIServices", formData.selectedAIServices);
    addSelectedServices("selectedHMIServices", formData.selectedHMIServices);

    return selectedServices;
  };

  const defaultCountry = {
    value: "",
    label: "Please select your country *",
  };

  const validateFormData = () => {
    let isValid = true;

    // Validate name
    if (formData.name.trim() === "") {
      newErrors.name = "Please enter your name.";
      isValid = false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Validate job title
    if (formData.JobTitle.trim() === "") {
      newErrors.JobTitle = "Please enter your job title.";
      isValid = false;
    }

    // Validate company name
    if (formData.CompanyName.trim() === "") {
      newErrors.CompanyName = "Please enter your company name.";
      isValid = false;
    }

    // Validate message
    if (formData.message.trim() === "") {
      newErrors.message = "Please enter your message.";
      isValid = false;
    }

    // Validate date
    if (formData.Date.trim() === "") {
      newErrors.Date = "Please select a date.";
      isValid = false;
    }

    // Merge new errors with existing ones
    const mergedErrors = { ...formErrors, ...newErrors };
    console.log(newErrors);
    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    // setIsDataLoading(true);
    e.preventDefault();
    const selectedServices = extractSelectedServices(formData);
    console.log("Selected Services:", selectedServices);

    const isValid = validateFormData();
    if (!isValid) {
      setFormErrors(newErrors);
      setShowModal(true);
      return; // Don't submit if form data is invalid
    }

    const dataToSend = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      JobTitle: formData.JobTitle,
      CompanyName: formData.CompanyName,
      PhoneNo: formData.PhoneNo,
      Date: formData.Date,
      country: formData.country,
      selectedServices,
    };

    const hasSelectedService =
      Object.values(formData.selectedFirmwareServices).some(Boolean) ||
      Object.values(formData.selectedMiddlewareServices).some(Boolean) ||
      Object.values(formData.selectedAIServices).some(Boolean) ||
      Object.values(formData.selectedHMIServices).some(Boolean);

    if (!hasSelectedService) {
      alert("Please select at least one service.");
      return;
    }
    if (formData.country === "") {
      alert("Please select a country.");
      return;
    }
    // Process formData
    else {
      setIsDataLoading(true);
      try {
        const response = await axios.post(
          //   "http://localhost:3001/api/submitFormEmbedded",
          "https://homepage-12.onrender.com/api/submitFormEmbedded",
          dataToSend,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(
          "Form submitted successfully and also, ",
          response.data.message
        );
        setIsPopupVisible(true);
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsDataLoading(false);
      }
    }
    console.log("Form Data Details: ", dataToSend);

    // Reset formData
    setFormData(defaultFormData);
    setSelectedCountry(defaultCountry);
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(false);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };
  // const [phone, setPhone] = useState("");
  const [calendarValue, setCalendarValue] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  // const [countries, setCountries] = useState([]);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const countryData = require("./CountryDetails.json");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhone = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      PhoneNo: value,
    }));

    // Validate phone number
    const phoneNumber = parsePhoneNumberFromString(value);
    if (phoneNumber && phoneNumber.isValid()) {
      setFormData((prevData) => ({
        ...prevData,
        isPhoneValid: true,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        isPhoneValid: false,
      }));
    }
  };

  const handleCalendarChange = (Date) => {
    setCalendarValue(Date);
    setFormData({ ...formData, Date: Date.toLocaleDateString() });
    setIsCalendarOpen(false);
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setFormData({
      ...formData,
      country: selectedOption.country,
    });
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onShowClick1 = () => {
    setShow1(!show1);
    setShow2(false);
    setShow3(false);
    setShow4(false);
  };

  const onShowClick2 = () => {
    setShow1(false);
    setShow2(!show2);
    setShow3(false);
    setShow4(false);
  };
  const onShowClick3 = () => {
    setShow1(false);
    setShow2(false);
    setShow3(!show3);
    setShow4(false);
  };

  const onShowClick4 = () => {
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(!show4);
  };
  const closeBox = () => {
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(false);
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
      <section className="wrapper bg-dark">
        <div className="container pt-md-8 pt-8 pt-md-0 mb-5">
          <div className="row">
            <Placeholder id="placeholder" style={{ height: 'auto' }}>
              {inView && (
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyTextEmbedded />
                </Suspense>
              )}
            </Placeholder>
            <div
              className="col-lg-8 mt-5"
            >
              <div className="row">
                <div class="col-md-6">
                  <div class="exp-block">
                    <img
                      width="570"
                      height="377"
                      class="exp-image"
                      alt="Hardware Development"
                      src={pic1}
                      data-lazy-src={pic1}
                    />

                    <div class="exp-details fadeIn-bottom">
                      <h4
                        class="exp-title"
                        style={{
                          letterSpacing: ".08em",
                        }}
                      >
                        {" "}
                        Hardware Development
                      </h4>
                      <p class="exp-text">
                        When developing hardware devices such as IoT sensors,
                        consumer electronics, or industrial equipment, the need
                        for embedded software arises to control and manage the
                        functionality of these devices.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="exp-block">
                    <img
                      width="570"
                      height="377"
                      class="exp-image"
                      alt="Software Integration"
                      src={pic2}
                      data-lazy-src={pic2}
                    />

                    <div class="exp-details fadeIn-bottom">
                      <h4
                        class="exp-title"
                        style={{
                          letterSpacing: ".08em",
                        }}
                      >
                        {" "}
                        Software Integration{" "}
                      </h4>
                      <p class="exp-text">
                        If a company is expanding its product line to include
                        smart or connected devices, embedding software into
                        these products becomes essential for enabling
                        communication, data exchange, and remote management
                        capabilities.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="exp-block">
                    <img
                      width="570"
                      height="377"
                      class="exp-image"
                      alt="Performance Optimization"
                      src={pic3}
                      data-lazy-src={pic3}
                    />

                    <div class="exp-details fadeIn-bottom">
                      <h4
                        class="exp-title"
                        style={{
                          letterSpacing: ".08em",
                        }}
                      >
                        {" "}
                        Performance Optimization{" "}
                      </h4>
                      <p class="exp-text">
                        In industries like automotive, aerospace, or industrial
                        automation, where real-time performance, reliability,
                        and efficiency are crucial, embedded software plays a
                        vital role in optimizing the operation of hardware
                        systems.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="exp-block">
                    <img
                      width="570"
                      height="377"
                      class="exp-image"
                      alt="Scalability and Flexibility"
                      src={pic4}
                      data-lazy-src={pic4}
                    />

                    <div class="exp-details fadeIn-bottom">
                      <h4
                        class="exp-title"
                        style={{
                          letterSpacing: ".08em",
                        }}
                      >
                        {" "}
                        Scalability and Flexibility{" "}
                      </h4>
                      <p class="exp-text">
                        For companies looking to scale their operations or adapt
                        to evolving market demands, embedded services offer
                        scalable and flexible solutions that can be customized
                        to meet specific requirements and support future growth.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="exp-block">
                    <img
                      width="570"
                      height="377"
                      class="exp-image"
                      alt="Competitive Advantage"
                      src={pic5}
                      data-lazy-src={pic5}
                    />

                    <div class="exp-details fadeIn-bottom">
                      <h4
                        class="exp-title"
                        style={{
                          letterSpacing: ".08em",
                        }}
                      >
                        {" "}
                        Competitive Advantage
                      </h4>
                      <p class="exp-text">
                        Embracing embedded services can provide companies with a
                        competitive edge by enabling them to offer innovative
                        features, enhanced user experiences, and differentiated
                        products compared to competitors.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="exp-block">
                    <img
                      width="570"
                      height="377"
                      class="exp-image"
                      alt="Cost Savings"
                      src={pic6}
                      data-lazy-src={pic6}
                    />

                    <div class="exp-details fadeIn-bottom">
                      <h4
                        class="exp-title"
                        style={{
                          letterSpacing: ".08em",
                        }}
                      >
                        {" "}
                        Cost Savings
                      </h4>
                      <p class="exp-text">
                        Outsourcing embedded software development to specialized
                        service providers can result in cost savings compared to
                        maintaining an in-house development team, especially for
                        companies with limited resources or expertise in this
                        area.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="exp-block">
                    <img
                      width="570"
                      height="377"
                      class="exp-image"
                      alt="Technological Advancements"
                      src={pic7}
                      data-lazy-src={pic7}
                    />

                    <div class="exp-details fadeIn-bottom">
                      <h4
                        class="exp-title"
                        style={{
                          letterSpacing: ".08em",
                        }}
                      >
                        {" "}
                        Technological Advancements
                      </h4>
                      <p class="exp-text">
                        With advancements in technology such as IoT, AI, and
                        edge computing, companies may need to adopt embedded
                        services to leverage these technologies and capitalize
                        on emerging opportunities in their respective markets.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="exp-block">
                    <img
                      width="570"
                      height="377"
                      class="exp-image"
                      alt="Compliance and Standards"
                      src={case3}
                      data-lazy-src={case3}
                    />

                    <div class="exp-details fadeIn-bottom">
                      <h4
                        class="exp-title"
                        style={{
                          letterSpacing: ".08em",
                        }}
                      >
                        Compliance and Standards
                      </h4>
                      <p class="exp-text">
                        With advancements in technology such as IoT, AI, and
                        edge computing, companies may need to adopt embedded
                        services to leverage these technologies and capitalize
                        on emerging opportunities in their respective markets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-5 bg-info">
              <div className="col-lg-12">
                <div class="form-floating mb-1 mt-5">
                  <input
                    type="text"
                    className={`form-control border-0 ${
                      formData.name.length === 0 ? "is-invalid" : "is-valid"
                    }`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    title="Name is required"
                  />
                  <label htmlFor="name" className="form-label">
                    Your Name *
                  </label>
                  <div class="valid-feedback"> Looks good! </div>
                  {formData.name.length === 0 && (
                    <div className="invalid-feedback">
                      Please enter your name.
                    </div>
                  )}
                </div>

                <div class="form-floating mb-1">
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
                    title="Please mention your work email"
                  />
                  <label htmlFor="email" className="form-label">
                    Work Email *
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

                <div class="form-floating mb-1">
                  <input
                    type="text"
                    className={`form-control border-0 ${
                      formData.JobTitle.length === 0 ? "is-invalid" : "is-valid"
                    }`}
                    id="JobTitle"
                    name="JobTitle"
                    value={formData.JobTitle}
                    onChange={handleChange}
                    required
                    title="Please mention your Job role"
                  />
                  <label htmlFor="JobTitle" className="form-label">
                    Job Title*
                  </label>
                  <div class="valid-feedback"> Looks good! </div>
                  {formData.JobTitle.length === 0 && (
                    <div className="invalid-feedback">
                      Please enter Job Title.
                    </div>
                  )}
                </div>

                <div class="form-floating mb-1">
                  <input
                    type="text"
                    className={`form-control border-0 ${
                      formData.CompanyName.length === 0
                        ? "is-invalid"
                        : "is-valid"
                    }`}
                    id="CompanyName"
                    name="CompanyName"
                    value={formData.CompanyName}
                    onChange={handleChange}
                    required
                    title="Company Name is required."
                  />
                  <label htmlFor="CompanyName" className="form-label">
                    Company Name*
                  </label>
                  <div class="valid-feedback"> Looks good! </div>
                  {formData.CompanyName.length === 0 && (
                    <div className="invalid-feedback">
                      Please enter Company Name.
                    </div>
                  )}
                </div>

                <div className="form-floating mb-4">
                  <input
                    type="text"
                    value={formData.Date}
                    readOnly
                    className={`form-control border-0 ${
                      formData.Date.length === 0 ? "is-invalid" : "is-valid"
                    }`}
                    // className="form-control"
                    onClick={toggleCalendar}
                    style={{ cursor: "pointer" }}
                    title="Schedule call back date"
                  />
                  <label htmlFor="name" className="form-label">
                    Select a date for call back *
                  </label>
                  <Icon
                    icon="simple-line-icons:calender"
                    onClick={toggleCalendar}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                  />

                  {isCalendarOpen && (
                    <div style={{ position: "absolute", zIndex: 1 }}>
                      <Calendar
                        onChange={handleCalendarChange}
                        value={calendarValue}
                        style={{ zIndex: 1 }}
                      />
                    </div>
                  )}
                  <div class="valid-feedback"> Looks good! </div>
                  {formData.name.length === 0 && (
                    <div className="invalid-feedback">
                      Please Schedule a call back date.
                    </div>
                  )}
                </div>

                <div className="form-floating mb-4">
                  <Select
                    value={selectedCountry}
                    options={countryData.map((country) => ({
                      value: country.code,
                      label: (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src={country.flag}
                            alt={country.country}
                            style={{ width: "24px", marginRight: "0.5rem" }}
                          />
                          {country.country}
                        </div>
                      ),
                      country: country.country, // Store the country name in the option
                    }))}
                    onChange={handleCountryChange}
                  />
                </div>

                <div class="form-floating mb-4">
                  <PhoneInput
                    // defaultCountry="en"
                    value={formData.PhoneNo}
                    onChange={handlePhone}
                    enableSearch={true}
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoFocus: true,
                    }}
                    className={`${
                      formData.isPhoneValid ? "is-valid" : "is-invalid"
                    }`}
                  />

                  <div className="valid-feedback">Looks good!</div>
                  {!formData.isPhoneValid && (
                    <div className="invalid-feedback">
                      Please enter a valid phone number.
                    </div>
                  )}
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10">
                  <div className="col-lg-12">
                    <p
                      className="paragraph-3"
                      style={{ fontWeight: "600", color: "#1268b3" }}
                    >
                      In the realm of{" "}
                      <span
                        style={{
                          fontWeight: "800",
                          color: "#008F58",
                          letterSpacing: "0.11255em",
                        }}
                      >
                        Embedded Firmware and Software
                      </span>{" "}
                      we can offer variety of comprehensive suite of services,
                      Plz. let us know your concerns
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "20px",
                      }}
                    >
                      <div class="wrapperRam">
                        <div class="link_wrapperRam">
                          <button className="ButtonRam" onClick={onShowClick1}>
                            Firmware Services
                          </button>

                          <div class="iconRam">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 268.832 268.832"
                            >
                              <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {show1 && (
                      <div
                        className="solutions-for-business-card"
                        style={{ width: "100%", height: "auto" }}
                      >
                        {[
                          {
                            name: "firmwareDevelopment",
                            label: "Firmware Development",
                          },
                          {
                            name: "softwareDevelopment",
                            label: "Software Development",
                          },
                          {
                            name: "systemIntegration",
                            label: "System Integration",
                          },
                          {
                            name: "testingValidation",
                            label: "Testing and Validation",
                          },
                          {
                            name: "maintenanceSupport",
                            label: "Maintenance and Support",
                          },
                          {
                            name: "securityServices",
                            label: "Security Services",
                          },
                          {
                            name: "consultingTraining",
                            label: "Consulting and Training",
                          },
                          {
                            name: "iotConnectivity",
                            label: "IoT and Connectivity Solutions",
                          },
                          {
                            name: "prototypingPoc",
                            label: "Prototyping and Proof-of-Concept (PoC)",
                          },
                          {
                            name: "embeddedUiUx",
                            label: "Embedded UI/UX Development",
                          },
                        ].map((service) => (
                          <div
                            key={service.name}
                            className="solution-title col-lg-12"
                          >
                            <label style={{ display: "block" }}>
                              <input
                                type="checkbox"
                                name={service.name}
                                checked={
                                  formData.selectedFirmwareServices[
                                    service.name
                                  ]
                                }
                                onChange={handleFirmwareCheckboxChange}
                              />
                              <span
                                style={{
                                  fontWeight: "600",
                                  color: "#008F58",
                                  letterSpacing: "0.1em",
                                  marginLeft: "0.4em",
                                }}
                              >
                                {service.label}
                              </span>
                            </label>
                          </div>
                        ))}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <button
                            onClick={closeBox}
                            class="btnRam btn-1 splBtn"
                          >
                            <svg>
                              <rect
                                x="0"
                                y="0"
                                fill="none"
                                width="100%"
                                height="100%"
                              />
                            </svg>
                            submit
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10">
                  <div className="col-lg-12">
                    <p
                      className="paragraph-3"
                      style={{ fontWeight: "600", color: "#1268b3" }}
                    >
                      In the realm of{" "}
                      <span
                        style={{
                          fontWeight: "800",
                          color: "#008F58",
                          letterSpacing: "0.11255em",
                        }}
                      >
                        Embedded Middleware and Software
                      </span>{" "}
                      we can offer a variety of comprehensive suite of services,
                      Plz. let us know your concerns
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "20px",
                      }}
                    >
                      <div class="wrapperRam">
                        <div class="link_wrapperRam">
                          <button className="ButtonRam" onClick={onShowClick2}>
                            Middleware Services
                          </button>

                          <div class="iconRam">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 268.832 268.832"
                            >
                              <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {show2 && (
                      <div
                        className="solutions-for-business-card"
                        style={{ width: "100%", height: "auto" }}
                      >
                        {[
                          {
                            name: "MiddleDevelopment",
                            label: "Middleware Development",
                          },
                          {
                            name: "RTOS_Integration",
                            label:
                              "Real-Time Operating System (RTOS) Integration",
                          },
                          {
                            name: "Communication_Protocols",
                            label: "Communication Protocols",
                          },
                          {
                            name: "Security_Services",
                            label: "Security Services",
                          },
                          {
                            name: "Device_Driver_Development",
                            label: "Device Driver Development",
                          },
                          {
                            name: "System_Integraton",
                            label: "System Integration and Optimization",
                          },
                          {
                            name: "Testing_Validation",
                            label: "Testing and Validation",
                          },
                          {
                            name: "Maintenance_Support",
                            label: "Maintenance and Support",
                          },
                          {
                            name: "Custome_Software_Development",
                            label: "Custom Software Development",
                          },
                          {
                            name: "Consulting_Training",
                            label: "Consulting and Training",
                          },
                        ].map((service) => (
                          <div
                            key={service.name}
                            className="solution-title col-lg-12"
                          >
                            <label style={{ display: "block" }}>
                              <input
                                type="checkbox"
                                name={service.name}
                                checked={
                                  formData.selectedMiddlewareServices[
                                    service.name
                                  ]
                                }
                                onChange={handleMiddlewareCheckboxChange}
                              />
                              <span
                                style={{
                                  fontWeight: "600",
                                  color: "#008F58",
                                  letterSpacing: "0.1em",
                                  marginLeft: "0.4em",
                                }}
                              >
                                {service.label}
                              </span>
                            </label>
                          </div>
                        ))}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <button
                            onClick={closeBox}
                            class="btnRam btn-1 splBtn"
                          >
                            <svg>
                              <rect
                                x="0"
                                y="0"
                                fill="none"
                                width="100%"
                                height="100%"
                              />
                            </svg>
                            submit
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10">
                  <div className="col-lg-12">
                    <p
                      className="paragraph-3"
                      style={{ fontWeight: "600", color: "#1268b3" }}
                    >
                      In the domain of{" "}
                      <span
                        style={{
                          fontWeight: "800",
                          color: "#008F58",
                          letterSpacing: "0.11255em",
                        }}
                      >
                        Embedded AI Services
                      </span>{" "}
                      we can offer a variety of comprehensive suite of services,
                      Plz. let us know your concerns
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "20px",
                      }}
                    >
                      <div class="wrapperRam">
                        <div class="link_wrapperRam">
                          <button className="ButtonRam" onClick={onShowClick3}>
                            Embedded AI Services
                          </button>

                          <div class="iconRam">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 268.832 268.832"
                            >
                              <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {show3 && (
                      <div
                        className="solutions-for-business-card"
                        style={{ width: "100%", height: "auto" }}
                      >
                        {[
                          {
                            name: "AI_Model_Development_training",
                            label: " AI Model Development and Training:",
                          },
                          {
                            name: "Edge_AI_Deployment",
                            label: "Edge AI Deployment",
                          },
                          {
                            name: "Model_Optimization_Compression",
                            label: "Model Optimization and Compression",
                          },
                          {
                            name: "AI_Driven_Analytics_Insights",
                            label: "AI-Driven Analytics and Insights",
                          },
                          {
                            name: "Embedded_Vision_Systems",
                            label: "Embedded Vision Systems",
                          },
                          {
                            name: "Natural_Language_Processing",
                            label: " Natural Language Processing (NLP)",
                          },
                          {
                            name: "AI_Based_Sensor_Fusion",
                            label: " AI-Based Sensor Fusion",
                          },
                          {
                            name: "Real_Time_AI_Inference",
                            label: "Real-Time AI Inference",
                          },
                          {
                            name: "Custom_AI_Solutions",
                            label: "Custom AI Solutions",
                          },
                          {
                            name: "Integration_with_IoT_Cloud",
                            label: "Integration with IoT and Cloud",
                          },
                        ].map((service) => (
                          <div
                            key={service.name}
                            className="solution-title col-lg-12"
                          >
                            <label style={{ display: "block" }}>
                              <input
                                type="checkbox"
                                name={service.name}
                                checked={
                                  formData.selectedAIServices[service.name]
                                }
                                onChange={handleAICheckboxChange}
                              />
                              <span
                                style={{
                                  fontWeight: "600",
                                  color: "#008F58",
                                  letterSpacing: "0.1em",
                                  marginLeft: "0.4em",
                                }}
                              >
                                {service.label}
                              </span>
                            </label>
                          </div>
                        ))}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <button
                            onClick={closeBox}
                            class="btnRam btn-1 splBtn"
                          >
                            <svg>
                              <rect
                                x="0"
                                y="0"
                                fill="none"
                                width="100%"
                                height="100%"
                              />
                            </svg>
                            submit
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10">
                  <div className="col-lg-12">
                    <p
                      className="paragraph-3"
                      style={{ fontWeight: "600", color: "#1268b3" }}
                    >
                      In the domain of{" "}
                      <span
                        style={{
                          fontWeight: "800",
                          color: "#008F58",
                          letterSpacing: "0.11255em",
                        }}
                      >
                        Embedded HMIS Services
                      </span>{" "}
                      we can offer a variety of comprehensive suite of services,
                      Plz. let us know your concerns
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "20px",
                      }}
                    >
                      <div class="wrapperRam">
                        <div class="link_wrapperRam">
                          <button className="ButtonRam" onClick={onShowClick4}>
                            Embedded HMI Service
                          </button>

                          <div class="iconRam">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 268.832 268.832"
                            >
                              <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {show4 && (
                      <div
                        className="solutions-for-business-card"
                        style={{ width: "100%", height: "auto" }}
                      >
                        {[
                          {
                            name: "HMI_Design_and_Development",
                            label: "HMI Design and Development",
                          },
                          {
                            name: "Custom_HMI_Solutions",
                            label: "Custom HMI Solutions",
                          },
                          {
                            name: "Touchscreen_Integration",
                            label: "Touchscreen Integration",
                          },
                          {
                            name: "Graphics_Rendering",
                            label: "Graphics Rendering",
                          },
                          {
                            name: "Embedded_Operating_Systems",
                            label: "Embedded Operating Systems",
                          },
                          { name: "HMI_Prototyping", label: "HMI Prototyping" },
                          {
                            name: "Performance_Optimization",
                            label: "Performance Optimization",
                          },
                          {
                            name: "Connectivity_Communication",
                            label: "Connectivity and Communication",
                          },
                          {
                            name: "Security_Privacy",
                            label: "Security and Privacy",
                          },
                          {
                            name: " Maintenanc_Support",
                            label: " Maintenance and Support",
                          },
                        ].map((service) => (
                          <div
                            key={service.name}
                            className="solution-title col-lg-12"
                          >
                            <label style={{ display: "block" }}>
                              <input
                                type="checkbox"
                                name={service.name}
                                checked={
                                  formData.selectedHMIServices[service.name]
                                }
                                onChange={handleHMICheckboxChange}
                              />
                              <span
                                style={{
                                  fontWeight: "600",
                                  color: "#008F58",
                                  letterSpacing: "0.1em",
                                  marginLeft: "0.4em",
                                }}
                              >
                                {service.label}
                              </span>
                            </label>
                          </div>
                        ))}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                        >
                          <button
                            onClick={closeBox}
                            class="btnRam btn-1 splBtn"
                          >
                            <svg>
                              <rect
                                x="0"
                                y="0"
                                fill="none"
                                width="100%"
                                height="100%"
                              />
                            </svg>
                            submit
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-floating mb-4">
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    placeholder="Your message"
                    style={{ height: "150px" }}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    data-error="Valid message is required."
                  ></textarea>
                  <label htmlFor="message">
                    Enter more details about your requirements *
                  </label>
                  <div className="valid-feedback"> Looks good! </div>
                  <div className="invalid-feedback">
                    {" "}
                    Please enter your messsage.{" "}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <button
                    class="glow-on-hover mb-4"
                    type="button"
                    onClick={handleSubmit}
                  >
                    SUBMIT YOUR RESPONSE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ErrorModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        newErrors={formErrors}
      />
      {isPopupVisible && <ConfirmPopup onClose={closePopup} />}
    </>
  );
};
export default WhyEmbedded;
