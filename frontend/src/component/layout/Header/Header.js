import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColorHover: "#6e04d8",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#6e04d8",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "#902bf5",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#6e04d8",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "#6e04d8",
  searchIconColor: "#6e04d8",
  cartIconColor: "#6e04d8",
  profileIconColorHover: "#6e04d8",
  searchIconColorHover: "#6e04d8",
  cartIconColorHover: "#6e04d8",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
