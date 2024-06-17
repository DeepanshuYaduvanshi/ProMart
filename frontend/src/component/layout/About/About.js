import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitLinkedin = () => {
    window.location = "https://www.linkedin.com/in/deepanshu-yaduvanshi-30aa29229/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://media.geeksforgeeks.org/auth/profile/59yuv0r84c2xm9hzltfq"
              alt="Founder"
            />
            <Typography>Deepanshu Yaduvanshi</Typography>
            <Button onClick={visitLinkedin} color="primary">
              Visit LinkedIn
            </Button>
            <span>
              This is a Ecommerce wesbite made by @deepanshu.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://github.com/DeepanshuYaduvanshi"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.linkedin.com/in/deepanshu-yaduvanshi-30aa29229/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
