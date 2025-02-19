import React, { useEffect } from "react";
import "./App.css";
import "./AppRough.css";
import { Icon } from "@iconify/react";
// import './CardDesign.css';

function AppRough() {
  function aDelay(t) {
    switch (t) {
      case 1:
      case 35:
        return 0.05;
      case 2:
      case 34:
        return 0.1;
      case 3:
      case 33:
        return 0.15;
      case 4:
      case 32:
        return 0.2;
      case 5:
      case 31:
        return 0.25;
      case 6:
      case 30:
        return 0.3;
      case 7:
      case 29:
        return 0.35;
      case 8:
      case 28:
        return 0.4;
      case 9:
      case 27:
        return 0.45;
      case 10:
      case 26:
        return 0.5;
      case 11:
      case 25:
        return 0.55;
      case 12:
      case 24:
        return 0.6;
      case 13:
      case 23:
        return 0.65;
      case 14:
      case 22:
        return 0.7;
      case 15:
      case 21:
        return 0.75;
      case 16:
      case 20:
        return 0.8;
      case 17:
      case 19:
        return 0.85;
      case 18:
        return 0.95;
      case 36:
        return 0;
      default:
        return 1;
    }
  }
  useEffect(() => {
    let x = 1;
    while (x <= 12) {
      let plane = document.createElement("div");
      plane.className = `plane plane-${x}`;
      plane.style.transform = `rotateY(${x * 15}deg)`;
      document.querySelector(".sphere-wrapper").appendChild(plane);

      for (let y = 1; y <= 36; y++) {
        let spoke = document.createElement("div");
        spoke.className = `spoke spoke-${y}`;
        spoke.innerHTML = ` <div class="dot" style="background-color:${
          y % 2 === 0 ? "#00fffa" : "#ff9800"
        }; animation : pulsate .5s infinite ${aDelay(
          y
        )}s alternate both"></div>`;
        spoke.style.transform = `rotateZ(${y * 10}deg)`;
        document.querySelector(`.plane-${x}`).appendChild(spoke);
      }
      x++;
    }
  }, []);

  return (
    <>
      <div class="container py-3" >
        <div class="card gradient1-bg mt-5">
          <div class="row">
            <div class="col-sm-4 column">
              <div class="card-block txt">
                <h1>BRANDING AND CORPORATE DESIGN</h1>
                <p>Visual communication and problem-solving</p>
                <div class="ico-card">
                  <i>
                    <Icon icon="fa:rebel" />
                  </i>
                </div>
                <a href="#">more</a>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="card-body">
                <div class="solar-system">
                  <div class="sun"></div>
                  <div class="planet">
                    <div class="earth"></div>
                    <div class="moon"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card gradient2-bg mt-5">
          <div class="row">
            <div class="col-sm-4 column">
              <div class="card-block txt">
                <h1>BRANDING AND CORPORATE DESIGN</h1>
                <p>Visual communication and problem-solving</p>
                <div class="ico-card">
                  <i>
                  <Icon icon="game-icons:electrical-resistance" />
                  </i>
                </div>
                <a href="#">more</a>
              </div>
            </div>

            <div class="col-sm-8">
              <div class="card-body">
                <div className="circles">
                  <div></div>
                  <div></div>
                  <div></div>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card gradient3-bg mt-5">
          <div class="row">
            <div class="col-sm-4 column">
              <div class="card-block txt">
                <h1>BRANDING AND CORPORATE DESIGN</h1>
                <p>Visual communication and problem-solving</p>
                <div class="ico-card">
                  <i>
                  <Icon icon="iconoir:electronics-chip" />
                  </i>
                </div>
                <a href="#">more</a>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="card-body">
                <div className="main-wrapper">
                  <div className="sphere-wrapper"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
    </>
  );
}

export default AppRough;
