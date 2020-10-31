import React from "react";
import "./css/Resume.css";

const EduDetail = (props) => (
  <dir
    className={`edu-detail-card d-flex  ${
      props.isTop ? "flex-column" : "flex-column-reverse"
    }`}
  >
    <div className={props.position === "left" ? "text-left" : "text-right"}>
      <h2 className="text-primary">{props.title}</h2>
      <h5 className="text-dark">{props.subtitle}</h5>
      <p className="text-secondary">{props.address}</p>
      <p className="text-info">
        <span className="text-warning font-italic">Year of Completion: </span>
        {props.year}
      </p>
    </div>
  </dir>
);

function Resume() {
  return (
    <div>
      <section id="resume">
        <div className="container-fluid bg-white">
          <div className="container">
            <h2 className="text-center title">Resume</h2>
            <span className="d-flex justify-content-center mt-5">
              <h4 className="edu-subtitle">EDUCATION</h4>
            </span>
            <div className="row">
              <div className="col-md-6">
                <EduDetail
                  isTop={true}
                  position="right"
                  title={["10", <sup>th</sup>, " - Matriculation"]}
                  subtitle="Radha Govind Public School"
                  year="2015"
                  address={["Ramgarh Cantt - 829122", <br />, "Jharkhand"]}
                ></EduDetail>
              </div>
              <div className="col-md-6">
                <EduDetail
                  position="left"
                  title={["12", <sup>th</sup>, " - Intermediate of Science"]}
                  subtitle="Radha Govind Public School"
                  address={["Ramgarh Cantt - 829122", <br />, "Jharkhand"]}
                  year="2017"
                ></EduDetail>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <EduDetail
                  isTop={true}
                  position="right"
                  title={"BCA - Computer Application"}
                  subtitle="Marwari Collage Ranchi"
                  address={["Ranchi - 834001", <br />, "Jharkhand"]}
                  year="2017-2020"
                ></EduDetail>
              </div>
            </div>
            <span className="d-flex justify-content-center">
              <h4 className="edu-subtitle">EDUCATION</h4>
            </span>
            {/* <div className="container text-dark">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-6">
                  <div className="card">
                    <div className="box">
                      <div className="percent">
                        <svg>
                          <circle cx="70" cy="70" r="70"></circle>
                          <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div className="number">
                          <h2>
                            90 <span>%</span>
                          </h2>
                        </div>
                      </div>
                      <h2 className="skill-title">html</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                  <div className="card">
                    <div className="box">
                      <div className="percent">
                        <svg>
                          <circle cx="70" cy="70" r="70"></circle>
                          <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div className="number">
                          <h2>
                            90 <span>%</span>
                          </h2>
                        </div>
                      </div>
                      <h2 className="skill-title">html</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                  <div className="card">
                    <div className="box">
                      <div className="">
                        <svg>
                          <circle cx="70" cy="70" r="70"></circle>
                          <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div className="number">
                          <h2>
                            90 <span>%</span>
                          </h2>
                        </div>
                      </div>
                      <h2 className="skill-title">html</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                  <div className="circularprogress">
                    <div className="svg-container bg-danger">
                      <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"></circle>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
