import React, { useState, useRef } from "react";
import "./CarrerPage.css";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import axios from "axios";
import Popup from "./Popup";
import { useInView } from "react-intersection-observer";
import { Player } from "@lottiefiles/react-lottie-player";
import { RotatingLines } from "react-loader-spinner";

import HeadSection from "./HeadSection";
import carrier from "./assets/careers.jpg";
import circle5 from "./lottieFiles/BackGround6.json";

import JobList from "./JobList";
import EmpQuotes1 from "./EmpQuotes1";
import CardCar from "./CardCar";
import TextBack from "./TextBack";

import allEmployee from "./assets/allEmployee.jpeg";
import Directors from "./assets/Directors.jpeg";
import Techsoc_Emp1 from "./assets/Techsoc_Emp1.jpeg";
import TeamLunch1 from "./assets/TeamLunch1.jpeg";
import Techsoc_Emp2 from "./assets/Techsoc_Emp2.jpeg";
import RamaKrishna from "./assets/RamaKrishna.jpeg";
import Tapasi_welcome from "./assets/Tapasi_welcome.jpeg";
import Puja from "./assets/Puja.jpeg";
import TeamLunch2 from "./assets/TeamLunch2.jpeg";

import Conference3 from "./assets/Conference3.jpeg";
import Conference2 from "./assets/Conference2.jpeg";
import Conference1 from "./assets/Conference1.jpeg";

import ImageSlider from "./ImageSlider";
import JobCard from "./JobCard";

