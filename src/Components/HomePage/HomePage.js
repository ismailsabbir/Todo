import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { BsCartCheck, BsJournalBookmark } from "react-icons/bs";
import { SiPowerpages } from "react-icons/si";
import { FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";
import Chirts from "../Chirts/Chirts";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { MdConfirmationNumber } from "react-icons/md";
const HomePage = () => {
  const [allTodos, setAllTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  useEffect(() => {
    let savedTodos = JSON.parse(localStorage.getItem("todolist"));
    let savedCompletedToDos = JSON.parse(
      localStorage.getItem("completedTodos")
    );
    if (savedTodos) {
      setAllTodos(savedTodos);
    }
    if (savedCompletedToDos) {
      setCompletedTodos(savedCompletedToDos);
    }
  }, []);
  const highPriority = allTodos?.filter((todo) => todo?.priority === "High");
  const medPriority = allTodos?.filter((todo) => todo?.priority === "Med");
  const lowPriority = allTodos?.filter((todo) => todo?.priority === "Low");
  const completed = allTodos?.filter((todo) => todo?.completed === "Completed");
  const notCompleted = allTodos?.filter(
    (todo) => todo?.completed === "Not Completed"
  );

  console.log(highPriority);
  return (
    <div>
      <div className=" dashbord-home-first-hole">
        <div className=" dashbord-first-card">
          <div className="card_title">
            <FaTasks className="card_logo"></FaTasks>
            <h6>Total Task</h6>
          </div>
          <div className="card_infos">
            <div className="number_con">
              {/* <AiOutlineFieldNumber className="number_logo" /> */}
              <h2 className="no_task">{allTodos?.length}</h2>
            </div>

            <span>Measure How Fast...</span>
            <br />
            <Link className="more_btn">More</Link>
          </div>
        </div>
        <div className=" dashbord-first-card">
          <div className="card_title">
            <FaTasks className="card_logo"></FaTasks>
            <h6>High Priority</h6>
          </div>
          <div className="card_infos" id="high_priority">
            <div className="number_con">
              {/* <AiOutlineFieldNumber className="number_logo" /> */}
              <h2 className="no_task">{highPriority?.length}</h2>
            </div>

            <span>Measure How Fast...</span>
            <br />
            <Link className="more_btn">More</Link>
          </div>
        </div>
        <div className=" dashbord-first-card">
          <div className="card_title">
            <FaTasks className="card_logo"></FaTasks>
            <h6>Med Priority</h6>
          </div>
          <div className="card_infos" id="med_priority">
            <div className="number_con">
              {/* <AiOutlineFieldNumber className="number_logo" /> */}
              <h2 className="no_task">{medPriority?.length}</h2>
            </div>

            <span>Measure How Fast...</span>
            <br />
            <Link className="more_btn">More</Link>
          </div>
        </div>
        <div className=" dashbord-first-card">
          <div className="card_title">
            <FaTasks className="card_logo"></FaTasks>
            <h6>Low Priority</h6>
          </div>
          <div className="card_infos">
            <div className="number_con">
              {/* <AiOutlineFieldNumber className="number_logo" /> */}
              <h2 className="no_task">{lowPriority?.length}</h2>
            </div>

            <span>Measure How Fast...</span>
            <br />
            <Link className="more_btn">More</Link>
          </div>
        </div>
        <div className=" dashbord-first-card">
          <div className="card_title">
            <FaTasks className="card_logo"></FaTasks>
            <h6>Completed</h6>
          </div>
          <div className="card_infos" id="completed">
            <div className="number_con">
              {/* <AiOutlineFieldNumber className="number_logo" /> */}
              <h2 className="no_task">{completed?.length}</h2>
            </div>

            <span>Measure How Fast...</span>
            <br />
            <Link className="more_btn">More</Link>
          </div>
        </div>
        <div className=" dashbord-first-card">
          <div className="card_title">
            <FaTasks className="card_logo"></FaTasks>
            <h6>Not Completed</h6>
          </div>
          <div className="card_infos" id="not_completed">
            <div className="number_con">
              {/* <AiOutlineFieldNumber className="number_logo" /> */}
              <h2 className="no_task">{notCompleted?.length}</h2>
            </div>

            <span>Measure How Fast...</span>
            <br />
            <Link className="more_btn">More</Link>
          </div>
        </div>
      </div>
      <Chirts></Chirts>
    </div>
  );
};

export default HomePage;
