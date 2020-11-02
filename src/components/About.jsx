import React from "react";
import "./css/About.css";
import profileImg from "../assets/img/profile.jpg";
import MoreDetail from "./Resume";

function About() {
  return (
    <div>
      <section id="about">
        <div className="container-fluid darkBg">
          <div className="container">
            <div className="row row-cols-2 ">
              <div className="col-md-3 col-12  d-flex align-items-center">
                <div className="d-flex flex-column justify-content-center  p-md-3 p-5  ">
                  <img
                    className="img-fluid rounded-circle"
                    src={profileImg}
                    alt="Swaraj Kumar"
                  />
                  <h4 className="text-center pt-3 font-italic">SWARAJ KUMAR</h4>
                </div>
              </div>
              <div className="col-md-9 col-12">
                <div className="about-left-section text-center text-md-left">
                  <h4>About me</h4>
                  <p>Hey there, I am Swaraj</p>{" "}
                  <p>
                    A Programmer/Developer/Freelancer who loves building things
                    , always energetic and eager to learn new skills.,{" "}
                  </p>
                  <p>
                    I am a talented, ambitious and hardworking individual, with
                    broad skills and experience in building web and mobile
                    application ,social and technical skills.
                  </p>
                  <p>
                    recently, I have completed my graduation from Marwari
                    College Ranchi in BCA(Bachelor's of computer application.),
                  </p>
                  <p>
                    Furthermore, I am adept at handling multiple tasks on a
                    daily basis competently and at working well under pressure.
                  </p>
                  <h6>Fun Fact</h6>
                  <p>
                    I believe in a world where coffee{" "}
                    <span role="img" aria-label="coffee emoji">
                      ☕
                    </span>{" "}
                    can solve any and all problems 😁
                    <br />
                    <strong className="text-white">P.S.</strong> I do know that
                    HTML is not a programming language! ✌️
                  </p>
                  <h4>Contact details</h4>
                  <p>24/7 at Whatsapp - (+91) 8709830719</p>
                  <p>Ramgarh Cantt - 829122</p>
                  <p>Jharkhand</p>
                  <p>India</p>
                  <p>
                    (+91) 8709830719 <br /> swaraj344@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MoreDetail />
    </div>
  );
}

export default About;
