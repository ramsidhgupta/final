import React, { useEffect, useState } from "react";

import { ReactComponent as MySVG1 } from "./SVG/first.svg";
import { ReactComponent as MySVG2 } from "./SVG/offshoreDev.svg";
import { ReactComponent as FineTune } from "./SVG/FineTune.svg";
import { ReactComponent as Complete } from "./SVG/Complete.svg";
import { ReactComponent as Together } from "./SVG/together.svg";

import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const datas = [
  {
    title: "Trend analysis",
    desc: "Our society is in a state of constant change. New challenges and requirements emerge, changing our markets. We always keep an eye on these developments. Based on out observations, together with our customers we determine which products are needed in order to offer safe and green solutions that are successful in the market.",
    img: (
      <MySVG1
        style={{
          height: "50vh",
          width: "100%",
        }}
      />
    ),
  },
  {
    title: "Definition",
    desc: "Then we define the requirements a new product has to fulfill. The decisive factor here is the system in which our customer will use a chip from TechsoC. For example, applications in a car call for properties quite different from those needed in a smartphone. Our design engineers then translate these requirements into a theoretical chip construction. This step already takes subsequent manufacturing techniques into account.",
    img: (
      <FineTune
        style={{
          height: "50vh",
          width: "100%",
        }}
      />
    ),
  },
  {
    title: "Implementation",
    desc: "Now questions with a decisive bearing on realization are answered: What technology is best suited? How can we guarantee the necessary reliability of the product? Which of our sites are candidates for manufacturing? When this phase is over we have turned the theoretical concept into initial chip prototypes and have produced samples in small quantities.",
    img: (
      <MySVG2
        style={{
          height: "50vh",
          width: "100%",
        }}
      />
    ),
  },
  {
    title: "Verification and validation",
    desc: "In the next step we check whether or not the product fulfills all the defined requirements. We provide our customers with samples so that they can test the product in the intended applications. At the same time the manufacturing technology is refined and a manufacturing plan is formulated so that the product can then be produced in larger quantities.",
    img: (
      <Together
        style={{
          height: "400px",
          width: "100%",
        }}
      />
    ),
  },
  {
    title: "Ramp-down",
    desc: "Once a product has reached end-of-life, we remove it from production in a process planned on a long-term basis. We inform our customers with sufficient lead time and continue to supply the agreed level of quality. Often we have already developed a functionally improved successor product. We continue to meet all our commitments – from the first chip to the very last.",
    img: (
      <Complete
        style={{
          height: "50vh",
          width: "100%",
        }}
      />
    ),
  },
];

const StackDemo = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#wrapper",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        ease: "linear",
        pin: true,
      },
    });

    gsap.utils.toArray(".accordion").forEach((accordion) => {
      tl.to(accordion, {
        height: 100,
        paddingBottom: 0,
        stagger: 0.5,
      });
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      window.location.reload();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box sx={{ background: "#7B7762", paddingLeft: "30px" }}>
      <Box id="wrapper">
        <Box
          id="content"
          sx={{
            "& .accordianTitle": {
              fontSize: "max(2vw, 20px)",
              lineHeight: 1.1,
              paddingBottom: ".4em",
              color: "#1d1d1d",
              fontWeight: 700,
              textTransform: "uppercase",
            },
            "& .textDesc": {
              lineHeight: 1.4,
              overflow: "hidden",
              paddingBottom: "20px",
              color: "1d1d1d",
              textTransform: "uppercase",
            },
            "& .accordionsWrapper": {
              display: "flex",
              flexDirection: "coloumn",
              alignItems: "center",
              "& .accordion": {
                width: "100%",
                overflow: "hidden",
                background: "#7B7762",
                padding: "50px 30px 80px",
                borderBottom: "1px solid #000",
              },
            },
          }}
        >
          <Box className="accordionsWrapper">
            <Grid container spacing={3}>
              {datas.map((data, i) => (
                <Grid item xs={12} key={i} className="accordion">
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Grid container direction="column" spacing={1}>
                        <Card
                          sx={{
                            backgroundColor: "white",
                            boxShadow: "none",
                            paddingLeft: "85px",
                          }}
                        >
                          <CardContent>
                            <Grid item>
                              <Typography
                                variant="body1"
                                className="accordianTitle"
                                sx={{ overflowWrap: "break-word" }}
                              >
                                {data.title}
                              </Typography>
                            </Grid>

                            <Grid item>
                              <>
                                {data.founder}
                                <Typography
                                  component="p"
                                  sx={{
                                    textTransform: "Capitalize",
                                    mt: 4,
                                    color: "#1268b3",
                                    fontWeight: 700,
                                    lineHeight: 1.8,
                                  }}
                                >
                                  {data.desc}
                                </Typography>
                              </>
                            </Grid>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          height: "400px",
                          width: "100%",
                          paddingTop: "50px",
                          "& > img": {
                            height: "80%",
                            width: "100%",
                            objectFit: "cover",
                          },
                        }}
                      >
                        {data.img}
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StackDemo;
