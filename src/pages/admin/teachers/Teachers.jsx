import React, { useState } from "react";
// import "../../../../src/";

function App() {
  const [page, setPage] = useState("group1");
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const [students, setStudents] = useState({
    group1: [
      { name: "Abdullayev Sardor", phone: "(91) 545-48-46", paid: true, attendance: {} },
      { name: "Karimov Jasur", phone: "(99) 774-73-13", paid: false, attendance: {} },
      { name: "raxmonov saidalixon", phone: "(97) 916-32-35 ", paid: true, attendance: {} },
    ],
    group2: [
      { name: "Ismoilov Sayyop", phone: "(93) 739-99-23", paid: true, attendance: {} },
      { name: "Mahmudjonov Lazizjon", phone: "(97) 395-26-52", paid: false, attendance: {} },
    ],
    group3: [
      { name: "Abdurasulov Islom", phone: "(91) 545-48-46", paid: true, attendance: {} },
      { name: "Akbarov Aliasgar", phone: "(99) 774-73-13", paid: true, attendance: {} },
      { name: "Attoyev Faridun", phone: "(94) 675-35-33", paid: false, attendance: {} },
    ],
  });

  const lessons = Array.from({ length: 16 }, (_, i) =>
    (i + 1) % 8 === 0 ? `Amaliyot ${i + 1}` : `Dars ${i + 1}`
  );

  const togglePayment = (groupKey, index) => {
    const updated = { ...students };
    updated[groupKey][index].paid = !updated[groupKey][index].paid;
    setStudents(updated);
  };

  const toggleAttendance = (groupKey, index, lesson) => {
    const updated = { ...students };
    if (!updated[groupKey][index].attendance) updated[groupKey][index].attendance = {};
    updated[groupKey][index].attendance[lesson] =
      updated[groupKey][index].attendance[lesson] === "Keldi" ? "Kelmadi" : "Keldi";
    setStudents(updated);
  };

  const addStudent = (groupKey) => {
    if (newName && newPhone) {
      const updated = { ...students };
      updated[groupKey].push({ name: newName, phone: newPhone, paid: false, attendance: {} });
      setStudents(updated);
      setNewName("");
      setNewPhone("");
      setShowModal(false);
    }
  };

  const totalStats = () => {
    let total = 0, paid = 0;
    Object.keys(students).forEach((g) => {
      total += students[g].length;
      paid += students[g].filter((s) => s.paid).length;
    });
    return { total, paid };
  };
  return (
    <div className="app">
      <aside className="sidebar">
        <h2>IT TAT</h2>
        <button onClick={() => setPage("group1")}>Dekabr Guruh</button>
        <button onClick={() => setPage("group2")}>Fevral Guruh</button>
        <button onClick={() => setPage("group3")}>Mart Guruh</button>
        <button onClick={() => setPage("salary")}>Salary</button>
      </aside>

      <main className="content">
        {page.startsWith("group") && (
          <div>
            <h2>{page.toUpperCase()} sahifasi</h2>
            <div className="student-list">
              {students[page].map((s, i) => (
                <div key={i} className="student-card">
                  <h3>{s.name}</h3>
                  <p>{s.phone}</p>
                  <button
                    className={s.paid ? "paid" : "unpaid"}
                    onClick={() => togglePayment(page, i)}
                  >
                    {s.paid ? "To'langan" : "To'lanmagan"}
                  </button>
                </div>
              ))}
            </div>

            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Talaba</th>
                    {lessons.map((lesson, idx) => (
                      <th key={idx}>{lesson}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {students[page].map((s, i) => (
                    <tr key={i}>
                      <td>{s.name}</td>
                      {lessons.map((lesson, idx) => (
                        <td key={idx}>
                          <button
                            className="status-btn"
                            onClick={() => toggleAttendance(page, i, lesson)}
                          >
                            {s.attendance?.[lesson] || "Kelmadi"}
                          </button>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button className="add-btn" onClick={() => setShowModal(true)}>
               Talaba qo'shish
            </button>
          </div>
        )}
        {page === "salary" && (
          <div className="salary">
            <h2>Salary sahifasi</h2>
            <h3>Umumiy statistika</h3>
            <p>Jami talabalar: {totalStats().total}</p>
            <p>To'lov qilganlar: {totalStats().paid}</p>

            {Object.keys(students).map((g) => (
              <div key={g}>
                <h3>{g.toUpperCase()}</h3>
                <p>Talabalar soni: {students[g].length}</p>
                <p>To'lov qilganlar: {students[g].filter((s) => s.paid).length}</p>
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Ism</th>
                      <th>Telefon</th>
                      <th>To'lov</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students[g].map((s, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{s.name}</td>
                        <td>{s.phone}</td>
                        <td>{s.paid ? "✅" : "❌"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}
      </main>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Yangi talaba qo'shish</h3>
            <input
              type="text"
              placeholder="Ism"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Telefon"
              value={newPhone}
              onChange={(e) => setNewPhone(e.target.value)}
            />
            <button onClick={() => addStudent(page)}>Qo'shish</button>
            <button onClick={() => setShowModal(false)}>Bekor qilish</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
