import React, { useEffect, useState } from "react";
import "./AddTodoList.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const AddTodoList = () => {
  const [allTodos, setAllTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = e.target.title.value;
    const description = e.target.description.value;
    const priority = e.target.priority.value;
    console.log(title, description, priority);
    let newToDoObj = {
      title: title,
      description: description,
      priority: priority,
    };
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newToDoObj);
    setAllTodos(updatedTodoArr);
    console.log(priority);
    if (!title && !description) {
      toast("Please Give All Information !!!", {
        position: "top-center",
        autoClose: 1000,
      });
    } else if (!title) {
      toast("Title is Required !!!", {
        position: "top-center",
        autoClose: 1000,
      });
    } else if (!description) {
      toast("Description is Required !!!", {
        position: "top-center",
        autoClose: 1000,
      });
    } else {
      localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));
      toast("Add sucessfully !!!", {
        position: "top-center",
        autoClose: 1000,
      });
      form.reset();
    }
  };
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
  return (
    <div className="add_todo_con">
      <div className="add_tod_hed">
        <h6>Add Todo</h6>
      </div>
      <div className="add_todo_form">
        <Form onSubmit={handleSubmit}>
          <Form.Group
            className="mb-3 to_do_input_group"
            controlId="formBasicEmail"
          >
            <Form.Label className="input_lavel">Title</Form.Label>
            <Form.Control type="text" placeholder="Task Title" name="title" />
          </Form.Group>
          <Form.Group
            className="mb-3 to_do_input_group"
            controlId="formBasicEmail"
          >
            <Form.Label className="input_lavel">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Task Description"
              name="description"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 to_do_input_group"
            controlId="formBasicEmail"
          >
            <Form.Label className="input_lavel">Priority</Form.Label>
            <Form.Select aria-label="Default select example" name="priority">
              {/* <option selected disabled>
                Select Task Priority
              </option> */}
              <option value="High">High</option>
              <option value="Med">Med</option>
              <option value="Low">Low</option>
            </Form.Select>
          </Form.Group>
          <div className="add_todo_buttons">
            <button type="submit" className="add_todo_btn">
              Add Todo
            </button>
            <Link type="submit" className="cancel_todo_btn">
              Cancel
            </Link>
          </div>
        </Form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddTodoList;