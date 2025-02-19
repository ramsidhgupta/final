import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/techsoC.png";
import { useNavigate } from "react-router-dom";

import "./NavNew.css";

function NewNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const [semiconductorOpen, setSemiconductorOpen] = useState(false);

  const handleTechMouseEnter = () => {
    setSemiconductorOpen(true);
  };

  const handleTechMouseLeave = () => {
    setSemiconductorOpen(false);
  };

  const handleSemiconductorMouseEnter = () => {
    setSemiconductorOpen(true);
  };

  const handleSemiconductorMouseLeave = () => {
    setSemiconductorOpen(false);
  };

  const handleHomeClick = () => {
    navigate("/");
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const body = document.body;
    let lastScroll = 0;

    function handleScroll() {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
      }
      if (
        currentScroll > lastScroll &&
        !body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
      }
      if (
        currentScroll < lastScroll &&
        body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
      }
      lastScroll = currentScroll;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            {" "}
            <img src={logo} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`sidebar offcanvas offcanvas-start ${
              sidebarOpen ? "show" : ""
            }`}
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header text-white border-bottom">
              <Link to="/" className="navbar-brand">
                {" "}
                <img src={logo} alt="Logo" />
              </Link>

              <button
                type="button"
                className="btn-close btn-close-black shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={() => setSidebarOpen(false)}
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 p-lg-0">
                <li className="nav-item dropdown mx-2 ${dropdownOpen ? 'show' : ''}`}">
                  <Link
                    className="nav-link dropdown-toggle coda-regular"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    // style={{ color: "black", textDecoration: "none", letterSpacing: "0.1rem" }}
                    onClick={() => {
                      handleHomeClick();
                      toggleDropdown();
                    }}
                  >
                    HOME
                  </Link>

                  <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                    <li>
                      <Link
                        to="BussinessModal"
                        className="dropdown-item submenu-link coda-regular"
                        aria-current="page"
                        onClick={handleLinkClick}
                        // style={{color:'black', fontWeight:'700'}}
                      >
                        Bussiness Model
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown mx-2">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    // style={{ color: "black", letterSpacing: "0.1rem" }}
                  >
                    TECHNOLOGY
                  </a>
                  <ul className="dropdown-menu coda-regular">
                    <li className="nav-item dropend">
                      <a
                        className="nav-link dropdown-toggle submenu-link"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Semiconductor Engineering
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            to="ASIC"
                            className="dropdown-item submenu-link"
                            aria-current="page"
                            onClick={handleLinkClick}
                            // style={{color:'black', fontWeight:'700'}}
                          >
                            RTL Design
                          </Link>
                        </li>
                        <hr className="dropdown-divider" />

                        <li>
                          <Link
                            to="PHYSICAL"
                            className="dropdown-item submenu-link"
                            aria-current="page"
                            onClick={handleLinkClick}
                            // style={{color:'black', fontWeight:'700'}}
                          >
                            Physical Design
                          </Link>
                        </li>
                        <hr className="dropdown-divider" />

                        <li>
                          <Link
                            to="DFT"
                            className="dropdown-item submenu-link"
                            aria-current="page"
                            onClick={handleLinkClick}
                            // style={{color:'black', fontWeight:'700'}}
                          >
                            DFT
                          </Link>
                        </li>
                        <hr className="dropdown-divider" />

                        <li>
                          <Link
                            to="EMUL"
                            className="dropdown-item submenu-link"
                            aria-current="page"
                            onClick={handleLinkClick}
                            // style={{color:'black', fontWeight:'700'}}
                          >
                            Emulation
                          </Link>
                        </li>
                        <hr className="dropdown-divider" />

                        <li>
                          <Link
                            to="ANALOG"
                            className="dropdown-item submenu-link"
                            aria-current="page"
                            onClick={handleLinkClick}
                            // style={{color:'black', fontWeight:'700'}}
                          >
                            Analog Design
                          </Link>
                        </li>
                        <hr className="dropdown-divider" />

                        <li>
                          <Link
                            to="DESIGN"
                            className="dropdown-item submenu-link"
                            aria-current="page"
                            onClick={handleLinkClick}
                            // style={{color:'black', fontWeight:'700'}}
                          >
                            Design Verification
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />

                          <Link
                            to="AMS"
                            className="dropdown-item submenu-link"
                            aria-current="page"
                            onClick={handleLinkClick}
                            // style={{color:'black', fontWeight:'700'}}
                          >
                            AMS Verification
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropend">
                    <Link
                            to="EMBEDDED"
                            className="dropdown-item submenu-link"
                            aria-current="page"
                            onClick={handleLinkClick}
                            // style={{color:'black', fontWeight:'700'}}
                          >
                            Embedded Software Services
                          </Link>
                      {/* <a
                        className="nav-link submenu-link"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Embedded Software Services
                      </a> */}
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown mx-2">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    // style={{ color: "black", letterSpacing: "0.1rem" }}
                  >
                    SERVICES
                  </a>
                  <ul className="dropdown-menu coda-regular">
                    <li>
                      <Link
                        to="ConsultServices"
                        className="dropdown-item submenu-link"
                        aria-current="page"
                        onClick={handleLinkClick}
                        // style={{color:'black', fontWeight:'700'}}
                      >
                        Consulting Service
                      </Link>
                    </li>
                    <hr className="dropdown-divider" />
                    <li>
                      <Link
                        to="ProjectOutSource"
                        className="dropdown-item submenu-link"
                        aria-current="page"
                        onClick={handleLinkClick}
                        // style={{color:'black', fontWeight:'700'}}
                      >
                        Project Outsourcing
                      </Link>
                    </li>
                    <hr className="dropdown-divider" />
                    <li>
                      <Link
                        to="OffshoreDev"
                        className="dropdown-item submenu-link"
                        href="#"
                        aria-current="page"
                        onClick={handleLinkClick}
                        // style={{color:'black', fontWeight:'700'}}
                      >
                        Offshore Development
                      </Link>
                    </li>
                    <li></li>
                  </ul>
                </li>
                <li className="nav-item mx-2">
                  <Link
                    to="AboutUs"
                    className="nav-link"
                    href="#"
                    aria-current="page"
                    onClick={handleLinkClick}
                    // style={{ color: "black", letterSpacing: "0.1rem" }}
                  >
                    ABOUT US
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link
                    to="CarrierPage"
                    className="nav-link"
                    href="#"
                    aria-current="page"
                    onClick={handleLinkClick}
                    // style={{ color: "black", letterSpacing: "0.1rem" }}
                  >
                    CAREERS
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link
                    to="ContactUs"
                    className="nav-link"
                    href="#"
                    aria-current="page"
                    onClick={handleLinkClick}
                    // style={{ color: "black", letterSpacing: "0.1rem" }}
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NewNav;
