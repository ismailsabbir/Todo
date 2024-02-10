import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LuCompass } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { PiSquaresFourDuotone } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { BiErrorCircle, BiHomeAlt, BiSolidContact } from "react-icons/bi";
import { RiMenuAddLine } from "react-icons/ri";
import "./HomeLeft.css";
import { IoCalendarOutline, IoImagesOutline } from "react-icons/io5";
import { FaRegChartBar } from "react-icons/fa6";
import image from "../../Images/menu_9008797.png";
const HomeLeft = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div
      className={`dashbord-left-con print:hidden ${isMenuOpen ? "open" : ""}`}
    >
      <div className="toggle-btn" onClick={toggleMenu}>
        <img src={image} alt="" />
        <FaRegChartBar className="togal_logo" />
      </div>
      <div className="menu-links">
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
          Add Todo
        </NavLink>
        <NavLink
          to="/calender"
          className={({ isActive }) =>
            isActive ? "dashbord-active-link" : "dashbord-link"
          }
        >
          <IoCalendarOutline className="dashbord-icon"></IoCalendarOutline>
          Calendar
        </NavLink>
        <NavLink
          to="/dashbord/contact"
          className={({ isActive }) =>
            isActive ? "dashbord-active-link" : "dashbord-link"
          }
        >
          <BiSolidContact className="dashbord-icon"></BiSolidContact>
          Contact
        </NavLink>
        <NavLink
          to="/dashbord/gallary"
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
    </div>
    // <div className="dashbord-left-con print:hidden">
    //   <NavLink
    //     className={({ isActive }) =>
    //       isActive ? "dashbord-active-link" : "dashbord-link"
    //     }
    //     to="/"
    //   >
    //     <PiSquaresFourDuotone className="dashbord-icon"></PiSquaresFourDuotone>{" "}
    //     Dashboard
    //   </NavLink>

    //   <NavLink
    //     to="/todo/list"
    //     className={({ isActive }) =>
    //       isActive ? "dashbord-active-link" : "dashbord-link"
    //     }
    //   >
    //     <LuListTodo className="dashbord-icon"></LuListTodo>
    //     Todo List
    //   </NavLink>
    //   <NavLink
    //     to="/add/todo"
    //     className={({ isActive }) =>
    //       isActive ? "dashbord-active-link" : "dashbord-link"
    //     }
    //   >
    //     <RiMenuAddLine className="dashbord-icon"></RiMenuAddLine>
    //     Add Todo
    //   </NavLink>
    //   <NavLink
    //     to="/calender"
    //     className={({ isActive }) =>
    //       isActive ? "dashbord-active-link" : "dashbord-link"
    //     }
    //   >
    //     <IoCalendarOutline className="dashbord-icon"></IoCalendarOutline>
    //     Calendar
    //   </NavLink>
    //   <NavLink
    //     to="/dashbord/contact"
    //     className={({ isActive }) =>
    //       isActive ? "dashbord-active-link" : "dashbord-link"
    //     }
    //   >
    //     <BiSolidContact className="dashbord-icon"></BiSolidContact>
    //     Contact
    //   </NavLink>
    //   <NavLink
    //     to="/dashbord/gallary"
    //     className={({ isActive }) =>
    //       isActive ? "dashbord-active-link" : "dashbord-link"
    //     }
    //   >
    //     <IoImagesOutline className="dashbord-icon"></IoImagesOutline>
    //     Galary
    //   </NavLink>

    //   <NavLink
    //     className={({ isActive }) =>
    //       isActive ? "dashbord-active-link" : "dashbord-link"
    //     }
    //     to="/dashbord/setting"
    //   >
    //     <FiSettings className="dashbord-icon"></FiSettings>Settings
    //   </NavLink>
    //   <NavLink
    //     className={({ isActive }) =>
    //       isActive ? "dashbord-active-link" : "dashbord-link"
    //     }
    //     to="/home"
    //   >
    //     <BiHomeAlt className="dashbord-icon"></BiHomeAlt>Online Store
    //   </NavLink>
    //   <NavLink
    //     className={({ isActive }) =>
    //       isActive ? "dashbord-active-link" : "dashbord-link"
    //     }
    //     to="/dashbord/error-page"
    //   >
    //     <BiErrorCircle className="dashbord-icon"></BiErrorCircle> 404 Pages
    //   </NavLink>
    //   <NavLink
    //     className={({ isActive }) =>
    //       isActive ? "dashbord-active-link" : "dashbord-link"
    //     }
    //     to="/dashbord/comming-soon"
    //   >
    //     <LuCompass className="dashbord-icon"></LuCompass> Coming Soon
    //   </NavLink>
    // </div>
  );
};

export default HomeLeft;
