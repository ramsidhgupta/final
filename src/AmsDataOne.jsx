import React, {useState} from "react";
import "./WhyTechsoc.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import './App.css';


const AmsDataOne = () => {

    const [isHovered, setIsHovered] = useState(false);
  return (
    <>
     <section className="wrapper bg-soft-primary mt-5 mb-5">
      <div className="container py-md-10">
        <hr class="double my-10" />
        <h3 className="text-center">
          LOOKING FOR A{" "}
          <span style={{ color: "#0f27db", fontWeight: 700 }}>
            VLSI
          </span>{" "}
          SERVICES COMPANY?
        </h3>
        <h4 className="text-center" style={{ fontStyle: "italic" }}>
          {" "}
          Our name,  <span style={{ color: "#0f27db", fontWeight: 700 }}>TechsoC</span> says it all: we are an international VLSI
          engineering services company.
        </h4>
        <hr class="double my-10" />
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
          <div className="col-lg-4 col-md-6 col-sm-6 mt-5">
            <div className="d-flex align-items-center">
              <Icon
                icon="akar-icons:thumbs-up"
                style={{
                  color: "#0f27db",
                  fontSize: "48px",
                  marginRight: "1rem",
                }}
              />

              <div>
                <span
                  style={{
                    letterSpacing: "0.2rem",
                    fontWeight: 600,
                    color: "blue",
                  }}
                >
                  EXPERTISE
                </span>
                <br />
                <span style={{ letterSpacing: "0.1rem", fontWeight: 500 }}>
                  15 years experience in VLSI Industry.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 mt-5">
            <div className="d-flex align-items-center">
              <Icon
                icon="material-symbols:shield-lock-outline-rounded"
                style={{
                  color: "#0f27db",
                  fontSize: "48px",
                  marginRight: "1rem",
                }}
              />
            
              <div>
                <span
                  style={{
                    letterSpacing: "0.2rem",
                    fontWeight: 600,
                    color: "blue",
                  }}
                >
                  QUALITY AND CONFIDENTIALITY
                </span>
                <br />
                <span style={{ letterSpacing: "0.1rem", fontWeight: 500 }}>
                  We Continue To Meet All Our Commitments
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 mt-5">
            <div className="d-flex align-items-center">
              <Icon
                icon="codicon:workspace-trusted"
                style={{
                  color: "#0f27db",
                  fontSize: "48px",
                  marginRight: "1rem",
                }}
              />
              <div>
                <span
                  style={{
                    letterSpacing: "0.2rem",
                    fontWeight: 600,
                    color: "blue",
                  }}
                >
                  TRUST
                </span>
                <br />
                <span style={{ letterSpacing: "0.1rem", fontWeight: 500 }}>
                  Building long term partnerships with our customers
                </span>
              </div>
            </div>
          </div>
          <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
            <div className="col-lg-4 col-md-6 col-sm-6 mt-5 mr-2">
              <div className="d-flex align-items-center">
                <Icon
                  icon="fontisto:dna"
                  style={{
                    color: "#0f27db",
                    fontSize: "78px",
                    marginRight: "1rem",
                  }}
                />
                <div>
                  <span
                    style={{
                      letterSpacing: "0.2rem",
                      fontWeight: 600,
                      color: "blue",
                    }}
                  >
                    TECHNICAL DNA
                  </span>
                  <br />
                  <span style={{ letterSpacing: "0.1rem", fontWeight: 500 }}>
                    Founders, technical teams and business managers are all
                    engineers
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 mt-5">
              <div className="d-flex align-items-center">
                <Icon
                  icon="mdi:heart-cog-outline"
                  style={{
                    color: "#0f27db",
                    fontSize: "68px",
                    marginRight: "1rem",
                  }}
                />

                <div>
                  <span
                    style={{
                      letterSpacing: "0.2rem",
                      fontWeight: 600,
                      color: "blue",
                    }}
                  >
                    PASSION
                  </span>
                  <br />
                  <span style={{ letterSpacing: "0.1rem", fontWeight: 500 }}>
                    More than engineers, we are passionate people
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 mt-5">
              <div className="d-flex align-items-center">
                <Icon
                  icon="iconoir:three-stars-solid"
                  style={{
                    color: "#0f27db",
                    fontSize: "68px",
                    marginRight: "1rem",
                  }}
                />

                <div>
                  <span
                    style={{
                      letterSpacing: "0.2rem",
                      fontWeight: 600,
                      color: "blue",
                    }}
                  >
                    EXCELLENCE
                  </span>
                  <br />
                  <span style={{ letterSpacing: "0.1rem", fontWeight: 500 }}>
                    To target excellence, passion is a pre-requisite
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          to="/BUSSCONT"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              
              color: isHovered ? 'blue' : '#008F58',
              transition: 'color 0.5s ease',
            }}
        >
          <h5>
            Are you looking for an engineering services company to assist you in
            your VLSI project? Do not hesitate to contact us
          </h5>
        </Link>
      </div>
      </section>
    </>
  );
};

export default AmsDataOne;
