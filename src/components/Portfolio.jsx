import React from "react";
import "./css/portfolio.css";

const portfolio_data = [
  {
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-site-45e1e.appspot.com/o/portfolio1.JPG?alt=media&token=6e4a20c6-38f1-4736-93bb-43842709c02f",
    projectTitle: "Full Website With React",
    projectSubTitle: "Project info Lorem ipsum dolor sit amet.",
    projectUrl: "https://aligatoritsolution.web.app",
  },
  {
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-site-45e1e.appspot.com/o/WallFy.png?alt=media&token=067db1ce-47a2-4186-aace-3e2e1b63e6ca",
    projectTitle: "Wallfy: Android Application",
    projectSubTitle: "Wallpaper Application for mobile build using flutter",
    projectUrl:
      "https://play.google.com/store/apps/details?id=com.swaraj344.wallfy",
  },
  {
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-site-45e1e.appspot.com/o/Annotation%202020-11-01%20144835.jpg?alt=media&token=79dd2d94-b24d-487d-8efa-6925959cc9ed",
    projectTitle: "Youtube Video Downloader",
    projectSubTitle: "Windows App|download youtube video to local storage",
    projectUrl:
      "https://github.com/swaraj344/Youtube-Video-Downloader/blob/master/Windows%20setup%20installer/setup.exe?raw=true",
  },
];

const PortfolioCard = (props) => (
  <div className="col-lg-4 col-md-6 col-12">
    <div className="card  bg-dark">
      <img className="card-img-top" src={props.imgUrl} alt="project" />
      <div className="card-body">
        <h6 className="text-center card-title">{props.projectTitle}</h6>
        <p className="card-text text-muted">{props.subTitle}</p>
      </div>
      <div className="card-footer">
        <a
          href={props.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-block"
        >
          Live link
        </a>
      </div>
    </div>
  </div>
);

function Portfolio() {
  return (
    <div>
      <section id="portfolio">
        <div className="container-fluid">
          <div className="container">
            <span className="d-flex justify-content-center">
              <h4 className="edu-subtitle">Portfolio</h4>
            </span>
            <div className="row">
              {portfolio_data.map((data) => {
                return (
                  <PortfolioCard
                    key={data.projectTitle}
                    projectTitle={data.projectTitle}
                    subTitle={data.projectSubTitle}
                    imgUrl={data.imgUrl}
                    projectUrl={data.projectUrl}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
