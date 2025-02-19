import React from "react";
import MktData from "./MktData";
import "./bussDetail.css";

import EmulLottie1 from "./lottieFiles/EmulLottie1.json";
import EmulLottie2 from "./lottieFiles/EmulLottie2.json";
import EmulLottie3 from "./lottieFiles/EmulLottie3.json";
import EmulLottie4 from "./lottieFiles/EmulLottie4.json";
import EmulLottie5 from "./lottieFiles/EmulLottie5.json";
import EmulLottie6 from "./lottieFiles/EmulLottie6.json";
import EmulLottie7 from "./lottieFiles/EmulLottie7.json";
import EmulLottie8 from "./lottieFiles/EmulLottie8.json";
import animation1 from "./lottieFiles/WorkingMan.json";
import animation2 from "./lottieFiles/Animation - 1711442796353.json"
import animation3 from "./lottieFiles/Animation - 1711442882485.json"
import animation4 from "./lottieFiles/Animation - 1711442948648.json"
import animation5 from "./lottieFiles/Animation - 1711443084087.json"
import animation6 from "./lottieFiles/Animation - 1711443131981.json"
import BannerZoom from "./BannerZoom";
import chip1 from "./images/chip1.jpg";
import chip2 from "./images/chip2.jpg";
import chip3 from "./images/chip3.jpg";


const MktPage = () => {
  const images = [chip1, chip2, chip3];
  const heading1 = "Market Research";
  const heading2="Our Framework outlines how we creates, delivers, captures value, and ideas into beautiful things."

  
  const MktData1 = [
    {
      id: 0,
      lottie: EmulLottie1,
      animation:EmulLottie1,
      title: "Trends and Forecasts",
      detail:"We are specilized in Analyzing current trends in the semiconductor industry, such as emerging technologies (e.g., AI chips, 5G, IoT), shifts in market demand (e.g., automotive, consumer electronics, data centers). Upon this, we forecasts our semiconductor market segments and key regions."
    },
    {
      id: 1,
      lottie: EmulLottie2,
      animation:EmulLottie2,
      title: "Industry News and Developments",
      detail:"We always updated our Teams on the latest news and developments in the semiconductor industry, including mergers and acquisitions, strategic partnerships, product launches, and regulatory updates. And alos Highlight significant events and their potential impact on the market."
    },
    {
      id: 2,
      lottie: EmulLottie3,
      animation:EmulLottie3,
      title: "Technology Insights",
      detail:"We Offer analysis of semiconductor technologies, manufacturing processes, and innovations. How can we do advancements in chip design techniques. We are also Exploring emerging trends like quantum computing, neuromorphic computing."
    },
    {
      id: 3,
      lottie: EmulLottie4,
      animation:EmulLottie4,
      title: "Market Drivers and Challenges",
      detail:"What are the key drivers who influencing the semiconductor market, such as increasing demand for computing power, expanding applications of semiconductors in various industries, and technological advancements driving innovation."
    },
    {
      id: 4,
      lottie: EmulLottie5,
      animation:EmulLottie5,
      title: "Competitive Landscape",
      detail:"We Know very well about the competitive landscape of the semiconductor industry, including major players, market share analysis, and competitive strategies. Based on these factors we Evaluate strengths, weaknesses, opportunities, and threats (SWOT analysis) for key semiconductor companies."
    },
    {
      id: 5,
      lottie: EmulLottie6,
      animation:EmulLottie6,
      title: "Market Segmentation",
      detail:"We are working in semiconductor market based on product types (e.g., memory chips, microprocessors, sensors), end-user industries (e.g., automotive, healthcare, aerospace), and geographic regions. We Analyze growth opportunities and challenges for each segment, for our future products."
    },
    {
      id: 6,
      lottie: EmulLottie7,
      animation:EmulLottie7,
      title: "Emerging Markets and Applications",
      detail:"We always explore emerging markets and applications driving demand for semiconductors, such as AI, machine learning, autonomous vehicles, virtual reality, and augmented reality. Assess market opportunities and challenges in these emerging segments."
    },
    {
      id: 7,
      lottie: EmulLottie8,
      animation:EmulLottie8,
      title: "Industry Events and Conferences",
      detail:"We are always in industry events, conferences, and trade shows related to the semiconductor industry. And collected summaries, highlights, and insights from keynote speeches, panel discussions, and technical sessions."
    },
  ];


  return (
    <>
    <section class="wrapper-border bg-light mt-5">
        <BannerZoom images={images} heading1={heading1} heading2={heading2}/>
      </section>
    
    <section className="wrapper-border angled lower-end BackBannerMkt">
      <div className="container py-14 py-md-10">
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
            <MktData MktData1={MktData1[0]} />  
        </div>
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
            <MktData MktData1={MktData1[1]} />
        </div>
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
            <MktData MktData1={MktData1[2]} />
        </div>
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
            <MktData MktData1={MktData1[3]} />
        </div>
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
            <MktData MktData1={MktData1[4]} />
        </div>
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
            <MktData MktData1={MktData1[5]} />
        </div>
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
            <MktData MktData1={MktData1[6]} />
        </div>
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
            <MktData MktData1={MktData1[7]} />
        </div>
      </div>
    </section>
    </>
  );
};

export default MktPage;
