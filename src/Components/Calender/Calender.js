import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calender.css";
const Calender = () => {
  return (
    <div className="calender_con">
      <Calendar className="calender" />
    </div>
  );
};

export default Calender;
