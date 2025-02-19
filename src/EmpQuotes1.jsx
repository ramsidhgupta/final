import React, {useState} from "react";
import "./EmpQuotes1.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import personOne from "./images/female.avif";
import personTwo from "./images/person2.jpg";
import personThree from "./images/sharath.jpg";
import sharath from "./images/sharath.jpg";


import ComponentCall from "./ComponentCall";




const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const EmpQuotes1 = () => {
  

  const [animationClass, setAnimationClass] = useState("animate-box");
  const [animationClass1, setAnimationClass1] = useState("progressBar");
  

  const handleBeforeChange = () => {
    setAnimationClass("");
    setAnimationClass1("");
  };

  const handleAfterChange = () => {
    setTimeout(() => {
      setAnimationClass("animate-box");
      setAnimationClass1("progressBar");
     
    }, 100);
  };
  

  return (
    <>
      <div className="intro">
          <h2 className="text-center fw-bold">Testimonials</h2>
          <p className="text-center fw-bold">
            Our employees love us! Read what they have to say below. 
          </p>
        </div>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={8000}
          keyBoardControl={true}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
          beforeChange={handleBeforeChange}
          afterChange={handleAfterChange}
          pauseOnHover={false}
          arrows={true}
        >
            <ComponentCall
            description="“Of all the many things that I appreciate about working at TechsoC, I think that the culture that we’ve built and are continuously building is what separates us from other organizations. It’s a culture that embraces flexibility, celebrates diversity of thought and approach, and one that makes it easier to come to work every day. It’s been an awesome 2 years and I’m excitedly looking forward to the next 5!” "
            image={personOne}
            name="MDL Bhavani"
            role="SoC Verification Engineer"
            skillDevelopment={100}
            workSatisfaction={90}
            workLife={82}
            jobSecurity={96}
            salaryBenefit={96}
            companyCulture={98}
            promotion={82}
            handleBeforeChange={handleBeforeChange}
            handleAfterChange={handleAfterChange}
            animationClass={animationClass}
            animationClass1={animationClass1}
          />
          <ComponentCall
            description="“I feel valued and appreciated as a member of the team, and I'm constantly learning and growing in my role.”"
            image={personTwo}
            name="Ram Sidh"
            role="Web Developer"
            skillDevelopment={85}
            workSatisfaction={90}
            workLife={92}
            jobSecurity={86}
            salaryBenefit={95}
            companyCulture={92}
            promotion={82}
            handleBeforeChange={handleBeforeChange}
            handleAfterChange={handleAfterChange}
            animationClass={animationClass}
            animationClass1={animationClass1}
          />
          
          <ComponentCall
            description="“As a Senior Verification Engineer, I have had the opportunity to work on complex designs and develop my technical skills in functional verification. Also, I have appreciated the collaborative and supportive work environment, which has allowed me to grow both personally and professionally.”"
            image={personThree}
            name="Ravi Teja"
            role="Sr. Verification Engineer"
            skillDevelopment={80}
            workSatisfaction={87}
            workLife={92}
            jobSecurity={86}
            salaryBenefit={86}
            companyCulture={82}
            promotion={80}
            handleBeforeChange={handleBeforeChange}
            handleAfterChange={handleAfterChange}
            animationClass={animationClass}
            animationClass1={animationClass1}
          />
          <ComponentCall
            description="“I enjoy and look forward to showing up for work every day because of my amazing team! i work with some of the brightest, friendliest and most hard working people that push the needle even further for our company. Every day is a new opportunity for me to learn and grow in my professional Life.” "
            image={sharath}
            name="Sharath A"
            role="DFT Engineer"
            skillDevelopment={95}
            workSatisfaction={92}
            workLife={90}
            jobSecurity={85}
            salaryBenefit={88}
            companyCulture={90}
            promotion={80}
            handleBeforeChange={handleBeforeChange}
            handleAfterChange={handleAfterChange}
            animationClass={animationClass}
            animationClass1={animationClass1}
          />
        </Carousel>
      
    </>
  );
};

export default EmpQuotes1;
