import React from "react";
import "./TextBack.css";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

import CharaAnim from "./CharaAnim";


const TextBack = () => {
  const vision = "We’re always searching for amazing people to join our team. Take a look at our current openings.";

  return (
    <>
          <section class="wrapper-border mt-4 bg-soft-primary">
                <div class="container py-10 py-md-10">
                 <div
                  // ref={ref1}
                  // initial="initial"
                  // animate={inView1 ? "visible" : "initial"}
                  // variants={variants2}
                  // transition={{ duration: 1, delay: 0.3 }}
                  className="card ms-lg-13 mt-1 mb-3 JP-at"
                  >
                    <div className="card-body">
                      {/* <div className="d-flex flex-row justify-content-center"> */}
                        <div className="text-box">
                          <h1> JOB POSITION</h1>
                          <Typography variant="body2 h3">
                      <CharaAnim text={vision} />
                    </Typography>

                        {/* <p className="lead fw-bold"
                          style={{
                                  // lineHeight: "1.4",
                                  letterSpacing: "2px",
                                  fontSize: "1.5rem",
                                  }}>
                          We’re always searching for amazing people to join our team. Take a look at our current openings.

                        </p> */}
                        </div>

                        <div>
                        <Link to="/CARDJOB" className="btn btn-primary btn-lg rounded mb-0 text-nowrap text-white mt-5">
                            Join Us
                        </Link>
                        </div>
                      </div>
                    {/* </div> */}
                  </div>
</div>
    </section>











    </>
  );
};

export default TextBack;
