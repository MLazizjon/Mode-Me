import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TalabalarSection, Wrapper } from "../talabalar/talabalar.styles";
import { FaArrowLeft, FaUserCircle, FaPhoneAlt, FaLayerGroup } from "react-icons/fa";
import { MdPayments } from "react-icons/md";

const Detalsuser = ({ students }) => {
  const { id } = useParams(); // URL dagi id ni olish
  const navigate = useNavigate();

  // ID bo'yicha talabani topish
  const student = students.find((s) => s.id.toString() === id);

  if (!student) {
    return (
      <TalabalarSection>
        <Wrapper>
          <button className="addBtn" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Orqaga
          </button>
          <h2 style={{marginTop: "20px"}}>Talaba topilmadi!</h2>
        </Wrapper>
      </TalabalarSection>
    );
  }

  return (
    <TalabalarSection>
      <Wrapper>
        {/* Yuqori qism */}
        <div className="top">
          <button className="addBtn" onClick={() => navigate(-1)} style={{display: "flex", alignItems: "center", gap: "10px"}}>
            <FaArrowLeft /> Orqaga qaytish
          </button>
          <h2>Talaba ma'lumotnomasi</h2>
        </div>

        {/* Profil kartochkalari */}
        <div className="cards">
          <div className="card">
            <h4>F.I.SH</h4>
            <div style={{display: "flex", alignItems: "center", gap: "15px"}}>
              <FaUserCircle size={40} color="#1e90ff" />
              <h2 style={{fontSize: "22px"}}>{student.name}</h2>
            </div>
            <div style={{marginTop: "15px"}}>
              <p style={{display: "flex", alignItems: "center", gap: "10px", color: "#64748b"}}>
                <FaPhoneAlt /> {student.phone}
              </p>
              <p style={{display: "flex", alignItems: "center", gap: "10px", color: "#64748b", marginTop: "5px"}}>
                <FaLayerGroup /> Guruh: <b>{student.group}</b>
              </p>
            </div>
          </div>

          <div className="card">
            <h4>Moliyaviy holat</h4>
            <div style={{display: "flex", alignItems: "center", gap: "15px"}}>
              <MdPayments size={40} color={student.balance < 0 ? "#ef4444" : "#22c55e"} />
              <h2 className={student.balance < 0 ? "red" : ""} style={{fontSize: "28px"}}>
                {student.balance?.toLocaleString()} so'm
              </h2>
            </div>
            <div style={{marginTop: "10px"}}>
               <span className={student.balance < 0 ? "badge redBadge" : "badge greenBadge"}>
                 {student.balance < 0 ? "To'lov muddati o'tgan" : "To'lov qilingan"}
               </span>
            </div>
          </div>
        </div>

        {/* To'liq jadval ko'rinishi */}
        <div className="tableWrapper">
          <div style={{padding: "20px", borderBottom: "1px solid #f1f5f9"}}>
             <h3 style={{margin: 0}}>Batafsil hisobot</h3>
          </div>
          <table>
            <thead>
              <tr>
                <th>Kurs Narxi</th>
                <th>To'langan Summa</th>
                <th>Farq (Qoldiq/Qarz)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{Number(student.coursePrice || 0).toLocaleString()} so'm</td>
                <td>{Number(student.paid || 0).toLocaleString()} so'm</td>
                <td style={{fontWeight: "bold", color: student.balance < 0 ? "#ef4444" : "#22c55e"}}>
                  {student.balance < 0 
                    ? `${Math.abs(student.balance).toLocaleString()} so'm qarz` 
                    : `${student.balance.toLocaleString()} so'm ortiqcha`}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Wrapper>
    </TalabalarSection>
  );
};

export default Detalsuser;