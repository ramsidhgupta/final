// import React from "react";
// import { Player } from "@lottiefiles/react-lottie-player";
// import "./ValueProp.css";
// import ValueData from "./ValueData";


// import "./bussDetail.css";
// import BannerZoom from "./BannerZoom";
// import chip1 from "./images/chip1.jpg";
// import chip2 from "./images/chip2.jpg";
// import chip3 from "./images/chip3.jpg";


// import circle5 from "./lottieFiles/ram/Animation - 1711810550918.json" //For Background image
// import LottieImage from "./lottieFiles/circuit2.json";
// import Value from "./lottieFiles/Animation - 1711696420419.json"


// import Employee from "./lottieFiles/WorkingMan.json"
// import Reward from "./lottieFiles/Animation - 1711442796353.json"
// import Listen from "./lottieFiles/AnimatioListin.json";
// import CustomerReview from "./lottieFiles/Customerreview.json";
// import Finance from "./lottieFiles/finance-target-6573089.json";
// import GlobalCulture from "./lottieFiles/Globalculture.json";
// import Support from "./lottieFiles/support.json";
// import Trust from "./lottieFiles/Trust.json";
// import WorkCulture from "./lottieFiles/work-culture.json";
// import WorkLife from "./lottieFiles/Worklife.json";


// const BussDetail = () => {
//   const images = [chip1, chip2, chip3];
//   const heading1 = "Value Proposition";
  

//   const ValueData1 = [
//     {
//       id: 1,
//       lottie1: Employee,
//       lottie2: Reward,
//       title1: "Employee Fullfilment",
//       title2:"",
//       title3:"Rewarding and recognizing employees",
//       title4:"",
//       detail1:" We take great care to ensure we recruit the right person for the right job. Recruiting right does not end with an offer letter. We nurture and encourage employees to drive their careers forward at TechsoC, ensuring they are working on tasks that best matches their skill sets and experience at all times.",
//       details2:"Our employees are our greatest asset and the primary reason of our success. We recognize, reward, and celebrate their accomplishments.",
//     },
//     {
//       id: 2,
//       lottie1: Listen,
//       lottie2:CustomerReview,
//       title1: "Listen to Them and Lead the Way",
//       title2:"",
//       title3:"Customer Evangelism",
//       title4:"Work for Them It works for Us",
//       detail1:"Customer satisfaction and loyalty start with listening. Listening to customers and really understanding what they are saying, is critical to build effective solutions that meet their needs.",
//       details2:"We exist due to the very existence of our customers. We listen to our customer intently and understand their need and expectations in totality. We build a transparent relation with our customer by committing what we can do and ensure that we keep our commitments. We delight them in delivering more than what is expected from us.",
//     },
//     {
//       id: 3,
//       lottie1: Trust,
//       lottie2: WorkLife,
//       title1: "Trust",
//       title2:"",
//       title3:"Work-life balance",
//       title4:"",
//       detail1:" We emphasize integrity in every aspect of our operations. We treat our employees with respect, fairness and integrity at all times and expects the same in return. We must be scrupulously truthful with our clients, our coworkers, and ourselves in our professional and personal actions and work",
//       details2:"We encourage our employees to balance their work and personal responsibilities through various programs. We strive to provide employees with the tools and opportunities necessary to maintain a healthy, balanced lifestyle.",
//     },
//     {
//       id: 4,
//       lottie1: Support,
//       lottie2: Finance,
//       title1: "Personal Support",
//       title2:"",
//       title3:"Career Pathing Towards Growth & FulFillment",
//       title4:"",
//       detail1:"We seek to provide employees an environment where the company helps them exceed their own expectations. Equally, we want them to feel that they can count on the company to help them deal with personal problems that might adversely impact their work performance, health, and well-being.",
//       details2:"We are committed to providE employees with opportunities for personal and professional growth. We encourage investment in continuing education and training, and provide multiple opportunities for professional advancement and empowerment within the company.",
//     },
//     {
//       id: 5,
//       lottie1: GlobalCulture,
//       lottie2: WorkCulture,
//       title1: "Work Culture",
//       title2:"Code of Ethics",
//       title3:"Global Culture",
//       title4:"Utilizing global skills and respect cultural diversity",
//       detail1:" Integrity, honesty, credibility, and reliability are the foundation of who we are at TechsoC. Our Code of Ethics and Core Values are expectations of professional behavior that extends to all employees both in their interactions with one another and with others.",
//       details2:" We embrace diversity of people, cultures, races, and religions. We see it as a critical advantage in our quest to become a global leader in our chosen space. We are committed to invest in multi-cultural awareness programs to enhance partnerships and help benefit our customers and employees across different geographies.",
//     },
 
