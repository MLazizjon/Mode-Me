import React, { useState } from "react";
import { TalabalarSection, Wrapper } from "./talabalar.styles";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Talabalar = ({ students = [], setStudents, sidebarWidth }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [editStudent, setEditStudent] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    group: "",
    coursePrice: "",
    paid: "",
  });
  const [filter, setFilter] = useState("all");

  const formatNumber = (value) => {
    if (!value) return "";
    const num = value.toString().replace(/\D/g, "");
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const clean = value.replace(/,/g, "");
    setFormData({ ...formData, [name]: clean });
  };

  const handlePhoneChange = (value) => setFormData({ ...formData, phone: value });

  const handleSave = () => {
    const paid = Number(formData.paid) || 0;
    const coursePrice = Number(formData.coursePrice) || 0;
    const balance = paid - coursePrice;

    if (!formData.name) return alert("Ism kiriting");

    if (editStudent) {
      const updated = students.map((s) =>
        s.id === editStudent.id ? { ...s, ...formData, paid, coursePrice, balance } : s
      );
      setStudents(updated);
    } else {
      const newStudent = {
        id: Date.now(),
        name: formData.name,
        phone: formData.phone,
        group: formData.group,
        paid,
        coursePrice,
        balance,
      };
      setStudents([...students, newStudent]);
    }

    closeModal();
  };

  const closeModal = () => {
    setShowModal(false);
    setEditStudent(null);
    setFormData({ name: "", phone: "", group: "", coursePrice: "", paid: "" });
  };

  const handleEdit = (student) => {
    setEditStudent(student);
    setFormData({
      name: student.name || "",
      phone: student.phone || "",
      group: student.group || "",
      coursePrice: String(student.coursePrice || ""),
      paid: String(student.paid || ""),
    });
    setShowModal(true);
  };

  const handleDelete = (student) => setDeleteConfirm(student);
  const confirmDelete = () => {
    setStudents(students.filter((s) => s.id !== deleteConfirm.id));
    setDeleteConfirm(null);
  };
  const cancelDelete = () => setDeleteConfirm(null);

  const filteredStudents = students.filter((s) => {
    if (filter === "debtors") return s.balance < 0;
    if (filter === "paid") return s.balance === 0;
    return true;
  });

  const formatPhoneView = (phone) => {
    if (!phone) return "";
    const p = phone.replace("998", "");
    return `+998 ${p.slice(0, 2)} ${p.slice(2, 5)} ${p.slice(5, 7)} ${p.slice(7, 9)}`;
  };

  return (
    <TalabalarSection sidebarWidth={sidebarWidth}>
      <Wrapper>
        <div className="top">
          <button className="addBtn" onClick={() => setShowModal(true)}>+ Add Student</button>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Barchasi</option>
            <option value="debtors">Qarzdorlar</option>
            <option value="paid">To'liq to'laganlar</option>
          </select>
        </div>

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
              {filteredStudents.map((s) => (
                <tr key={s.id} onClick={() => navigate(`/admin/talabalar/${s.id}`)}>
                  <td>{s.name}</td>
                  <td>{formatPhoneView(s.phone)}</td>
                  <td>{s.group}</td>
                  <td style={{ color: s.balance < 0 ? "red" : s.balance > 0 ? "green" : "#111", fontWeight:"bold" }}>
                    {s.balance === 0 ? "To'liq to'langan" : s.balance < 0 ? `${Math.abs(s.balance).toLocaleString()} qarz` : `${s.balance.toLocaleString()} qoldiq`}
                  </td>
                  <td>
                    <span className={s.balance < 0 ? "badge redBadge" : s.balance > 0 ? "badge greenBadge" : "badge"}>
                      {s.balance === 0 ? "Yopilgan" : s.balance < 0 ? "Qarzdor" : "Qoldiq"}
                    </span>
                  </td>
                  <td>
                    <span className="action edit" onClick={(e) => { e.stopPropagation(); handleEdit(s); }}><FaRegPenToSquare/></span>
                    <span className="action delete" onClick={(e) => { e.stopPropagation(); handleDelete(s); }}><MdDelete/></span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MODAL */}
        {showModal && (
          <div className="modalOverlay">
            <div className="modal">
              <h3>{editStudent ? "Tahrirlash" : "Talaba qo'shish"}</h3>
              <div className="inputs">
                <input name="name" placeholder="Ism" value={formData.name} onChange={handleChange}/>
                <PhoneInput country={"uz"} value={formData.phone} onChange={handlePhoneChange}/>
                <input name="group" placeholder="Guruh" value={formData.group} onChange={handleChange}/>
                <input name="coursePrice" placeholder="Kurs narxi" value={formatNumber(formData.coursePrice)} onChange={handleChange}/>
                <input name="paid" placeholder="To'lov" value={formatNumber(formData.paid)} onChange={handleChange}/>
              </div>
              <div className="modalButtons">
                <button className="cancelBtn" onClick={closeModal}>Bekor</button>
                <button className="saveBtn" onClick={handleSave}>Saqlash</button>
              </div>
            </div>
          </div>
        )}

        {/* DELETE CONFIRM */}
        {deleteConfirm && (
          <div className="modalOverlay">
            <div className="modal">
              <h3>Siz rostan ham "{deleteConfirm.name}" ni o‘chirmoqchimisiz?</h3>
              <div className="modalButtons">
                <button className="cancelBtn" onClick={cancelDelete}>Bekor</button>
                <button className="saveBtn" onClick={confirmDelete}>Ha, o‘chirish</button>
              </div>
            </div>
          </div>
        )}
      </Wrapper>
    </TalabalarSection>
  );
};

export default Talabalar;