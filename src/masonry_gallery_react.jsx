import { useEffect, useRef, useState } from "react";
import Masonry from "react-masonry-css";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import { Stack } from "@mui/material";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./MasonryGallery.css";
import img1 from "./images/Picture1.png";
import img4 from "./images/Picture2.png";
import img5 from "./images/Picture3.png";
import img6 from "./images/Picture4.png";
import img7 from "./images/Picture5.png";
import img10 from "./images/Picture6.png";
import img9 from "./images/Picture7.png";
import img11 from "./images/Picture8.png";
import useAnimateOnScroll from "./useAnimateOnScroll";

const images = [img1, img4, img5, img6, img7, img10, img9, img11];

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};

const MasonryGallery = ({ isActive }) => {
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
            x: 700,
            y: 700,
            scale: 0.05,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1.05,
            duration: 3,
            stagger: 0.2,
            ease: "sine.inOut",
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
        <div
          ref={textRef}
          className=" text-center text-white mt-2 ramParagraph"
        >
          <h4
            style={{
              color: "#ffff",
              letterSpacing: "0.1em",
              fontWeight: "800",
            }}
          >
            Embedded AI-VISION ( Services)
          </h4>

          <p
            style={{
              color: "#ffff",
              letterSpacing: "0.1em",
              fontWeight: "700",
            }}
          >
            We use cutting-edge Computer Vision and Artificial Intelligence
            technology to do prediction on the data collected on Assembly line,
            Transportation, sports, workouts, safety, and Security
          </p>
          <div className="row">
            {/* <div className="col-md-6 col-sm-12">
              <p
                className="ramHeading"
                style={{
                  color: "#ffff",
                  fontWeight: "bold",
                  fontSize: "1.65em",
                }}
              >
               Hardware Used
              </p>
              <ul
                className="icon-list bullet-bg bullet-soft-primary mb-2 two-columns"
                style={{
                  color: "white",
                  fontSize: "1.1em",
                  listStyle: "none",
                  textTransform: "capitalize",
                }}
              >
                <li style={{ display: "flex", alignItems: "center" }}>
                  <Icon icon="flat-color-icons:ok" />
                  <p
                    className="paragraph-3"
                    style={{ marginLeft: "0.5rem" }}
                  >
                    Raspberry PI 4 / 5
                  </p>
                </li>

                <li style={{ display: "flex", alignItems: "center" }}>
                  <Icon icon="flat-color-icons:ok" />
                  <p
                    className="paragraph-3"
                    style={{ marginLeft: "0.5rem" }}
                  >
                    NVIDIA Jetson
                  </p>
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <Icon icon="flat-color-icons:ok" />
                  <p
                    className="paragraph-3"
                    style={{ marginLeft: "0.5rem" }}
                  >
                    ESP32
                  </p>
                </li>
              </ul>
            </div> */}
            <div className="col-md-6 col-sm-12">
              <p
                className="ramHeading"
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "1.65em",
                }}
              >
                Hardware Used
              </p>

              {/* Wrapper for items */}
              <div
                style={{
                  color: "white",
                  fontSize: "1.1em",
                  textTransform: "capitalize",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                }}
              >
                {/* Item 1 */}
                <Box display="flex" gap={1}>
                  <CheckCircleIcon sx={{ color: "green", fontSize: 20 }} />
                  <Typography variant="body1" sx={{ margin: 0 }}>
                    Raspberry PI 4 / 5
                  </Typography>
                </Box>
                {/* <div style={{ display: "flex", alignItems: "center" }}>
                  <Icon icon="flat-color-icons:ok" />
                  <p style={{ marginLeft: "0.2rem" }}>Raspberry PI 4 / 5</p>
                </div> */}

                {/* Item 2 */}
                <Box display="flex" gap={1}>
                  <CheckCircleIcon sx={{ color: "green", fontSize: 20 }} />
                  <Typography variant="body1" sx={{ margin: 0 }}>
                    NVIDIA Jetson
                  </Typography>
                </Box>
                {/* <div style={{ display: "flex", alignItems: "center" }}>
                  <Icon icon="flat-color-icons:ok" />
                  <p style={{ marginLeft: "0.2rem" }}>NVIDIA Jetson</p>
                </div> */}

                {/* Item 3 */}
                <Box display="flex" gap={1}>
                  <CheckCircleIcon sx={{ color: "green", fontSize: 20 }} />
                  <Typography variant="body1" sx={{ margin: 0 }}>
                    ESP32
                  </Typography>
                </Box>
                {/* <div style={{ display: "flex", alignItems: "center" }}>
                  <Icon icon="flat-color-icons:ok" />
                  <p style={{ marginLeft: "0.2rem" }}>ESP32</p>
                </div> */}
              </div>
            </div>

            {/* <div className="col-md-6 col-sm-12">
              <p
                className="ramHeading"
                style={{
                  color: "#ffff",
                  fontWeight: "bold",
                  fontSize: "1.65em",
                }}
              >
                Model Used
              </p>
              <ul
                className="icon-list bullet-bg bullet-soft-primary mb-2 two-columns"
                style={{
                  color: "white",
                  fontSize: "1.1em",
                  listStyle: "none",
                  textTransform: "capitalize",
                }}
              >
                <li style={{ display: "flex", alignItems: "center" }}>
                  <Icon icon="flat-color-icons:ok" />
                  <p className="paragraph-3" style={{ marginLeft: "0.5rem" }}>
                    TensorFlowLite, TensorRT, TensorFlow.js,
                  </p>
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <Icon icon="flat-color-icons:ok" />
                  <p className="paragraph-3" style={{ marginLeft: "0.5rem" }}>
                    YOLOv5, YOLO8, EfficientNet, EfficientDet
                  </p>
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <Icon icon="flat-color-icons:ok" />
                  <p className="paragraph-3" style={{ marginLeft: "0.5rem" }}>
                    ONNX, CoreML, PyTorch
                  </p>
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <Icon icon="flat-color-icons:ok" />
                  <p className="paragraph-3" style={{ marginLeft: "0.5rem" }}>
                    FastAi, NVIDIA DeepStream
                  </p>
                </li>
              </ul>
            </div> */}
            <div className="col-md-6 col-sm-12">
              <p
                className="ramHeading"
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "1.65em",
                }}
              >
                Model Used
              </p>

              {/* Wrapper for items */}
              <div
                style={{
                  color: "white",
                  fontSize: "1.1em",
                  textTransform: "capitalize",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                }}
              >
                {/* Item 1 */}
               
                <Box display="flex" gap={0}>
                  <CheckCircleIcon sx={{ color: "green", fontSize: 20 }} />
                  <Typography variant="body1" sx={{ margin: 0 }}>
                    TensorFlowLite, TensorRT, TensorFlow.js
                  </Typography>
                </Box>

                {/* Item 2 */}
                <Box display="flex" gap={0.5}>
                  <CheckCircleIcon sx={{ color: "green", fontSize: 20 }} />
                  <Typography variant="body1" sx={{ margin: 0 }}>
                    YOLOv5, YOLO8, EfficientNet, EfficientDet
                  </Typography>
                </Box>
                

                {/* Item 3 */}
                <Box display="flex" gap={2}>
                  <CheckCircleIcon sx={{ color: "green", fontSize: 20 }} />
                  <Typography variant="body1" sx={{ margin: 0 }}>
                    ONNX, CoreML, PyTorch
                  </Typography>
                </Box>
                
                {/* Item 4 */}
                <Box display="flex" gap={2}>
                  <CheckCircleIcon sx={{ color: "green", fontSize: 20 }} />
                  <Typography variant="body1" sx={{ margin: 0 }}>
                   FastAi, NVIDIA DeepStream
                  </Typography>
                </Box>
                </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MasonryGallery;
