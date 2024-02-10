import React from "react";
import "./NotFound.css";
import image from "../../Images/notfound.svg";
const NotFound = () => {
  return (
    <div className="not-found-con">
      <img src={image} alt="not" />
      <h3>Sorry, we can not find this Routes😞</h3>
    </div>
  );
};

export default NotFound;
