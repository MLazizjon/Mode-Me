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
  // ================= STUDENTS =================
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Alisher Karimov",
      phone: "+998901234567",
      group: "Frontend Bootcamp #12",
      balance: 500000,
    },
    {
      id: 2,
      name: "Madina Tursunova",
      phone: "+998912345678",
      group: "UI/UX Dizayn #05",
      balance: -200000,
    },
    {
      id: 3,
      name: "Jasur Islomov",
      phone: "+998933344455",
      group: "React-01",
      balance: -150000,
    },
  ]);

  // ================= TEACHERS =================
  const [teachers, setTeachers] = useState([
    { id: 1, name: "Alex Thompson", subject: "JavaScript", status: "Active" },
    { id: 2, name: "James Wilson", subject: "Python", status: "Active" },
  ]);

  // ================= GROUPS =================
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "Frontend Bootcamp #12",
      status: "Faol",
      teacher: "Jasur Akromov",
      days: "Dush, Chor, Juma",
      time: "14:00 - 16:00",
      max: 15,
      icon: "💻",
      color: "#E0F2FE",
    },
    {
      id: 2,
      name: "UI/UX Dizayn #05",
      status: "Faol",
      teacher: "Malika Salieva",
      days: "Sesh, Pay, Shan",
      time: "10:00 - 12:00",
      max: 15,
      icon: "🎨",
      color: "#FEF3C7",
    },
    {
      id: 3,
      name: "React-01",
      status: "Faol",
      teacher: "Alex Thompson",
      days: "Dush, Chor",
      time: "18:00 - 20:00",
      max: 12,
      icon: "⚛️",
      color: "#DCFCE7",
    },
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
                setGroups={setGroups}
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
                setStudents={setStudents}
                teachers={teachers}
                setTeachers={setTeachers}
                groups={groups}
                setGroups={setGroups}
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

        {/* NOT FOUND */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;