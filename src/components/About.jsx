import React from "react";
import "./css/About.css";
import profileImg from "../assets/img/profile.jpg";
import MoreDetail from "./Resume";

function About() {
  return (
    <div>
      <section>
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
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius commodi incidunt, optio obcaecati corporis eos modi
                    quos iusto dignissimos, quam exercitationem a, expedita
                    accusamus quasi neque? Quas consectetur, libero cumque
                    veniam iure ipsum quo in distinctio ex debitis illum velit
                    deleniti eos fugit impedit perspiciatis nisi! Tempore
                    veritatis error alias.
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
