import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background: #2b2b2b;
  padding: 5% 10%;
`;
const H1 = styled.h1`
  text-align: center;
  position: relative;
  font-size: 2rem;
`;
const ProjectContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ProjectCardBody = styled.div`
  margin: 20px 10px;
  color: black;
  text-align: center;
  max-width: 30%;
  background-color: #fff;
  border-radius: 0.3rem;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  @media only screen and (max-width: 876px) {
    max-width: 45%;
  }
  @media only screen and (max-width: 600px) {
    max-width: 100%;
  }
  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.2);
  }

  img {
    display: block;
    width: 100%;
    object-fit: cover;
    min-height: 170px;
  }
  .card__content {
    padding: 0.5rem 3rem;
  }
  .card__content h3 {
    font-size: 1.2rem;
    font-weight: 500;
    color: black;
    margin-bottom: 0.5rem;
  }
  .card__content .card__button {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.5rem;
    font-size: 1.2rem;
    color: #3363ff;
    background-color: #e6ecff;
    border: none;
    border-radius: 0.4rem;
    transition: 0.3s;
    cursor: pointer;
  }
  .card__content .card__button .btn-icon {
    position: absolute;
    right: 6%;
  }
`;

const ProjectCard = () => {
  return (
    <ProjectCardBody>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-site-45e1e.appspot.com/o/portfolio1.JPG?alt=media&token=6e4a20c6-38f1-4736-93bb-43842709c02f"
        alt="Project"
      />
      <div className="card__content">
        <h3>Full Site With React</h3>
        <div className="card__button">
          <p>Live link</p>{" "}
          <span className="btn-icon">
            <box-icon color="black" name="link-external"></box-icon>
          </span>
        </div>
      </div>
    </ProjectCardBody>
  );
};

function Portfolio() {
  return (
    <div>
      <Section>
        <H1>Portfolio</H1>
        <ProjectContainer>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </ProjectContainer>
      </Section>
    </div>
  );
}

export default Portfolio;