//   ]
 


//   return (
//     <>
//       <section className="wrapper-border mt-5">
//       {/* <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: -1,
//         }}
//       >
//         <Player
//           autoplay
//           loop
//           src={circle5}
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//           }}
//         /> 
//       </div> */}
      
//         <div className="container py-10 py-md-10" style={{color:"white"}}>
        
//           <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
//             <div className="col-lg-5">
//               <div className="overlap-grid overlap-grid-2">
//                 <div className="">
               
//                 <Player
//                   src={Value}
//                   className="player"
//                   loop
//                   autoplay
//                   style={{ height: "90vh", width: "100%" }}
//                 />
//                 </div>
                
//               </div>
//             </div>

//             <div className="col-lg-7 d-flex flex-column justify-content-center align-items-start mb-0">
//               <div className="d-flex align-items-center">
//                 <Player
//                   src={LottieImage}
//                   className="player"
//                   loop
//                   autoplay
//                   style={{ height: "60px", width: "60px" }}
//                 />
//                 <h2 className="display-4 ms-3">{heading1}</h2>
//               </div>
//               <p className="lead">
//                 At TechsoC, we offer a professional and stimulating work
//                 environment that values integrity and a culture that draws on
//                 each others capabilities and experiences to motivate and inspire
//                 one another to give of our best as we help clients become
//                 high-performance businesses. Our Core Values have shaped the
//                 culture and defined the character of our young company, guiding
//                 how we function, behave and make decisions.
//               </p>
//             </div>
            
            
//             <hr class="double my-8" />
            
            
//             <div className="row gy-3 gx-xl-8 mt-1">
//               <ValueData ValueData1={ValueData1[0]} /> 
//             </div>

//             <hr class="double my-8" />
            
            
//             <div className="row gy-3 gx-xl-8 mt-1">
//               <ValueData ValueData1={ValueData1[1]} /> 
//             </div>
//             <hr class="double my-8" />
            
            
//             <div className="row gy-3 gx-xl-8 mt-1">
//               <ValueData ValueData1={ValueData1[2]} /> 
//             </div>

//             <hr class="double my-8" />
            
            
//             <div className="row gy-3 gx-xl-8 mt-1">
//               <ValueData ValueData1={ValueData1[3]} /> 
//             </div>

//             <hr class="double my-8" />
            
            
//             <div className="row gy-3 gx-xl-8 mt-1">
//               <ValueData ValueData1={ValueData1[4]} /> 
//             </div>




//             </div>
//           </div>
    
//       </section>
//     </>
//   );
// };

// export default BussDetail;

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./ValueProp.css";
import ValueData from "./ValueData";


import "./bussDetail.css";
import BannerZoom from "./BannerZoom";
import chip1 from "./images/chip1.jpg";
import chip2 from "./images/chip2.jpg";
import chip3 from "./images/chip3.jpg";


import circle5 from "./lottieFiles/ram/Animation - 1711810550918.json" //For Background image
import LottieImage from "./lottieFiles/circuit2.json";
import Value from "./lottieFiles/Animation - 1711696420419.json"


import Employee from "./lottieFiles/WorkingMan.json"
import Reward from "./lottieFiles/Animation - 1711442796353.json"
import Listen from "./lottieFiles/AnimatioListin.json";
import CustomerReview from "./lottieFiles/Customerreview.json";
import Finance from "./lottieFiles/finance-target-6573089.json";
import GlobalCulture from "./lottieFiles/Globalculture.json";
import Support from "./lottieFiles/support.json";
import Trust from "./lottieFiles/Trust.json";
import WorkCulture from "./lottieFiles/work-culture.json";
import WorkLife from "./lottieFiles/Worklife.json";


