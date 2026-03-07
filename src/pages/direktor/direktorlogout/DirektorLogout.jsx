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
import Staistika from "../statistika/Statistika";

const DirektorLayout = ({
  students,
  setStudents,
  teachers,
  setTeachers,
  groups,
  setGroups,
  role = "direktor",
}) => {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 900);
  const [sidebarWidth, setSidebarWidth] = useState(280);

  // Responsiv uchun
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
      {/* SIDEBAR */}
      <Sidebar
        role={role}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        sidebarWidth={sidebarWidth}
        setSidebarWidth={setSidebarWidth}
      />

      {/* MAIN AREA */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          marginLeft: showSidebar ? sidebarWidth : 0,
          transition: "margin 0.3s ease",
        }}
      >
        {/* HEADER */}
        <Header
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          sidebarWidth={sidebarWidth}
        />

        {/* CONTENT */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
          <Routes>
            {/* Dashboard / Statistika */}
            <Route
              path="/"
              element={
                <Panel
                  students={students}
                  teachers={teachers}
                  groups={groups}
                  sidebarWidth={sidebarWidth}
                />
              }
            />
            <Route
              path="statistika"
              element={
                <Staistika
                  students={students}
                  teachers={teachers}
                  groups={groups}
                  sidebarWidth={sidebarWidth}
                />
              }
            />

            {/* Talabalar */}
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

            {/* O'qituvchilar */}
            <Route
              path="teachers"
              element={
                <UstozlarDavomati
                  teachers={teachers}
                  setTeachers={setTeachers}
                  sidebarWidth={sidebarWidth}
                />
              }
            />

            {/* Guruhlar */}
            <Route
              path="guruh"
              element={
                <Guruhlar
                  groups={groups}
                  setGroups={setGroups}
                  teachers={teachers}
                  students={students}
                  sidebarWidth={sidebarWidth}
                />
              }
            />

            {/* Davomat */}
            <Route
              path="davomat"
              element={
                <Davomat
                  groups={groups}
                  students={students}
                  setStudents={setStudents}
                  sidebarWidth={sidebarWidth}
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
                  sidebarWidth={sidebarWidth}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DirektorLayout;