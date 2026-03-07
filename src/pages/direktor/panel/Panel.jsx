import React, { useState } from "react";
import { DashboardSection, Wrapper } from "./panel.styles";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";

const Panel = ({ students, teachers, setTeachers, sidebarWidth }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTeacher, setEditTeacher] = useState(null);
  const [teacherForm, setTeacherForm] = useState({ name: "", subject: "" });

  const debtors = students.filter((s) => s.balance < 0);
  const totalStudentsCount = students.length;
  const activeGroupsCount = new Set(students.map((s) => s.group)).size;

  const toggleStatus = (id) => {
    setTeachers(
      teachers.map((t) =>
        t.id === id
          ? { ...t, status: t.status === "Active" ? "Muzlatilgan" : "Active" }
          : t
      )
    );
  };

  const handleSaveTeacher = (e) => {
    e.preventDefault();
    if (editTeacher) {
      setTeachers(
        teachers.map((t) => (t.id === editTeacher.id ? { ...t, ...teacherForm } : t))
      );
    } else {
      setTeachers([
        ...teachers,
        { id: Date.now(), ...teacherForm, status: "Active" },
      ]);
    }
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditTeacher(null);
    setTeacherForm({ name: "", subject: "" });
  };

  return (
    <DashboardSection sidebarWidth={sidebarWidth}>
      <Wrapper>
        <header>
          <h1>Dashboard Overview</h1>
        </header>

        <div className="main">
          {/* --- STATISTIKA KARTALARI --- */}
          <section className="stats">
            <div className="card">
              <div className="icon blue"><IoPeopleOutline /></div>
              <p>Jami Talabalar</p>
              <h3>{totalStudentsCount} ta</h3>
            </div>

            <div className="card">
              <div className="icon green">📂</div>
              <p>Guruhlar soni</p>
              <h3>{activeGroupsCount} ta</h3>
            </div>

            <div className="card">
              <div className="icon red">❗</div>
              <p>Qarzdorlar soni</p>
              <h3 className="redText">{debtors.length} ta</h3>
            </div>
          </section>

          {/* --- CONTENT GRID --- */}
          <section className="content-grid">
            {/* Qarzdorlar */}
            <div className="panel debtors">
              <h2>Qarzdorlar</h2>
              <div className="list">
                {debtors.length > 0 ? (
                  debtors.map((s) => (
                    <div key={s.id} className="list-item">
                      <div className="info">
                        <strong>{s.name}</strong>
                        <span>{s.group}</span>
                      </div>
                      <span className="amount">{s.balance.toLocaleString()} UZS</span>
                    </div>
                  ))
                ) : (
                  <p className="no-data">Hozircha qarzdorlar yo'q</p>
                )}
              </div>
            </div>

            {/* O'qituvchilar */}
            <div className="panel teachers">
              <div className="panel-header">
                <h2>O'qituvchilar</h2>
                <button className="addBtn" onClick={() => setIsModalOpen(true)}>
                  + Add Teacher
                </button>
              </div>

              <div className="tableWrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Ismi</th>
                      <th>Fan</th>
                      <th>Holat</th>
                      <th>Amal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teachers.map((t) => (
                      <tr key={t.id}>
                        <td>{t.name}</td>
                        <td>{t.subject}</td>
                        <td>
                          <button
                            className={`statusBtn ${t.status === "Active" ? "active" : "frozen"}`}
                            onClick={() => toggleStatus(t.id)}
                          >
                            {t.status}
                          </button>
                        </td>
                        <td>
                          <span
                            className="action edit"
                            onClick={() => {
                              setEditTeacher(t);
                              setTeacherForm({ name: t.name, subject: t.subject });
                              setIsModalOpen(true);
                            }}
                          >
                            <FaRegPenToSquare />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        {/* --- MODAL --- */}
        {isModalOpen && (
          <div className="modalOverlay">
            <div className="modal">
              <h3>{editTeacher ? "Tahrirlash" : "Yangi o'qituvchi"}</h3>
              <form onSubmit={handleSaveTeacher}>
                <input
                  type="text"
                  placeholder="F.I.SH"
                  value={teacherForm.name}
                  onChange={(e) =>
                    setTeacherForm({ ...teacherForm, name: e.target.value })
                  }
                  required
                />
                <input
                  type="text"
                  placeholder="Mutaxassisligi"
                  value={teacherForm.subject}
                  onChange={(e) =>
                    setTeacherForm({ ...teacherForm, subject: e.target.value })
                  }
                  required
                />
                <div className="modalButtons">
                  <button type="button" onClick={closeModal}>
                    Bekor qilish
                  </button>
                  <button type="submit" className="saveBtn">
                    Saqlash
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Wrapper>
    </DashboardSection>
  );
};

export default Panel;