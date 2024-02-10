import React from "react";
import HomeLeft from "../Components/HomeLeft/HomeLeft";
import { Outlet } from "react-router-dom";
import "./Main.css";
import TopNavbar from "../Components/TopNavbar/TopNavbar";
const Main = () => {
  return (
    <div className="layout_con">
      <div className="row dashbord-layut-con">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-3 dashbord-layout-left">
          <HomeLeft></HomeLeft>
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-9 dashbordlayout-right">
          <TopNavbar></TopNavbar>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
