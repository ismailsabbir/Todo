import React, { useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import avatar from "../../Images/avatar4.jpg";
const HomePage = () => {
  const [allToDos, setallToDos] = useState([{}]);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default HomePage;
