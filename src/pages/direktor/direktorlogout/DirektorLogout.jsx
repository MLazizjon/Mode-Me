import { Routes, Route } from "react-router-dom";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/SideBar";

import Panel from "../panel/Panel"; // reuse qilamiz
import Talabalar from "../talabalar/Talabalar";
import Paynets from "../paynets/Paynets";

const DirektorLayout = ({ students, setStudents, teachers, groups }) => {
  return (
    <div className="App">
      <Header />
      <Sidebar role="direktor" />

      <Routes>
        {/* Dashboard */}
        <Route
          path="/"
          element={<Panel students={students} teachers={teachers} />}
        />

        {/* Talabalar */}
        <Route
          path="talabalar"
          element={<Talabalar students={students} setStudents={setStudents} />}
        />

        {/* To'lov */}
        <Route
          path="paynets/:id"
          element={<Paynets students={students} setStudents={setStudents} />}
        />
      </Routes>
    </div>
  );
};

export default DirektorLayout;