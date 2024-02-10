import React, { useEffect, useState } from "react";
import { XAxis, YAxis, Tooltip, BarChart, Legend, Bar } from "recharts";
import "./Chirts.css";
const Chirts = () => {
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
  const data = [
    {
      name: "Total Task",
      uv: 4000,
      task: allTodos?.length,
      amt: allTodos?.length,
    },
    {
      name: "High Priority",
      uv: 3000,
      task: highPriority?.length,
      amt: highPriority?.length,
    },
    {
      name: "Med Priority",
      uv: 2000,
      task: medPriority?.length,
      amt: medPriority?.length,
    },
    {
      name: "Low Priority",
      uv: 2780,
      task: lowPriority?.length,
      amt: lowPriority?.length,
    },
    {
      name: "Completed",
      uv: 1890,
      task: completed?.length,
      amt: completed?.length,
    },
    {
      name: "Not Completed",
      uv: 1890,
      task: notCompleted?.length,
      amt: notCompleted?.length,
    },
    // {
    //   name: "Page F",
    //   uv: 2390,
    //   pv: 3800,
    //   amt: 2500,
    // },
    // {
    //   name: "Page G",
    //   uv: 3490,
    //   pv: 4300,
    //   amt: 2100,
    // },
  ];
  const data1 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="dash-chirt-con">
      <div className="chart-container">
        <p className="groth-text mb-5">Task statistics</p>
        <div className="row chart_containers">
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 chart_container_mobile">
            <BarChart
              width={400}
              height={300}
              data={data}
              margin={{
                top: 5,
                // right: 30,
                // left: 20,
                bottom: 5,
              }}
              barSize={20}
              className="barchart_mobile"
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{
                  left: 10,
                  right: 10,
                }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="task"
                fill="#8884d8"
                background={{ fill: "#eee" }}
              />
            </BarChart>
          </div>
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 chart_container_mobile">
            <BarChart
              width={400}
              height={300}
              data={data}
              margin={{
                top: 5,
                // right: 30,
                // left: 20,
                bottom: 5,
              }}
              barSize={20}
              className="barchart_mobile"
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="task"
                fill="#8884d8"
                background={{ fill: "#eee" }}
              />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chirts;
