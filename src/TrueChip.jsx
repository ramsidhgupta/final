import React, { useRef, useEffect, useState }  from "react";
import "./TrueChip.css";

const TrueChip = () => {


    const containerRef = useRef(null);
    const [items, setItems] = useState([]);
    const [scrollingListener, setScrollingListener] = useState(null);
    const [scrolling, setScrolling] = useState(false);
  
    useEffect(() => {
    // console.log("Element to observe:", element.element);
      const observer = new IntersectionObserver(stackCardsCallback);
      observer.observe(containerRef.current);
  
      return () => {
        if (scrollingListener) {
          window.removeEventListener("scroll", scrollingListener);
          setScrollingListener(null);
        }
      };
    }, []);
  
    useEffect(() => {
      if (items.length > 0 && !scrollingListener) {
        const listener = stackCardsScrolling;
        setScrollingListener(listener);
        window.addEventListener("scroll", listener);
      }
    }, [items, scrollingListener]);
  
    const stackCardsCallback = (entries) => {
      if (entries[0].isIntersecting) {
        if (scrollingListener) return;
        stackCardsInitEvent();
      } else {
        if (!scrollingListener) return;
        window.removeEventListener("scroll", scrollingListener);
        setScrollingListener(null);
      }
    };
  
    const stackCardsInitEvent = () => {
      setItems(containerRef.current.getElementsByClassName("card"));
    };
  
    const stackCardsScrolling = () => {
      if (scrolling) return;
      setScrolling(true);
      window.requestAnimationFrame(animateStackCards);
    };
  
    const animateStackCards = () => {
      const top = containerRef.current.getBoundingClientRect().top;
      const offsetTop = 100;
      const cardHeight = 300;
      const marginY = 15;
      for (let i = 0; i < items.length; i++) {
        const scrolling = offsetTop - top - i * (cardHeight + marginY);
        if (scrolling > 0) {
          items[i].setAttribute(
            "style",
            `transform: translateY(${marginY * i}px) scale(${(cardHeight - scrolling * 0.05) / cardHeight});`
          );
        }
      }
      setScrolling(false);
    };
  


  return (
    <>
      <div class="container">
        <div class="jumbotron text-center mt-3">
          <h1>Gerardo</h1>
        </div>
        <div class="container card-deck-js">
          <div class="card" style={{transform:'translateY(0px)'}}>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="vh-100 text-center mt-5">Footer</div>
      </div>
      {/* <div class="section1">
        <div class="containerChip">
          <h1 class="wow bounceIn">Verification IPs & Silicon IPs</h1>
          <div class="wow bounceIn">
            <p>
              Truechip&nbsp;
              <a
                href="https://www.truechip.net/product/verification-ip/s-592834231"
                style={{textDecoration:"none"}}
              >
                Verification IPs
              </a>
              are designed with full debug, full functional coverage and full
              protocol checkers. Based on SystemVerilog and UVM, it will
              integrate smoothly into standard SystemVerilog/UVM flows.
            </p>
          </div>
        </div>
      </div>
      <div id="parallax-bg" class="looking-for" style={{padding:0}}>
        <div class="looking-main">
          <div class="looking-containt">
            <div class="looking-containt-box wow fadeInLeft">
              <div class="thumb">
                <a
                  href="https://www.truechip.net/automation-products.php"
                  class="image_icon"
                >
                  <img
                    src="https://www.truechip.net/upload/services/services_1987128928.png"
                    alt="Design and Verification IP"
                    height="100px"
                    width="100px"
                  />
                </a>
              </div>
              <div class="look-service-title">
                <a
                  href="https://www.truechip.net/automation-products.php"
                  style={{textDecoration:"none"}}
                >
                  <b>Automation & GUI</b>
                </a>
              </div>
            </div>
            <div class="looking-containt-box wow fadeInLeft">
              <div class="thumb">
                <a
                  href="https://www.truechip.net/details/noc-Silicon-ip/980660"
                  class="image_icon"
                >
                  <img
                    src="https://www.truechip.net/upload/services/silicon_ip_images.png"
                    alt="Silicon IP"
                    height="100px"
                    width="100px"
                  />
                </a>
              </div>
              <div class="look-service-title">
                <a
                  href="https://www.truechip.net/details/noc-Silicon-ip/980660"
                  style={{textDecoration:"none"}}
                >
                  <b>Silicon IPs</b>
                </a>
              </div>
            </div>
            <div class="looking-containt-box wow fadeInLeft">
              <div class="thumb">
                <a
                  href="https://www.truechip.net/product/verification-ips/s-592834231"
                  class="image_icon"
                >
                  <img
                    src="https://www.truechip.net/upload/services/services_1113604601.png"
                    alt="Verification IPs"
                    height="100px"
                    width="100px"
                  />
                </a>
              </div>
              <div class="look-service-title">
                <a
                  href="https://www.truechip.net/product/verification-ips/s-592834231"
                  style={{textDecoration:"none"}}
                >
                  <b>Verification IPs</b>
                </a>
              </div>
            </div>
            <div class="looking-containt-box wow fadeInLeft">
              <div class="thumb">
                <a
                  href="https://www.truechip.net/service-detail/front-end-design-and-verification-services/22827"
                  class="image_icon"
                >
                  <img
                    src="https://www.truechip.net/upload/services/services_1224056464.png"
                    alt="Design Services"
                    height="100px"
                    width="100px"
                  />
                </a>
              </div>
              <div class="look-service-title">
                <a
                  href="https://www.truechip.net/service-detail/front-end-design-and-verification-services/22827"
                  style={{textDecoration:"none"}}
                >
                  <b>Design Services</b>
                </a>
              </div>
            </div>
            <div class="looking-containt-box wow fadeInLeft">
              <div class="thumb">
                <a href="https://www.truechip.net/" class="image_icon">
                  <img
                    src="https://www.truechip.net/upload/services/services_7755041.png"
                    alt="Verification IP"
                    height="100px"
                    width="100px"
                  />
                </a>
              </div>
              <div class="look-service-title">
                <a
                  href="https://www.truechip.net/"
                  style="text-decoration: none;"
                >
                  <b>DFT Services</b>
                </a>
              </div>
            </div>

            <div class="looking-for-btn wow fadeInRight">
              <a
                href="/product/verification-ip/s-592834231"
                class="btn_common white_transparent"
              >
                Click here to know more
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default TrueChip;
