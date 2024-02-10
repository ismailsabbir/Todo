import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Main from "./Layouts/Main";
import AddTodoList from "./Components/AddTodoList/AddTodoList";
import AllTodos from "./Components/AllTodos/AllTodos";
import UpdateTodo from "./Components/UpdateTodo/UpdateTodo";
import Calender from "./Components/Calender/Calender";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>,
        },
        {
          path: "/todo/list",
          element: <AllTodos></AllTodos>,
        },
        {
          path: "/add/todo",
          element: <AddTodoList></AddTodoList>,
        },
        {
          path: "/update/todo",
          element: <UpdateTodo></UpdateTodo>,
        },
        {
          path: "/calender",
          element: <Calender></Calender>,
        },
        {
          path: "*",
          element: <NotFound></NotFound>,
        },
      ],
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
