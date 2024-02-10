import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import avatar from "../../Images/avatar4.jpg";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import "./AllTodos.css";
import { Form } from "react-bootstrap";
const AllTodos = () => {
  const [allTodos, setAllTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  useEffect(() => {
    let savedTodos = JSON.parse(localStorage.getItem("todolist"));
    console.log(savedTodos);
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
  const handleToDoDelete = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delate the Task!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "DELATE",
    }).then((result) => {
      if (result.isConfirmed) {
        let reducedTodos = [...allTodos];
        reducedTodos.splice(index, 1);
        localStorage.setItem("todolist", JSON.stringify(reducedTodos));
        setAllTodos(reducedTodos);
        toast("Delete Sucessfully !!!", {
          position: "top-center",
          autoClose: 1000,
        });
      }
    });
  };
  const handleComplete = (index, todo) => {
    const newData = {
      title: todo?.title,
      description: todo?.description,
      priority: todo?.priority,
      finalDate: todo?.finalDate,
      finalTime: todo?.finalTime,
      completed: "Completed",
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You want to update the Task!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Update",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedData = [...allTodos];
        updatedData[index] = { ...updatedData[index], ...newData };
        setAllTodos(updatedData);
        localStorage.setItem("todolist", JSON.stringify(updatedData));
        toast("Update Sucessfully !!!", {
          position: "top-center",
          autoClose: 1000,
        });
      }
    });
  };
  function getClassForPriority(priority) {
    switch (priority) {
      case "High":
        return "highPriority";
      case "Med":
        return "mediumPriority";
      case "Low":
        return "lowPriority";
      default:
        return "";
    }
  }
  const handlepriority = (status) => {
    let savedTodos = JSON.parse(localStorage.getItem("todolist"));
    setAllTodos(savedTodos);
    const filterproduct = savedTodos?.filter(
      (todo) => todo?.priority === status
    );
    setAllTodos(filterproduct);
  };
  const handlestatus = (status) => {
    let savedTodos = JSON.parse(localStorage.getItem("todolist"));
    setAllTodos(savedTodos);
    const filterproduct = savedTodos?.filter(
      (todo) => todo?.completed === status
    );
    setAllTodos(filterproduct);
  };
  const handleresetfilter = () => {
    let savedTodos = JSON.parse(localStorage.getItem("todolist"));
    setAllTodos(savedTodos);
  };
  return (
    <div>
      <div className="all-to-do-con">
        <div>
          <h6 className="filter_title">Filter based on Priority/Status.</h6>
          <div className="search_container">
            <Form.Group
              className="mb-3 to_do_search_group"
              controlId="formBasicEmail"
            >
              <Form.Select
                aria-label="Default select example"
                name="priority"
                // value={todo?.priority}
                onChange={(e) => handlepriority(e.target.value)}
              >
                <option value="High">High</option>
                <option value="Med">Med</option>
                <option value="Low">Low</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3 to_do_search_group"
              controlId="formBasicEmail"
            >
              {/* <Form.Label className="input_lavel">status</Form.Label> */}
              <Form.Select
                aria-label="Default select example"
                name="priority"
                // value={todo?.completed}
                onChange={(e) => handlestatus(e.target.value)}
              >
                <option value="Completed">Completed</option>
                <option value="Not Completed">Not Completed</option>
              </Form.Select>
            </Form.Group>
            <button onClick={handleresetfilter} className="reset_btn">
              Filter Reset
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="overflow-x-auto">
            <table className="table to-do-table">
              <tr className="to-do-tr">
                <th className="recent-order-hed">Profile</th>
                <th className="recent-order-hed">Title</th>
                <th className="recent-order-hed">Description</th>
                <th className="recent-order-hed">DATE</th>
                <th className="recent-order-hed">Priority</th>
                <th className="recent-order-hed">Status</th>
                <th className="recent-order-hed">Change</th>
                <th className="recent-order-hed">Action</th>
              </tr>
              <tbody>
                {allTodos?.map((todo, index) => (
                  <tr>
                    <td className="das-order-data">
                      <span className="user-image-name">
                        <img src={avatar} alt="" />
                        {/* <p className="staff_name_mobile">{order?.name}</p> */}
                      </span>
                    </td>
                    <td className="to_do_info">
                      <span className="to_do_title">
                        <p>{todo?.title?.slice(0, 20)}...</p>
                      </span>{" "}
                    </td>
                    <td className="to_do_info">
                      <span className="to_do_description">
                        <p>{todo?.description?.slice(0, 30)}....</p>
                      </span>{" "}
                    </td>
                    <td className="to_do_info">
                      <span className="staff_join_mobile">
                        <p className="staff_join_mobile">{todo?.finalDate}</p>
                      </span>{" "}
                    </td>
                    <td className="to_do_info">
                      <span className={getClassForPriority(todo?.priority)}>
                        {todo?.priority}
                      </span>{" "}
                    </td>
                    <td className="to_do_info">
                      <span>{todo?.completed}</span>
                    </td>
                    <td className="to_do_info">
                      <button
                        onClick={() => handleComplete(index, todo)}
                        className={`make_Completed ${
                          todo?.completed !== "Not Completed" ? "disabled" : ""
                        }`}
                        // className="make_Completed"
                        disabled={todo?.completed !== "Not Completed"}
                      >
                        Make Completed
                      </button>
                    </td>
                    <td className="to_do_info">
                      <div className="print-serach">
                        <Link to="/update/todo" state={{ todo, index }}>
                          <FiEdit className="Edit_to_do"></FiEdit>
                        </Link>

                        <RiDeleteBinLine
                          onClick={() => handleToDoDelete(index)}
                          className="Edit_to_do"
                        ></RiDeleteBinLine>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AllTodos;
