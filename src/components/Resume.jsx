import React from "react";
import styled from "styled-components";
// TODO :https://bootstrapious.com/p/circular-progress-bar
import { LinearProgress } from "@material-ui/core/";

const Section = styled.section`
  color: black;

  padding: 5% 10%;
  background: #ebeeee;
`;
const ResumeLeft = styled.div`
  width: 25%;
`;

const Title = styled.h1`
  font-weight: bold;
  position: relative;
  font-size: 28px;
  &:after {
    content: "";
    position: absolute;
    top: 40px;
    left: 0;

    /* transform: translate(-130px, 40px); */
    background: blue;
    height: 2px;
    width: 200px;
  }
`;
const Heading = styled.h1`
  position: relative;
  font-size: 24px;
`;
const Hr = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  height: 1px;
  box-shadow: 0 4px 1px 0 rgba(0, 0, 0, 0.2);
`;
const ResumeRight = styled.div`
  flex: 1;
  span {
    color: #afafaf;
    font-style: italic;
    font-weight: 400;
  }
  p {
    font-size: 20px;
    /* font-weight: bold; */
  }
`;
const Card = styled.div`
  margin: 20px 0;
  padding: 20px 10px;
  transition: 0.3s;

  display: flex;

  &:hover {
    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
    /* border: 1px solid #afafaf40; */
  }
`;

const Spacer = styled.div`
  height: ${(props) => props.height ?? "30px"};
`;
function Resume() {
  return (
    <div>
      <Section id="resume">
        <Card>
          <ResumeLeft>
            <Title>Education</Title>
          </ResumeLeft>
          <ResumeRight>
            <Heading>Bachelor's Of Computer Application(BCA)|2017-20</Heading>
            <p>
              <span>-from:</span> Marwari College Ranchi
            </p>
            <p>
              <span>-year of Graduate:</span> 2017-2020
            </p>
            <Hr />
            <Heading>
              12<sup>th</sup> Science | JAC Board |2017
            </Heading>
            <p>
              <span>-from:</span> IGSI College,Mandu Ramgarh
            </p>
            <p>
              <span>-year of passing:</span> 2017
            </p>
            <Hr />
            <Heading>
              10<sup>th</sup> | CBSE board | 2015
            </Heading>
            <p>
              <span>-from:</span> Radha Govind Public School,Ramgarh
            </p>
            <p>
              <span>-year of passing:</span> 2015
            </p>
            <Hr />
          </ResumeRight>
        </Card>

        <Card>
          <ResumeLeft>
            <Title> Skills</Title>
          </ResumeLeft>
          <ResumeRight>
            <Heading>Core Java</Heading>
            <Spacer />
            <LinearProgress value={80} variant="buffer" valueBuffer={90} />
            <Spacer height="10px" />
            <Heading>Python</Heading>
            <Spacer />
            <LinearProgress value={70} variant="buffer" valueBuffer={75} />
            <Spacer height="10px" />
            <Heading>JavaScript</Heading>
            <Spacer />
            <LinearProgress value={65} variant="buffer" valueBuffer={70} />
            <Spacer height="10px" />
            <Heading>ReactJS</Heading>
            <Spacer />
            <LinearProgress value={77} variant="buffer" valueBuffer={80} />
            <Spacer height="10px" />
            <Heading>NodeJS</Heading>
            <Spacer />
            <LinearProgress value={75} variant="buffer" valueBuffer={90} />
            <Spacer height="10px" />
            <Heading>Flutter | Dart</Heading>
            <Spacer />
            <LinearProgress value={75} variant="buffer" valueBuffer={80} />
            <Spacer height="10px" />
            <Heading>Git</Heading>
            <Spacer />
            <LinearProgress value={80} variant="buffer" valueBuffer={85} />
            <Spacer height="10px" />
            <Heading>HTML | CSS</Heading>
            <Spacer />
            <LinearProgress value={90} variant="buffer" valueBuffer={99} />
            <Spacer height="10px" />
            <Heading>Bootstrap</Heading>
            <Spacer />
            <LinearProgress value={85} variant="buffer" valueBuffer={90} />
          </ResumeRight>
        </Card>
      </Section>
    </div>
  );
}

export default Resume;
