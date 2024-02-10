import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlinePayments, MdProductionQuantityLimits } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
import { LuCompass } from "react-icons/lu";
import { MdOutlineNoteAlt } from "react-icons/md";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiSquaresFourDuotone } from "react-icons/pi";
import { FiSettings, FiUser, FiUsers } from "react-icons/fi";
import { BiErrorCircle, BiHomeAlt, BiSolidContact } from "react-icons/bi";
import { RiMenuAddLine, RiPagesLine } from "react-icons/ri";
import "./HomeLeft.css";
import { IoCalendarOutline, IoImagesOutline } from "react-icons/io5";
const HomeLeft = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dashbord-left-con print:hidden">
      <NavLink
        className={({ isActive }) =>
          isActive ? "dashbord-active-link" : "dashbord-link"
        }
        to="/"
      >
        <PiSquaresFourDuotone className="dashbord-icon"></PiSquaresFourDuotone>{" "}
        Dashboard
      </NavLink>

      <NavLink
        to="/todo/list"
        className={({ isActive }) =>
          isActive ? "dashbord-active-link" : "dashbord-link"
        }
      >
        <LuListTodo className="dashbord-icon"></LuListTodo>
        Todo List
      </NavLink>
      <NavLink
        to="/add/todo"
        className={({ isActive }) =>
          isActive ? "dashbord-active-link" : "dashbord-link"
        }
      >
        <RiMenuAddLine className="dashbord-icon"></RiMenuAddLine>
        Add TodO
      </NavLink>
      <NavLink
        to="/dashbord/sheet/attendance"
        className={({ isActive }) =>
          isActive ? "dashbord-active-link" : "dashbord-link"
        }
      >
        <IoCalendarOutline className="dashbord-icon"></IoCalendarOutline>
        Calendar
      </NavLink>
      <NavLink
        to="/dashbord/sheet/attendance"
        className={({ isActive }) =>
          isActive ? "dashbord-active-link" : "dashbord-link"
        }
      >
        <BiSolidContact className="dashbord-icon"></BiSolidContact>
        Contact
      </NavLink>
      <NavLink
        to="/dashbord/sheet/attendance"
        className={({ isActive }) =>
          isActive ? "dashbord-active-link" : "dashbord-link"
        }
      >
        <IoImagesOutline className="dashbord-icon"></IoImagesOutline>
        Galary
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "dashbord-active-link" : "dashbord-link"
        }
        to="/dashbord/setting"
      >
        <FiSettings className="dashbord-icon"></FiSettings>Settings
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "dashbord-active-link" : "dashbord-link"
        }
        to="/home"
      >
        <BiHomeAlt className="dashbord-icon"></BiHomeAlt>Online Store
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "dashbord-active-link" : "dashbord-link"
        }
        to="/dashbord/error-page"
      >
        <BiErrorCircle className="dashbord-icon"></BiErrorCircle> 404 Pages
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "dashbord-active-link" : "dashbord-link"
        }
        to="/dashbord/comming-soon"
      >
        <LuCompass className="dashbord-icon"></LuCompass> Coming Soon
      </NavLink>
    </div>
  );
};

export default HomeLeft;
