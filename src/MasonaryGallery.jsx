import { useEffect, useRef, useState } from "react";
import Masonry from "react-masonry-css";
import gsap from "gsap";
import "./MasonryGallery.css";
import img1 from "./images/first_photo.jpg";
import img2 from "./images/fourth_photo.jpg";
import img3 from "./images/fifth_photo.jpg";
import img4 from "./images/sixth_photo.jpg";
import img5 from "./images/seventh_photo.jpg";
import img6 from "./images/tenth_photo.jpg";
import img7 from "./images/ninth_photo.jpg";
import img8 from "./images/eleventh_photo.jpg";
import useAnimateOnScroll from "./useAnimateOnScroll";
const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};

const MasonryGalleryTwo = ({ isActive }) => {
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
    { y: "0", rotate: 0, scale: 1, duration: 2, ease: "power2.inOut" }
  );
  useAnimateOnScroll(
    ".paragraph-3",
    { rotate: 30, opacity: 0 },
    { rotate: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.inOut" }
  );
  useAnimateOnScroll(
    ".downtoup",
    { opacity: 0, x: "-350px", y: "0px", scale: 2 },
    {
      opacity: 1,
      x: "0px",
      y: "0px",
      scale: 1,
      duration: 2,
      stagger: 0.3,
      ease: "power3.inOut",
    }
  );
  const imageRefs = useRef([]);
  const galleryRef = useRef(null);
  const textRef = useRef(null);

  const [hasAnimated, setHasAnimated] = useState(false);
  const [showText, setShowText] = useState(false);

  // Clear refs each render
  imageRefs.current = [];

  // When slide becomes inactive, reset the animation state
  useEffect(() => {
    if (!isActive && (hasAnimated || showText)) {
      setHasAnimated(false);
      setShowText(false);
      gsap.set(galleryRef.current, { opacity: 1 }); // Reset opacity for gallery
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive && !hasAnimated) {
      const timeout = setTimeout(() => {
        const allReady = imageRefs.current.every((el) => el);
        if (!allReady) return;

        const tl = gsap.timeline();

        tl.fromTo(
          imageRefs.current,
          {
            opacity: 0.1,
            x: 100,
            y: -100,
            scale: 0.5,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1.05,
            duration: 3,
            stagger: 0.2,
            ease: "sine.inout",
          }
        ).to(galleryRef.current, {
          opacity: 0,
          duration: 3,
          ease: "power1.out",
          onComplete: () => {
            setShowText(true);
            setHasAnimated(true);
            gsap.fromTo(
              textRef.current,
              { opacity: 0, y: 200 },
              { opacity: 1, y: 0, duration: 2 }
            );
          },
        });
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [isActive, hasAnimated]);

  return (
    <section className="container py-2">
      {!showText && (
        <div ref={galleryRef}>
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {images.map((src, i) => (
              <div key={i} ref={(el) => (imageRefs.current[i] = el)}>
                <img src={src} alt={`Img-${i}`} className="img-fluid" />
              </div>
            ))}
          </Masonry>
        </div>
      )}
      {showText && (
        <div ref={textRef} className=" text-center text-white mt-2 ramParagraph">
          <h4
            style={{
              color: "#ffff",
              letterSpacing: "0.1em",
              fontWeight: "800",
              
            }}
          >
            Embedded Application Development
          </h4>

          <p
            className="ramHeading"
            style={{
              color: "#ffff",
              letterSpacing: "0.1em",
              fontWeight: "800",
              
            }}
          >
            We Develop Embedded software to qualify and verify new HW board. 
          </p>
          <h4
            className="ramHeading"
            style={{
              color: "#ffff",
              letterSpacing: "0.1em",
              fontWeight: "800",
              
            }}
          >
            Hardware
          </h4>

          <p
            className="ramHeading"
            style={{
              color: "white",
              letterSpacing: "0.1em",
              fontWeight: "800",
              
            }}
          >
            ARM 64 Bit
          </p>
        </div>
      )}
    </section>
  );
};

export default MasonryGalleryTwo;
