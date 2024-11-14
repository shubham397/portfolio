import React from "react";
import {
  FcBusinessman,
  FcDocument,
  FcBusiness,
  FcContacts,
} from "react-icons/fc";
import "./header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function createMenu(icon, name, url) {
    return (
      <div
        onClick={() => {
          navigate(url);
        }}
        className="menu-card"
      >
        {icon}
        <label>{name}</label>
      </div>
    );
  }

  return (
    <>
      <div className="header-div">
        {createMenu(<FcBusinessman className="icon" />, "About", "/")}
        {createMenu(<FcBusiness className="icon" />, "Work", "/work")}
        {createMenu(<FcContacts className="icon" />, "Contact", "/contact")}
      </div>
    </>
  );
}

export default Header;