const CarrerPage = () => {
  const images = [
    allEmployee,
    Directors,
    Techsoc_Emp1,
    Techsoc_Emp2,
    Puja,
    Conference1,
    Conference2,
    Conference3,
    TeamLunch1,
    TeamLunch2,
    RamaKrishna,
    Tapasi_welcome,
  ];
  const titles = [
    "Meet Our Teammates",
    "Our inspiration",
    "Collaborating effectively as a team.",
    "Enjoying Together As a Team",
    "Join us in celebrating Puja with joy, prayers, and togetherness!",
    "Collaboration Fuels Success",
    "Stronger Together",
    "Empowerment Through Support",
    "Gathering for Good Food and Fun",
    "Bonding Over Lunch",
    "Welcoming Our New Senior Team Member",
    "Empowering Success from Day One",
  ];
  const descriptions = [
    "Meet our skilled teammates, each bringing expertise in VLSI design, verification, and hardware engineering to drive innovation and success in our projects",
    "Our directors are visionary leaders with deep expertise in VLSI design and verification, guiding our team with strategic insights and a passion for innovation",
    "Working together with unity and purpose",
    "Join us for a great opportunity to relax, bond, and enjoy great work culture together.",
    "Let’s come together to celebrate the joy of Puja, embracing the festive spirit with prayers, togetherness, and happiness.",
    "Teamwork is the foundation of our success, where collaboration leads to innovative solutions.",
    "Together, we can achieve more than we could alone, combining our strengths for greater impact.",
    "By fostering a supportive environment, we empower each other to excel and reach our common goals.",
    "Join us for a delightful team lunch, where we can enjoy delicious food and share laughter together!",
    "Let's strengthen our connections and build camaraderie during this special team lunch.",
    "We are excited to onboard our new Sr. RTL Manager, bringing their expertise and fresh perspectives to our team!",
    "Our onboarding process is designed to ensure our senior members feel supported and equipped to make an immediate impact.",
  ];
  const links = [
    "/CarrierPage",
    "/CarrierPage",
    "/CarrierPage",
    "/CarrierPage",
    "/CarrierPage",
    "/CarrierPage",
    "/CarrierPage",
    "/CarrierPage",
    "/CarrierPage",
    "/CarrierPage",
    "/CarrierPage",
    "/CarrierPage",
  ];

  const [isDataLoading, setIsDataLoading] = useState(false);

  function Loader() {
    return (
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    );
  }

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSelectQual = (value) => {
    setFormData({ ...formData, qualification: value });
  };

  const handleSelectExp = (value) => {
    setFormData({ ...formData, experience: value });
  };

  const handleSelectDomain = (value) => {
    setFormData({ ...formData, domain: value });
  };

  const handleSelectRole = (value) => {
    setFormData({ ...formData, role: value });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDataLoading(true);
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
      setIsDataLoading(false);
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
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const [ref8, inView8] = useInView({});
  const [ref3, inView3] = useInView({});
  const [ref4, inView4] = useInView({});

  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const variants1 = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <section className="wrapper bg-soft-primary">
        <HeadSection
          header1="Careers"
          header2="We bring solutions to make life easier."
          imageUrl={carrier}
        />
      </section>
      {/* <div class="container mt-0"></div> */}
      <section class="wrapper bg-light">
        <div class="container pt-14 pb-5 pt-md-16">
          <div class="row">
            <div class="col-md-6 pb-5">
              <p class="lead" style={{fontWeight:'400'}}>
                At TechsoC we have confidence in engaging your capacities and
                releasing your true capacity. Continuously! Representatives at
                TechsoC approach expertise improvement preparing, studios,
                client openness, and on location travel open doors. Being an
                innovation advancement centered organization, we give
                imaginative activities and suggestions to deal with, and
                continually perceive your endeavors.
              </p>
              <hr class="double my-8" />
              <div class="row">
                <motion.div
                  ref={ref8}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView8 ? "visible" : "hidden"}
                  variants={variants1}
                  transition={{ duration: 1, delay: 0.3 }}
                  class="col-md-6 col-lg-4"
                >
                  <div class="icon btn btn-block btn-lg btn-soft-primary disabled mb-6">
                    <Icon icon="emojione-v1:repeat-button" />
                  </div>
                  <h4>Collaboration</h4>
                  <p class="mb-3">
                    We believe that teamwork delivers the very best solutions
                    for our customers.
                  </p>
                </motion.div>

                <motion.div
                  ref={ref8}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView8 ? "visible" : "hidden"}
                  variants={variants1}
                  transition={{ duration: 1, delay: 0.5 }}
                  class="col-md-6 col-lg-4"
                >
                  <div class="icon btn btn-block btn-lg btn-soft-primary disabled mb-6">
                    <Icon icon="fxemoji:lightbulb" />
                  </div>
                  <h4>Innovation</h4>
                  <p class="mb-3">
                    We create semiconductors that move data faster and more
                    reliable than anyone else.
                  </p>
                </motion.div>

                <motion.div
                  ref={ref8}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView8 ? "visible" : "hidden"}
                  variants={variants1}
                  transition={{ duration: 1, delay: 0.7 }}
                  class="col-md-6 col-lg-4"
                >
                  <div class="icon btn btn-block btn-lg btn-soft-primary disabled mb-6">
                    <Icon icon="bi:globe" />
                  </div>
                  <h4>Community</h4>
                  <p class="mb-3">
                    We believe in a strong culture, corporate citizenship and
                    industry leadership.
                  </p>
                </motion.div>
              </div>
            </div>
            <div class="col-md-6 pb-5">
              <p class="lead" style={{fontWeight:'400'}}>
                We are engaged towards steady development and consumer loyalty.
                Our excursion of the cutting edge inventive item plan and
                assembling keeps you drew in with applying your learnings
                continually. Every donor at TechsoC deals with the most recent
                innovation. There is a long way to go at TechsoC, as we cater
                from 5G to Networking, Cloud to Apps, IoT to Vision. Leave on a
                profession venture where you get to deal with the leading|edge
                advances, devices and your energy to make the arrangements of
                today! Come join the club of trailblazers and give wings to your
                fantasies!
              </p>

              <p class="lead" style={{fontWeight:'400'}}>
                Be a piece of the TechsoC group for an on the up and up venture!
              </p>
            </div>
            <TextBack />

            <hr class="double my-8" />

            <div class="row gx-md-8 gy-8 my-5 my-md-5">
              <div class="col-md-12 col-lg-12 col-sm-12" data-cue="slideInLeft">
                <div class="life-at">
                  <div>
                    <h3>Life at TechsoC</h3>
                    <p>
                      You'll see your thoughts set to work, share in the
                      progress of the organization, and carry on with a sound
                      life in a solid culture of corporate citizenship and
                      industry authority. Come assist with concocting what's to
                      come! Investigate our profession open doors.
                    </p>
                    <CardCar />
                  </div>
                </div>
              </div>
              <hr class="double my-8" />

              <div class="row gx-md-8 gx-lg-12 gy-3 gy-lg-0 mb-md-10 mb-3">
                <p
                  class="font-w-100 text-center"
                  style={{
                    color: "#008F58",
                    fontWeight: "bold",
                    fontSize: "1.25em",
                    lineHeight: "1.5em",
                  }}
                >
                  At TechsoC, we believe in honoring outstanding accomplishments
                  and celebrating the dedication and hard work of our team
                  members. In this section, we proudly showcase the numerous
                  awards and accolades earned by individuals and teams who have
                  demonstrated exceptional talent, innovation, and commitment to
                  excellence.
                </p>
                <hr class="double my-8" />
                <div class="col-md-12 col-lg-12 col-sm-12">
                  <ImageSlider
                    images={images}
                    titles={titles}
                    descriptions={descriptions}
                    links={links}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container pt-17 pt-md-17 pb-10 pb-md-0 pt-xs-17">
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        >
          <Player
            autoplay
            loop
            src={circle5}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <div class="row gx-md-8 gx-lg-12 gy-3 gy-lg-0 mb-md-10 mb-3">
          <div class="col">
            <EmpQuotes1 />
          </div>
        </div>
      </div>
      <hr className="double my-6" />

      {isPopupVisible && <Popup onClose={closePopup} />}
    </>
  );
};

export default CarrerPage;
