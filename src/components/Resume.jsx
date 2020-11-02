import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./css/Resume.css";
// import flutterSvg from "../assets/img/flutter.svg";

const EduDetail = (props) => (
  <dir
    key={props.title}
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

const SkillCard = (props) => (
  <div className="card skill__card text-dark text-center">
    <div className="progress-wrapper">
      <CircularProgressbar
        strokeWidth={7}
        value={props.value}
        text={`${props.value}%`}
        styles={buildStyles({
          pathColor: `${props.progressColor}`,
          trailColor: `${props.progressTrailColor}`,
          pathTransitionDuration: 0.5,
          textSize: 20,
          textColor: "black",
        })}
      />
    </div>

    <h4>{props.title}</h4>
    <p className="text-muted">{props.subtitle}</p>
  </div>
);

function Resume() {
  return (
    <div>
      <section id="resume">
        <div className="container-fluid bg-white">
          <div className="container">
            <span className="d-flex justify-content-center pt-5">
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

              <div className="col-md-6 ">
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
              <h4 className="edu-subtitle">SKILLS</h4>
            </span>
            <div className="container p-4">
              <div className="row">
                <div className="col-md-4 col-lg-3 col-12">
                  <SkillCard
                    value={85}
                    progressColor="#C010D6"
                    progressTrailColor="#EBA9F3"
                    title="CORE JAVA"
                    subtitle="A Java program is a collection of objects that communicate via invoking each other's methods"
                  />
                </div>
                <div className="col-md-4 col-lg-3 col-12">
                  <SkillCard
                    value={60}
                    progressColor="#f4a261"
                    progressTrailColor="#ffc699"
                    title="PYTHON"
                    subtitle="Python is an interpreted, object-oriented, high-level programming language with dynamic semantics"
                  />
                </div>
                <div className="col-md-4 col-lg-3 col-12">
                  <SkillCard
                    value={75}
                    progressColor="#e76f51"
                    progressTrailColor="#fca48d"
                    title="HTML&CSS"
                    subtitle="HTML and CSS are two of the core technologies for building Web pages."
                  />
                </div>
                <div className="col-md-4 col-lg-3 col-12">
                  <SkillCard
                    value={70}
                    progressColor="#1d3557"
                    progressTrailColor="#8cb9fa"
                    title="JAVASCRIPT"
                    subtitle="JavaScript® (JS) is a lightweight, interpreted, object-oriented language , is best known as the scripting language for Web pages"
                  />
                </div>
                <div className="col-md-4 col-lg-3 col-12">
                  <SkillCard
                    value={75}
                    progressColor="#e63946"
                    progressTrailColor="#ff828b"
                    title="DART&FLUTTER"
                    subtitle="Flutter is a cross-platform UI toolkit that is designed to allow code reuse across operating systems such as iOS and Android."
                  />
                </div>

                <div className="col-md-4 col-lg-3 col-12">
                  <SkillCard
                    value={70}
                    progressColor="#fca311"
                    progressTrailColor="#ffcf80"
                    title="REACTJS"
                    subtitle="React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
