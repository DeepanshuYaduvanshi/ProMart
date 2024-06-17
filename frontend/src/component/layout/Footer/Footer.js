import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ProMart</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; Deepanshu</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://github.com/DeepanshuYaduvanshi">GitHub</a>
        <a href="https://www.linkedin.com/in/deepanshu-yaduvanshi-30aa29229/">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
