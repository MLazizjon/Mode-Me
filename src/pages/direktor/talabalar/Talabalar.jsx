import React, { useState } from "react";
import { TalabalarSection, Wrapper } from "./talabalar.styles";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const Talabalar = ({ students, setStudents }) => {
  const [showModal, setShowModal] = useState(false);
  const [editStudent, setEditStudent] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    group: "",
    balance: "",
  });

  const [filter, setFilter] = useState("all");

  // ✅ Balance format
  const formatNumber = (value) => {
    if (value === "" || value === null) return "";
    const isNegative = value.toString().startsWith("-");
    const num = value.toString().replace(/\D/g, "");
    const formatted = num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return isNegative ? `-${formatted}` : formatted;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "balance") {
      const cleanValue = value.replace(/,/g, "");
      setFormData({ ...formData, [name]: cleanValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ✅ Phone change (BUGsiz)
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSave = () => {
    if (!formData.name || !formData.phone) {
      alert("Qayerdadir xato bor");
      return;
    }

    if (editStudent) {
      const updated = students.map((s) =>
        s.id === editStudent.id
          ? { ...s, ...formData, balance: Number(formData.balance) }
          : s
      );
      setStudents(updated);
    } else {
      const newStudent = {
        id: Date.now(),
        ...formData,
        balance: Number(formData.balance) || 0,
      };
      setStudents([...students, newStudent]);
    }

    closeModal();
  };

  const closeModal = () => {
    setShowModal(false);
    setEditStudent(null);
    setFormData({ name: "", phone: "", group: "", balance: "" });
  };

  const handleEdit = (student) => {
    setEditStudent(student);
    setFormData({
      ...student,
      balance: student.balance.toString(),
    });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("O'chirmoqchimisiz?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  const filteredStudents =
    filter === "debtors" ? students.filter((s) => s.balance < 0) : students;

  // ✅ Telefonni chiroyli ko‘rsatish
  const formatPhoneView = (phone) => {
    if (!phone) return "";
    const p = phone.replace("998", "");
    return `+998 ${p.slice(0, 2)} ${p.slice(2, 5)} ${p.slice(5, 7)} ${p.slice(
      7,
      9
    )}`;
  };

  return (
    <TalabalarSection>
      <Wrapper>
        {/* TOP */}
        <div className="top">
          <button className="addBtn" onClick={() => setShowModal(true)}>
            + Add Student
          </button>

          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Barchasi</option>
            <option value="debtors">Qarzdorlar</option>
          </select>
        </div>

        {/* STATS */}
        <div className="cards">
          <div className="card">
            <h4>Jami talabalar</h4>
            <h2>{students.length}</h2>
          </div>

          <div className="card">
            <h4>Qarzdorlar</h4>
            <h2 className="red">
              {students.filter((s) => s.balance < 0).length}
            </h2>
          </div>
        </div>

        {/* TABLE */}
        <div className="tableWrapper">
          <table>
            <thead>
              <tr>
                <th>FISH</th>
                <th>Telefon</th>
                <th>Guruh</th>
                <th>Balans</th>
                <th>Holat</th>
                <th>Amallar</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((s) => (
                  <tr key={s.id}>
                    <td>{s.name}</td>
                    <td>{formatPhoneView(s.phone)}</td>
                    <td>{s.group}</td>

                    <td
                      style={{
                        color: s.balance < 0 ? "red" : "green",
                        fontWeight: "bold",
                      }}
                    >
                      {s.balance.toLocaleString()} UZS
                    </td>

                    <td>
                      <span
                        className={
                          s.balance < 0 ? "badge redBadge" : "badge greenBadge"
                        }
                      >
                        {s.balance < 0 ? "Qarzdor" : "Faol"}
                      </span>
                    </td>

                    <td>
                      <span
                        className="action edit"
                        onClick={() => handleEdit(s)}
                      >
                        <FaRegPenToSquare />
                      </span>
                      <span
                        className="action delete"
                        onClick={() => handleDelete(s.id)}
                      >
                        <MdDelete />
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center", padding: 20 }}>
                    Ma'lumot yo'q
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* MODAL */}
        {showModal && (
          <div className="modalOverlay">
            <div className="modal">
              <h3>{editStudent ? "Tahrirlash" : "Talaba qo'shish"}</h3>

              <div className="inputs">
                <input
                  name="name"
                  placeholder="Ism"
                  value={formData.name}
                  onChange={handleChange}
                />

                <PhoneInput
                  country={"uz"}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                />

                <input
                  name="group"
                  placeholder="Guruh"
                  value={formData.group}
                  onChange={handleChange}
                />

                <input
                  name="balance"
                  type="text"
                  placeholder="-50,000"
                  value={formatNumber(formData.balance)}
                  onChange={handleChange}
                />
              </div>

              <div className="modalButtons">
                <button className="cancelBtn" onClick={closeModal}>
                  Bekor
                </button>
                <button className="saveBtn" onClick={handleSave}>
                  Saqlash
                </button>
              </div>
            </div>
          </div>
        )}
      </Wrapper>
    </TalabalarSection>
  );
};

export default Talabalar;
