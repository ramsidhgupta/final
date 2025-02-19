import React from "react";
import "./StackCards.css";
import "./AppRough.css";
import "animate.css";
import { Player } from "@lottiefiles/react-lottie-player";

import { useInView } from "react-intersection-observer";
import { ReactComponent as MySVG1 } from './SVG/first.svg';
import { ReactComponent as FineTune } from './SVG/FineTune.svg';
import { ReactComponent as Complete } from './SVG/Complete.svg';
import { ReactComponent as Together } from './SVG/together.svg';
import StackLottie1 from './lottieFiles/Animation - 1711443131981.json';
const StackCards = () => {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();

  
  
  return (
    <>
      <div class="container py-3">
        <article class="bg-0">
          <h1>Quality along the product lifecycle</h1>
          <h2>We live quality in our daily work – in our cleanrooms, our labs and our offices</h2>
          <h5>Quality is a decisive competitive advantage. For this reason, quality is an integral part of the whole product lifecycle</h5>
          <h5>from development and production to delivery and associated product services.</h5>
        </article>

        <section class="holder">
          {/* <header class="holder__head1 bg-3 fw-bold">
            1 STEP &mdash; Trend analysis
          </header> */}
          <article class="holder__item1 bg-3">
            
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <p className="FontStyle">
                    Our society is in a state of constant change. New challenges and requirements emerge, changing our markets. We always keep an eye on these developments. Based on out observations, together with our customers we determine which products are needed in order to offer safe and green solutions that are successful in the market.
                    </p>
                  </div>
               <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div class="card-body">
                    <MySVG1  style={{
                  height: "400px",
                  width: "100%",}}/>
                  </div>
                </div>
              </div>
            
          </article>

          {/* <header class="holder__head2 bg-0 fw-bold">
            2 STEP &mdash; Definition
          </header> */}
          <article class="holder__item2 bg-0 ">
            
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                 
                    <p className="FontStyle">
                        Then we define the requirements a new product has to fulfill. The decisive factor here is the system in which our customer will use a chip from TechsoC. For example, applications in a car call for properties quite different from those needed in a smartphone. Our design engineers then translate these requirements into a theoretical chip construction. This step already takes subsequent manufacturing techniques into account.
                    </p>
                 
                </div>

                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div class="card-body">
                    <Together  style={{
                  height: "640px",
                  width: "100%",}}/>
                   
                  </div>
                </div>
              </div>
            
          </article>

          {/* <header class="holder__head3 bg-2 fw-bold">
            3 STEP &mdash; Implementation
          </header> */}
          <article class="holder__item3 bg-2">
            
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  
                    <p className="FontStyle">
                    Now questions with a decisive bearing on realization are answered: What technology is best suited? How can we guarantee the necessary reliability of the product? Which of our sites are candidates for manufacturing? When this phase is over we have turned the theoretical concept into initial chip prototypes and have produced samples in small quantities.
                    </p>
                  </div>
                
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div class="card-body" >
                    <FineTune  style={{
                  height: "640px",
                  width: "100%",}}/>
                    </div>
                </div>
              </div>
            
          </article>

          {/* <header class="holder__head4 bg-1 fw-bold">
            4 STEP &mdash; Verification and validation
          </header> */}
          <article class="holder__item4 bg-1">
            
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                 
                    <p className="FontStyle">
                    In the next step we check whether or not the product fulfills all the defined requirements. We provide our customers with samples so that they can test the product in the intended applications. At the same time the manufacturing technology is refined and a manufacturing plan is formulated so that the product can then be produced in larger quantities.
                    </p>
                  </div>
                
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div class="card-body">
                  <Player
                src={StackLottie1}
                className="player"
                loop
                autoplay
                style={{
                  height: "640px",
                  width: "100%",
                 
                }}
              />
                  </div>
                </div>
              </div>
            
          </article>


          {/* <header class="holder__head5 bg-1 fw-bold">
            5 STEP &mdash; Ramp-down
          </header> */}
          <article class="holder__item5 bg-1">
            
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  
                    <p className="FontStyle">
                    Once a product has reached "end-of-life", we remove it from production in a process planned on a long-term basis. We inform our customers with sufficient lead time and continue to supply the agreed level of quality. Often we have already developed a functionally improved successor product. We continue to meet all our commitments – from the first chip to the very last.</p>
                  </div>
                
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div class="card-body">
                    <Complete  style={{
                  height: "640px",
                  width: "100%",}}/>
                  </div>
                </div>
              </div>
          
          </article>




          











        </section>
      </div>
    </>
  );
};

export default StackCards;