const BussDetail = () => {
  const images = [chip1, chip2, chip3];
  const heading1 = "Value Proposition";
  

  const ValueData1 = [
    {
      id: 1,
      lottie1: Employee,
      lottie2: Reward,
      title1: "Employee Fullfilment",
      title2:"",
      title3:"Rewarding and recognizing employees",
      title4:"",
      detail1:" We take great care to ensure we recruit the right person for the right job. Recruiting right does not end with an offer letter. We nurture and encourage employees to drive their careers forward at TechsoC, ensuring they are working on tasks that best matches their skill sets and experience at all times.",
      details2:"Our employees are our greatest asset and the primary reason of our success. We recognize, reward, and celebrate their accomplishments.",
    },
    {
      id: 2,
      lottie1: Listen,
      lottie2:CustomerReview,
      title1: "Listen to Them and Lead the Way",
      title2:"",
      title3:"Customer Evangelism",
      title4:"Work for Them It works for Us",
      detail1:"Customer satisfaction and loyalty start with listening. Listening to customers and really understanding what they are saying, is critical to build effective solutions that meet their needs.",
      details2:"We exist due to the very existence of our customers. We listen to our customer intently and understand their need and expectations in totality. We build a transparent relation with our customer by committing what we can do and ensure that we keep our commitments. We delight them in delivering more than what is expected from us.",
    },
    {
      id: 3,
      lottie1: Trust,
      lottie2: WorkLife,
      title1: "Trust",
      title2:"",
      title3:"Work-life balance",
      title4:"",
      detail1:" We emphasize integrity in every aspect of our operations. We treat our employees with respect, fairness and integrity at all times and expects the same in return. We must be scrupulously truthful with our clients, our coworkers, and ourselves in our professional and personal actions and work",
      details2:"We encourage our employees to balance their work and personal responsibilities through various programs. We strive to provide employees with the tools and opportunities necessary to maintain a healthy, balanced lifestyle.",
    },
    {
      id: 4,
      lottie1: Support,
      lottie2: Finance,
      title1: "Personal Support",
      title2:"",
      title3:"Career Pathing Towards Growth & FulFillment",
      title4:"",
      detail1:"We seek to provide employees an environment where the company helps them exceed their own expectations. Equally, we want them to feel that they can count on the company to help them deal with personal problems that might adversely impact their work performance, health, and well-being.",
      details2:"We are committed to providE employees with opportunities for personal and professional growth. We encourage investment in continuing education and training, and provide multiple opportunities for professional advancement and empowerment within the company.",
    },
    {
      id: 5,
      lottie1: GlobalCulture,
      lottie2: WorkCulture,
      title1: "Work Culture",
      title2:"Code of Ethics",
      title3:"Global Culture",
      title4:"Utilizing global skills and respect cultural diversity",
      detail1:" Integrity, honesty, credibility, and reliability are the foundation of who we are at TechsoC. Our Code of Ethics and Core Values are expectations of professional behavior that extends to all employees both in their interactions with one another and with others.",
      details2:" We embrace diversity of people, cultures, races, and religions. We see it as a critical advantage in our quest to become a global leader in our chosen space. We are committed to invest in multi-cultural awareness programs to enhance partnerships and help benefit our customers and employees across different geographies.",
    },
 
  ]
 


  return (
    <>
      <section className="wrapper-border mt-4">
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
      
        <div className="container py-10 py-md-10">
        
          <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
            <div className="col-lg-5">
              <div className="overlap-grid overlap-grid-2">
                <div className="">
               
                <Player
                  src={Value}
                  className="player"
                  loop
                  autoplay
                  style={{ height: "90vh", width: "100%" }}
                />
                </div>
                
              </div>
            </div>

            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-start mb-0">
              <div className="d-flex align-items-center">
                <Player
                  src={LottieImage}
                  className="player"
                  loop
                  autoplay
                  style={{ height: "60px", width: "60px" }}
                />
                <h2 className="display-4 ms-3">{heading1}</h2>
              </div>
              <p className="lead">
                At TechsoC, we offer a professional and stimulating work
                environment that values integrity and a culture that draws on
                each others capabilities and experiences to motivate and inspire
                one another to give of our best as we help clients become
                high-performance businesses. Our Core Values have shaped the
                culture and defined the character of our young company, guiding
                how we function, behave and make decisions.
              </p>
            </div>
            
            
            <hr class="double my-8" />
            
            
            <div className="row gy-3 gx-xl-8 mt-1">
              <ValueData ValueData1={ValueData1[0]} /> 
            </div>

            <hr class="double my-8" />
            
            
            <div className="row gy-3 gx-xl-8 mt-1">
              <ValueData ValueData1={ValueData1[1]} /> 
            </div>
            <hr class="double my-8" />
            
            
            <div className="row gy-3 gx-xl-8 mt-1">
              <ValueData ValueData1={ValueData1[2]} /> 
            </div>

            <hr class="double my-8" />
            
            
            <div className="row gy-3 gx-xl-8 mt-1">
              <ValueData ValueData1={ValueData1[3]} /> 
            </div>

            <hr class="double my-8" />
            
            
            <div className="row gy-3 gx-xl-8 mt-1">
              <ValueData ValueData1={ValueData1[4]} /> 
            </div>




            </div>
          </div>
    
      </section>
    </>
  );
};

export default BussDetail;



