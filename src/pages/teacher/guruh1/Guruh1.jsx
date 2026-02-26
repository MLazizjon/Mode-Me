import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  Container, Wrapper, TableWrapper, Table, StatusBtn, 
  AttendanceCell, InputGroup, NameStatus 
} from './guruh1.styles';
const Guruh1 = () => {
  const [nameInput, setNameInput] = useState("");
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("guruh1_data");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("guruh1_data", JSON.stringify(students));
  }, [students]);

  const addStudent = () => {
    if (!nameInput.trim()) {
      toast.error("Iltimos, maydonni to'ldiring!"); 
      return;
    }
    const newStudent = {
      id: Date.now(),
      name: nameInput,
      isPaid: false,
      attendance: Array(16).fill(null)
    };
    setStudents([...students, newStudent]);
    setNameInput("");
    toast.success("Talaba muvaffaqiyatli qo'shildi!");
  };
  const toggleAttendance = (sId, lIdx) => {
    setStudents(students.map(s => {
      if (s.id === sId) {
        const newAtt = [...s.attendance];
        if (newAtt[lIdx] === null) newAtt[lIdx] = true;
        else if (newAtt[lIdx] === true) newAtt[lIdx] = false;
        else newAtt[lIdx] = null;
        return { ...s, attendance: newAtt };
      }
      return s;
    }));
  };
  return (
    <Container>
      <ToastContainer position="top-center" autoClose={2000} />
      <Wrapper>
        <h2>Dekabr Guruh 1600 (Guruh 1)</h2>
        <InputGroup>
          <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} placeholder="Talaba ismini kiriting..." />
          <button onClick={addStudent}>Qo'shish</button>
        </InputGroup>
        {students.length === 0 ? (
          <div style={{ padding: '100px', textAlign: 'center', color: '#888', fontSize: '20px' }}>
            <b>Hozircha talabalar yo'q</b>
          </div>
        ) : (
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <th>№</th><th>F.I.SH</th><th>To'lov</th>
                  {[...Array(16)].map((_, i) => <th key={i}>{i + 1}-dars</th>)}
                </tr>
              </thead>
              <tbody>
                {students.map((s, idx) => (
                  <tr key={s.id}>
                    <td>{idx + 1}</td>
                    <td style={{ textAlign: 'left', minWidth: '180px' }}><NameStatus paid={s.isPaid} /> {s.name}</td>
                    <td>
                      <StatusBtn paid={s.isPaid} onClick={() => {
                        const updated = [...students];
                        updated[idx].isPaid = !updated[idx].isPaid;
                        setStudents(updated);
                      }}>{s.isPaid ? "To'landi" : "To'lanmadi"}</StatusBtn>
                    </td>
                    {s.attendance.map((status, i) => (
                      <AttendanceCell key={i} status={status} onClick={() => toggleAttendance(s.id, i)}>
                        {status === true ? "✅" : status === false ? "❌" : ""}
                      </AttendanceCell>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        )}
      </Wrapper>
    </Container>
  );
};
export default Guruh1;