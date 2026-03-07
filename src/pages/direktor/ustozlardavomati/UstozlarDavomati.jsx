// UstozlarDavomati.jsx
import React, { useState } from "react";
import * as S from "./Styles"; // styled-components
import { useAttendanceLogic } from "./useAttendanceLogic";
import { AddTeacherModal } from "./AddTeacherModal";
import * as XLSX from "xlsx";

const UstozlarDavomati = ({ teachers, setTeachers, sidebarWidth }) => {
  const L = useAttendanceLogic(teachers, setTeachers);
  const [modal, setModal] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState(null);

  const exportExcel = () => {
    const dataToExport = L.currentData.map((t) => ({
      ID: t.id,
      Ism: t.name,
      Fan: t.subject,
      Holat: t.status,
      Soat: t.hours || 0,
    }));

    const ws = XLSX.utils.json_to_sheet(dataToExport);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Davomat");
    XLSX.writeFile(wb, `Davomat_${L.date}.xlsx`);
  };

  const handleEdit = (teacher) => {
    setEditingTeacher(teacher);
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
    setEditingTeacher(null);
  };

  return (
    <S.Container sidebarWidth={sidebarWidth}>
      <S.Toolbar>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <input
            type="date"
            value={L.date}
            onChange={(e) => L.setDate(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "8px",
              border: "1px solid #E2E8F0",
              outline: "none",
            }}
          />
          <S.SearchBox>
            🔍
            <input
              placeholder="Поиск по имени..."
              value={L.search}
              onChange={(e) => L.setSearch(e.target.value)}
            />
          </S.SearchBox>
        </div>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <button
            onClick={exportExcel}
            style={{
              padding: "10px",
              cursor: "pointer",
              background: "white",
              border: "1px solid #ddd",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            📥 Excel
          </button>
          <S.PrimaryBtn
            onClick={() => {
              setEditingTeacher(null);
              setModal(true);
            }}
          >
            ➕ Добавить
          </S.PrimaryBtn>
        </div>
      </S.Toolbar>

      <S.MainGrid>
        <S.TableCard>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr
                style={{
                  textAlign: "left",
                  color: "#64748B",
                  fontSize: "12px",
                  borderBottom: "1px solid #E2E8F0",
                }}
              >
                <th style={{ padding: "12px" }}>УЧИТЕЛЬ</th>
                <th>ПРЕДМЕТ</th>
                <th>СТАТУС</th>
                <th>ЧАСЫ</th>
              </tr>
            </thead>
            <tbody>
              {L.currentData.length > 0 ? (
                L.currentData.map((t) => (
                  <tr key={t.id} style={{ borderBottom: "1px solid #F1F5F9" }}>
                    <td
                      style={{
                        padding: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img
                        src={
                          t.avatar ||
                          `https://ui-avatars.com/api/?name=${t.name}&background=random`
                        }
                        width="32"
                        height="32"
                        style={{ borderRadius: "50%", objectFit: "cover" }}
                        alt="avatar"
                      />
                      <div
                        onClick={() => handleEdit(t)}
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <span style={{ fontWeight: "500" }}>{t.name}</span>
                        <span style={{ fontSize: "12px", color: "#3B82F6" }}>
                          ✏️
                        </span>
                      </div>
                    </td>
                    <td>{t.subject}</td>
                    <td>
                      <S.StatusBadge
                        s={t.status}
                        style={{ cursor: "pointer", userSelect: "none" }}
                        onClick={() => L.toggleStatus(t.id)}
                      >
                        {t.status}
                      </S.StatusBadge>
                    </td>
                    <td>{t.hours || 0} ч.</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    style={{
                      padding: "20px",
                      textAlign: "center",
                      color: "#94a3b8",
                    }}
                  >
                    Учителя не найдены
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </S.TableCard>

        <aside>
          <S.StatBox color="#3B82F6">
            <div style={{ fontSize: "14px", color: "#64748B" }}>
              Всего учителей
            </div>
            <div className="val">{L.stats.total}</div>
          </S.StatBox>

          <S.StatBox color="#22C55E" p={L.stats.pKelgan}>
            <div style={{ fontSize: "14px", color: "#64748B" }}>
              Пришли ({L.stats.pKelgan}%)
            </div>
            <div className="val">{L.stats.kelgan}</div>
            <div className="bar">
              <div className="fill" style={{ width: `${L.stats.pKelgan}%` }} />
            </div>
          </S.StatBox>

          <S.StatBox color="#EF4444" p={L.stats.pKelmagan}>
            <div style={{ fontSize: "14px", color: "#64748B" }}>
              Не пришли ({L.stats.pKelmagan}%)
            </div>
            <div className="val">{L.stats.kelmagan}</div>
            <div className="bar">
              <div className="fill" style={{ width: `${L.stats.pKelmagan}%` }} />
            </div>
          </S.StatBox>
        </aside>
      </S.MainGrid>

      {modal && (
        <AddTeacherModal
          initialData={editingTeacher}
          onClose={handleCloseModal}
          onSave={(data) => {
            if (editingTeacher) {
              L.updateTeacher(data);
            } else {
              L.addTeacher(data);
            }
            handleCloseModal();
          }}
        />
      )}
    </S.Container>
  );
};

export default UstozlarDavomati;