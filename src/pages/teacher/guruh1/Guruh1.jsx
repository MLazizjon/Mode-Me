import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  Container, Wrapper, TableWrapper, Table, StatusBtn, 
  AttendanceCell, InputGroup, NameStatus,
  DeleteBtn, ModalOverlay, ModalContent, ModalActions, ConfirmBtn, CancelBtn 
} from './guruh1.styles';

const Guruh1 = () => {
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("guruh1_data");
    return saved ? JSON.parse(saved) : [];
  });
  const [modal, setModal] = useState({ show: false, student: null });

  useEffect(() => {
    localStorage.setItem("guruh1_data", JSON.stringify(students));
  }, [students]);

  const addStudent = () => {
    if (!nameInput.trim() || !phoneInput.trim()) { 
      toast.error("Ism va telefonni kiriting!"); 
      return; 
    }
    const newStudent = { 
      id: Date.now().toString(),
      name: nameInput, 
      phone: phoneInput,
      isPaid: false, 
      attendance: Array(16).fill(null) 
    };
    setStudents([...students, newStudent]);
    setNameInput("");
    setPhoneInput("");
    toast.success("Qo'shildi!");
  };

  const deleteStudent = () => {
    setStudents(students.filter(s => s.id !== modal.student.id));
    setModal({ show: false, student: null });
    toast.info("O'chirildi");
  };

  const toggleAttendance = (sId, lIdx) => {
    setStudents(students.map(s => {
      if (s.id === sId) {
        const newAtt = [...s.attendance];
        newAtt[lIdx] = newAtt[lIdx] === null ? true : newAtt[lIdx] === true ? false : null;
        return { ...s, attendance: newAtt };
      }
      return s;
    }));
  };

  return (
    <Container>
      <ToastContainer position="top-center" autoClose={1500} />
      {modal.show && (
        <ModalOverlay>
          <ModalContent>
            <h3>Rostdan ham {modal.student?.name}ni o'chirasizmi?</h3>
            <ModalActions>
              <ConfirmBtn onClick={deleteStudent}>Ha</ConfirmBtn>
              <CancelBtn onClick={() => setModal({ show: false, student: null })}>Yo'q</CancelBtn>
            </ModalActions>
          </ModalContent>
        </ModalOverlay>
      )}
      <Wrapper>
        <h2>Dekabr (Guruh 1)</h2>
        <InputGroup>
          <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} placeholder="Talaba f.i.sh..." />
          <input value={phoneInput} onChange={(e) => setPhoneInput(e.target.value)} placeholder="Telefon raqami..." />
          <button onClick={addStudent}>Qo'shish</button>
        </InputGroup>
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>№</th><th>F.I.SH</th><th>To'lov</th>
                {[...Array(16)].map((_, i) => <th key={i}>{i + 1}</th>)}
                <th>Amal</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, idx) => (
                <tr key={s.id}>
                  <td>{idx + 1}</td>
                  <td style={{ textAlign: 'left' }}>
                    <NameStatus paid={s.isPaid} /> 
                    <Link to={`/profil/guruh1_data/${s.id}`} style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>
                      {s.name}
                    </Link>
                  </td>
                  <td>
                    <StatusBtn paid={s.isPaid} onClick={() => {
                      const updated = [...students];
                      updated[idx].isPaid = !updated[idx].isPaid;
                      setStudents(updated);
                    }}>{s.isPaid ? "OK" : "X"}</StatusBtn>
                  </td>
                  {s.attendance.map((status, i) => (
                    <AttendanceCell key={i} status={status} onClick={() => toggleAttendance(s.id, i)}>
                      {status === true ? "✅" : status === false ? "❌" : ""}
                    </AttendanceCell>
                  ))}
                  <td><DeleteBtn onClick={() => setModal({ show: true, student: s })}>🗑️</DeleteBtn></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      </Wrapper>
    </Container>
  );
};
export default Guruh1;