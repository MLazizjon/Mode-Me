import React, { useState } from "react";
import { DashboardSection, Wrapper } from "./panel.styles";
import { FaRegPenToSquare } from "react-icons/fa6";

import { IoPeopleOutline } from "react-icons/io5";

const Panel = ({ students, teachers, setTeachers }) => {
  // O'qituvchilar modali uchun ichki statelar
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTeacher, setEditTeacher] = useState(null);
  const [teacherForm, setTeacherForm] = useState({ name: "", subject: "" });

  // 1. Hisob-kitoblar (App.js dan kelgan prop asosida)
  // Talabalar sahifasida balans o'zgarsa, bu o'zgaruvchilar avtomatik yangilanadi
  const debtors = students.filter((s) => s.balance < 0);
  const totalStudentsCount = students.length;
  const activeGroupsCount = new Set(students.map((s) => s.group)).size;

  // 2. O'qituvchi statusini o'zgartirish funksiyasi
  const toggleStatus = (id) => {
    setTeachers(
      teachers.map((t) =>
        t.id === id 
          ? { ...t, status: t.status === "Active" ? "Muzlatilgan" : "Active" } 
          : t
      )
    );
  };

  // 3. O'qituvchini saqlash (Yangi qo'shish yoki tahrirlash)
  const handleSaveTeacher = (e) => {
    e.preventDefault();
    if (editTeacher) {
      setTeachers(teachers.map(t => t.id === editTeacher.id ? { ...t, ...teacherForm } : t));
    } else {
      setTeachers([...teachers, { id: Date.now(), ...teacherForm, status: "Active" }]);
    }
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditTeacher(null);
    setTeacherForm({ name: "", subject: "" });
  };

  return (
    <DashboardSection>
      <Wrapper>
        <header>
          <h1>Dashboard Overview</h1>
        </header>

        <div className="main">
          {/* --- STATISTIKA KARTALARI --- */}
          <section className="stats">
            <div className="card">
              <div className="card-header"><div className="icon blue"><IoPeopleOutline /></div></div>
              <p>Jami Talabalar</p>
              <h3>{totalStudentsCount} ta</h3>
            </div>

            <div className="card">
              <div className="card-header"><div className="icon green">📂</div></div>
              <p>Guruhlar soni</p>
              <h3>{activeGroupsCount} ta</h3>
            </div>

            <div className="card">
              <div className="card-header"><div className="icon red">❗</div></div>
              <p>Qarzdorlar soni</p>
              <h3 className="redText">{debtors.length} ta</h3>
            </div>
          </section>

          {/* --- CONTENT GRID --- */}
          <section className="content-grid">
            
            {/* 1. Qarzdorlar Ro'yxati (Real-time yangilanadi) */}
            <div className="panel debtors">
              <h2>Qarzdorlar</h2>
              <div className="list">
                {debtors.length > 0 ? (
                  debtors.map((s) => (
                    <div key={s.id} className="list-item">
                      {/* <div className="avatar">💸</div> */}
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

            {/* 2. O'qituvchilar Jadvali */}
            <div className="panel teachers">
              <div className="panel-header">
                <h2>O'qituvchilar</h2>
                <button className="addBtn" onClick={() => setIsModalOpen(true)}>
                  + Add Teacher
                </button>
              </div>

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
                        <span className="action edit" onClick={() => {
                          setEditTeacher(t);
                          setTeacherForm({ name: t.name, subject: t.subject });
                          setIsModalOpen(true);
                        }}><FaRegPenToSquare /></span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* --- O'QITUVCHI QO'SHISH MODALI --- */}
        {isModalOpen && (
          <div className="modalOverlay">
            <div className="modal">
              <h3>{editTeacher ? "Tahrirlash" : "Yangi o'qituvchi"}</h3>
              <form onSubmit={handleSaveTeacher}>
                <input 
                  type="text" 
                  placeholder="F.I.SH" 
                  value={teacherForm.name}
                  onChange={(e) => setTeacherForm({...teacherForm, name: e.target.value})}
                  required 
                />
                <input 
                  type="text" 
                  placeholder="Mutaxassisligi" 
                  value={teacherForm.subject}
                  onChange={(e) => setTeacherForm({...teacherForm, subject: e.target.value})}
                  required 
                />
                <div className="modalButtons">
                  <button type="button" onClick={closeModal}>Bekor qilish</button>
                  <button type="submit" className="saveBtn">Saqlash</button>
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