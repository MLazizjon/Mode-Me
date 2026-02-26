import { Routes, Route } from "react-router-dom";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/SideBar";

import Panel from "../panel/Panel";
import Talabalar from "../talabalar/Talabalar";
import Teachers from "../teachers/Teachers";
import Group from "../group/Group";
import Paynets from "../paynets/Paynets";
import Detalsuser from "../detalsuser/Detalsuser"; // Yangi import

const AdminLayout = ({
  students,
  setStudents,
  teachers,
  setTeachers,
  groups,
  setGroups,
}) => {
  return (
    <div className="App">
      <Header />
      <Sidebar />

      <Routes>
        <Route
          path="/"
          element={
            <Panel
              students={students}
              teachers={teachers}
              setTeachers={setTeachers}
            />
          }
        />

        <Route
          path="talabalar"
          element={<Talabalar students={students} setStudents={setStudents} />}
        />

        {/* 🟢 Talaba ustiga bosilganda ochiladigan sahifa */}
        <Route
          path="talabalar/:id"
          element={<Detalsuser students={students} />}
        />

        <Route
          path="teachers"
          element={<Teachers teachers={teachers} setTeachers={setTeachers} />}
        />

        <Route
          path="guruh"
          element={<Group groups={groups} setGroups={setGroups} />}
        />

        <Route
          path="paynets/:id"
          element={<Paynets students={students} setStudents={setStudents} />}
        />
      </Routes>
    </div>
  );
};

export default AdminLayout;
