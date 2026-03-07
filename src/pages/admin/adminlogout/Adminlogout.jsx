import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/SideBar";

import Panel from "../panel/Panel";
import Talabalar from "../talabalar/Talabalar";
import UstozlarDavomati from "../ustozlardavomati/UstozlarDavomati";
import Guruhlar from "../guruhlar/Guruhlar";
import Davomat from "../davomat/Davomat";
import Detalsuser from "../detalsuser/Detalsuser";

const AdminLayout = ({
  students,
  setStudents,
  teachers,
  setTeachers,
  groups,
  setGroups,
  role,
}) => {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 900);
  const [sidebarWidth, setSidebarWidth] = useState(280);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setShowSidebar(true);
        setSidebarWidth(280);
      } else {
        setShowSidebar(false);
        setSidebarWidth(0);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar
        role={role}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        sidebarWidth={sidebarWidth}
        setSidebarWidth={setSidebarWidth}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          marginLeft: showSidebar ? sidebarWidth : 0,
          transition: "margin 0.3s ease",
        }}
      >
        <Header
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          sidebarWidth={sidebarWidth}
        />

        <div style={{ flex: 1, overflowY: "auto" }}>
          <Routes>
            <Route
              path="/"
              element={
                <Panel
                  students={students}
                  teachers={teachers}
                  setTeachers={setTeachers}
                  sidebarWidth={sidebarWidth}
                />
              }
            />
            <Route
              path="talabalar"
              element={
                <Talabalar
                  students={students}
                  setStudents={setStudents}
                  sidebarWidth={sidebarWidth}
                />
              }
            />
            <Route
              path="talabalar/:id"
              element={<Detalsuser students={students} />}
            />
            <Route
              path="davomat"
              element={
                <Davomat
                  groups={groups}
                  students={students}
                  setStudents={setStudents}
                />
              }
            />
            <Route
              path="guruh/:groupName"
              element={
                <Davomat
                  groups={groups}
                  students={students}
                  setStudents={setStudents}
                />
              }
            />
            <Route
              path="teachers"
              element={<UstozlarDavomati teachers={teachers} setTeachers={setTeachers} />}
            />
            <Route
              path="guruh"
              element={
                <Guruhlar
                  groups={groups}
                  setGroups={setGroups}
                  teachers={teachers}
                  students={students}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;