import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import TeacherHeader from "../header/Header";
import TeacherSidebar from "../sidebar/Sidebar";
import Guruh1 from "../guruh1/Guruh1";
import Guruh2 from "../guruh2/Guruh2";
import Guruh3 from "../guruh3/Guruh3";
import Ishhaqi from "../salarry/Ishhaqi";

const TeacherLogout = () => {
  const [g1Students, setG1Students] = useState([]);
  const [g2Students, setG2Students] = useState([]);
  const [g3Students, setG3Students] = useState([]);

  return (
    <div className="app">
      <TeacherHeader />
      <TeacherSidebar />

      <Routes>
        <Route
          path="/"
          element={<Guruh1 students={g1Students} setStudents={setG1Students} />}
        />
        <Route
          path="/guruh2"
          element={<Guruh2 students={g2Students} setStudents={setG2Students} />}
        />
        <Route
          path="/guruh3"
          element={<Guruh3 students={g3Students} setStudents={setG3Students} />}
        />
        <Route
          path="/ishhaqi"
          element={
            <Ishhaqi allData={{ g1: g1Students, g2: g2Students, g3: g3Students }} />
          }
        />
      </Routes>
    </div>
  );
};

export default TeacherLogout;