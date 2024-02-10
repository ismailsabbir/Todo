import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Form } from "react-bootstrap";
const UpdateTodo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const todoinfo = location?.state;
  const [allTodos, setAllTodos] = useState([]);
  const [todo, settodo] = useState({});
  useEffect(() => {
    settodo(todoinfo?.todo);
  }, []);
  useEffect(() => {
    let savedTodos = JSON.parse(localStorage.getItem("todolist"));
    if (savedTodos) {
      setAllTodos(savedTodos);
    }
  }, []);

  const handleupdate = (e) => {
    e.preventDefault();
    const newData = {
      title: todo?.title,
      description: todo?.description,
      priority: todo?.priority,
      completed: todo?.completed,
      finalDate: todo?.finalDate,
      finalTime: todo?.finalTime,
    };
    const index = todoinfo?.index;
    console.log(newData);
    console.log(index);
    const updatedData = [...allTodos];
    updatedData[index] = { ...updatedData[index], ...newData };
    setAllTodos(updatedData);
    localStorage.setItem("todolist", JSON.stringify(updatedData));
    toast("Update Sucessfully !!!", {
      position: "top-center",
      autoClose: 1000,
    });
    navigate("/todo/list");
  };
  return (
    <div className="add_todo_con">
      <div className="add_tod_hed">
        <h6>Update Todo</h6>
      </div>
      <div className="add_todo_form">
        <Form onSubmit={handleupdate}>
          <Form.Group
            className="mb-3 to_do_input_group"
            controlId="formBasicEmail"
          >
            <Form.Label className="input_lavel">Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Task Title"
              name="title"
              value={todo?.title}
              onChange={(e) => settodo({ ...todo, title: e.target.value })}
            />
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
              value={todo?.description}
              onChange={(e) =>
                settodo({ ...todo, description: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group
            className="mb-3 to_do_input_group"
            controlId="formBasicEmail"
          >
            <Form.Label className="input_lavel">Priority</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="priority"
              value={todo?.priority}
              onChange={(e) => settodo({ ...todo, priority: e.target.value })}
            >
              <option value="High">High</option>
              <option value="Med">Med</option>
              <option value="Low">Low</option>
            </Form.Select>
          </Form.Group>
          <Form.Group
            className="mb-3 to_do_input_group"
            controlId="formBasicEmail"
          >
            <Form.Label className="input_lavel">status</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="priority"
              value={todo?.completed}
              onChange={(e) => settodo({ ...todo, completed: e.target.value })}
            >
              <option value="Completed">Completed</option>
              <option value="Not Completed">Not Completed</option>
            </Form.Select>
          </Form.Group>
          <div className="add_todo_buttons">
            <button type="submit" className="add_todo_btn">
              Update Todo
            </button>
            <Link to="/todo/list" className="cancel_todo_btn">
              Cancel
            </Link>
          </div>
        </Form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UpdateTodo;
