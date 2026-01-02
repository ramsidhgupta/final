import { Icon } from "@iconify/react/dist/iconify.js";
import { projects } from "./Constants/index";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Box, Typography, Divider } from "@mui/material";

const Works = () => {
  const overlayRefs = useRef([]);
  const previewRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(null);

  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef(null);
  const moveY = useRef(null);

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });

    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out",
      }
    );

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    });

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  return (
    <Box
      id="work"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "white",
        p: 2,
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          fontWeight: 300,
        }}
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, index) => (
          <Box
            key={project.id}
            id="project"
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 1,
              py: 2,
              cursor: "pointer",
              "&:hover .overlay": {
                bgcolor: "black",
              },
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* Overlay */}
            <Box
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className="overlay"
              sx={{
                position: "absolute",
                inset: 0,
                display: { xs: "none", md: "block" },
                transition: "0.2s ease",
                bgcolor: "black",
                zIndex: -10,
                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
              }}
            />

            {/* Title */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                px: 4,
                color: "black",
                transition: "all 0.5s ease",
                "&:hover": { px: 6, color: "white" },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "26px", lg: "32px" },
                  lineHeight: 1,
                }}
              >
                {project.name}
              </Typography>
              <Icon icon="lucide:arrow-up-right" fontSize={24} />
            </Box>

            {/* Divider */}
            <Divider sx={{ bgcolor: "rgba(0,0,0,0.8)" }} />

            {/* Frameworks */}
            <Box
              sx={{
                display: "flex",
                px: 4,
                gap: 2,
                fontSize: { xs: "12px", md: "14px" },
                textTransform: "uppercase",
                lineHeight: 2,
                "&:hover": { color: "white" },
              }}
            >
              {project.frameworks.map((framework) => (
                <Typography
                  key={framework.id}
                  sx={{
                    color: "black",
                    transition: "color 0.5s ease",
                  }}
                >
                  {project.description}
                </Typography>
               ))} 
            </Box>

            {/* Mobile Preview Image */}
            <Box
              sx={{
                position: "relative",
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                justifyContent: "center",
                px: 4,
                height: "400px",
              }}
            >
              <Box
                component="img"
                src={project.bgImage}
                alt={`${project.name}-bg-image`}
                sx={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: 2,
                  filter: "brightness(50%)",
                }}
              />
              <Box
                component="img"
                src={project.image}
                alt={`${project.name}-image`}
                sx={{
                  position: "absolute",
                  borderRadius: 2,
                  px: 14,
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        ))}

        {/* Desktop Floating Preview Image */}
        <Box
          ref={previewRef}
          sx={{
            position: "fixed",
            top: "-35%",
            left: 0,
            zIndex: 50,
            overflow: "hidden",
            border: "8px solid black",
            pointerEvents: "none",
            width: "460px",
            display: { xs: "none", md: "block" },
            opacity: 0,
          }}
        >
          {currentIndex !== null && (
            <Box
              component="img"
              src={projects[currentIndex].image}
              alt="preview"
              sx={{
                objectFit:"contain",
                width: "100%",
                height: "100%",
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Works;
