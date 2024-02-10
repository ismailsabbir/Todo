import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import avatar from "../../Images/avatar4.jpg";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
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
  return (
    <div>
      <div className="all-to-do-con">
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
                      <span className="staff-image-name">
                        <img src={avatar} alt="" />
                        {/* <p className="staff_name_mobile">{order?.name}</p> */}
                      </span>
                    </td>
                    <td className="to_do_info">
                      <span className="to_do_title">
                        <p>{todo?.title}</p>
                      </span>{" "}
                    </td>
                    <td className="to_do_info">
                      <span className="to_do_description">
                        <p>{todo?.description}</p>
                      </span>{" "}
                    </td>
                    <td className="to_do_info">
                      <span className="staff_join_mobile">
                        <p className="staff_join_mobile">2/10/2024</p>
                      </span>{" "}
                    </td>
                    <td className="to_do_info">
                      <span>{todo?.priority}</span>{" "}
                    </td>
                    <td className="to_do_info">
                      <span>Completed</span>
                    </td>
                    <td className="to_do_info">
                      <button
                        // onClick={() => handleadmin(order?._id)}
                        className="make_Completed"
                      >
                        Make Completed
                      </button>
                    </td>
                    <td className="to_do_info">
                      <div className="print-serach">
                        <Link to="/dashbord/staff/edit-staff" state={todo}>
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
