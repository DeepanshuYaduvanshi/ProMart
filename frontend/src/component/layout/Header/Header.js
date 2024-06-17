import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

import {MdAccountCircle} from "react-icons/md";
import {MdSearch} from "react-icons/md";
import {MdAddShoppingCart} from "react-icons/md";

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
  profileIcon:true,
  profileIconColor:"#902bf5",
  ProfileIconElement:MdAccountCircle,
  searchIcon:true,
  searchIconColor: "#902bf5",
  SearchIconElement:MdSearch,
  cartIcon:true,
  cartIconColor: "#902bf5",
  CartIconElement:MdAddShoppingCart,
  profileIconColorHover: "#6e04d8",
  searchIconColorHover: "#6e04d8",
  cartIconColorHover: "#6e04d8",
  cartIconMargin: "1vmax",
 
};

const Header = () => {
  return( 
   <ReactNavbar {...options} />
  );
};

export default Header;