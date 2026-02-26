import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/login/Login";
import AdminLayout from "./pages/admin/adminlogout/Adminlogout";
import DirektorLayout from "./pages/direktor/direktorlogout/DirektorLogout";
import TeacherLogout from "./pages/teacher/teacherlogout/TeacherLogout";
import PrivateRoute from "./components/Priveroute";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Alisher Karimov", phone: "+998901234567", group: "React-01", balance: 500000 },
    { id: 2, name: "Madina Tursunova", phone: "+998912345678", group: "Python-01", balance: -200000 },
    { id: 3, name: "Jasur Islomov", phone: "+998933344455", group: "React-01", balance: -150000 },
  ]);

  const [teachers, setTeachers] = useState([
    { id: 1, name: "Alex Thompson", subject: "JavaScript", status: "Active" },
    { id: 2, name: "James Wilson", subject: "Python", status: "Active" },
  ]);

  const [groups] = useState([
    { id: 1, name: "React-01" },
    { id: 2, name: "Python-01" },
  ]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* ADMIN */}
        <Route
          path="/admin/*"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <AdminLayout
                students={students}
                setStudents={setStudents}
                teachers={teachers}
                setTeachers={setTeachers}
                groups={groups}
              />
            </PrivateRoute>
          }
        />

        {/* DIREKTOR */}
        <Route
          path="/direktor/*"
          element={
            <PrivateRoute allowedRoles={["direktor"]}>
              <DirektorLayout
                students={students}
                teachers={teachers}
                groups={groups}
              />
            </PrivateRoute>
          }
        />

        {/* TEACHER */}
        <Route
          path="/app/*"
          element={
            <PrivateRoute allowedRoles={["teacher"]}>
              <TeacherLogout
                students={students}
                teachers={teachers}
                groups={groups}
              />
            </PrivateRoute>
          }
        />

        {/* HAR QANDAY NOTO‘G‘RI ROUTE → LOGIN */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;