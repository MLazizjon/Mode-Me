import React, { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './DavomatStyles';
import AddStudentModal from './AddStudentModal';
import { toast } from 'react-toastify';

const Davomat = ({ groups, students, setStudents }) => {
  const { groupName } = useParams(); // Получаем имя группы из URL (если перешли из Guruhlar)
  const [selectedGroup, setSelectedGroup] = useState(groupName || (groups.length > 0 ? groups[0].name : ''));
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [attendance, setAttendance] = useState({});

  // Обновляем выбранную группу, если изменился URL
  useEffect(() => {
    if (groupName) setSelectedGroup(groupName);
  }, [groupName]);

  const filteredStudents = useMemo(() => {
    return students.filter(s => 
      s.group === selectedGroup && 
      s.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [selectedGroup, searchTerm, students]);

  const stats = [
    { label: 'Umumiy talabalar', value: filteredStudents.length },
    { label: "Qarzdorlar", value: filteredStudents.filter(s => s.balance < 0).length }
  ];

  const handleToggle = (id, day) => {
    const key = `${id}-${day}`;
    setAttendance(prev => ({
      ...prev,
      [key]: prev[key] === 'check' ? 'cross' : prev[key] === 'cross' ? null : 'check'
    }));
  };

  return (
    <S.Container>
      <S.Header>
        <div>
          <h1>{selectedGroup || "Davomat"} Jurnali</h1>
          <p>Tizimda jami {filteredStudents.length} ta talaba ushbu guruhda</p>
        </div>
        <div className="btns">
          <button onClick={() => setModalOpen(true)} style={{padding:'10px 15px', borderRadius:'8px', background:'#10b981', color:'white', border:'none', cursor:'pointer', marginRight:'10px'}}>
            + Talaba qo'shish
          </button>
          <button onClick={() => toast.success("Muvaffaqiyatli saqlandi!")} style={{padding:'10px 20px', borderRadius:'8px', background:'#3b82f6', color:'white', border:'none', cursor:'pointer', fontWeight:'700'}}>
            Saqlash
          </button>
        </div>
      </S.Header>

      <S.StatsGrid>
        {stats.map((s, i) => (
          <S.StatCard key={i}>
            <span className="label">{s.label}</span>
            <span className="value">{s.value} nafar</span>
          </S.StatCard>
        ))}
      </S.StatsGrid>

      <S.FilterBar>
        <div className="filter-group">
          <label>Guruhni tanlang</label>
          <select value={selectedGroup} onChange={e => setSelectedGroup(e.target.value)}>
            {!groupName && <option value="">Tanlang...</option>}
            {groups.map(g => <option key={g.id} value={g.name}>{g.name}</option>)}
          </select>
        </div>
        <div className="filter-group" style={{flex: 2}}>
          <label>Qidiruv</label>
          <input placeholder="Ism bo'yicha qidiruv..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
      </S.FilterBar>

      <S.TableWrapper>
        <S.Table>
          <thead>
            <tr>
              <th>Talabalar ismi</th>
              {[...Array(15)].map((_, i) => <th key={i}>{i+1}</th>)}
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(s => (
              <tr key={s.id}>
                <td className="student-info">
                  <div className="avatar">{s.name[0]}</div>
                  <div className="name-box">
                    <div className="name">{s.name}</div>
                    <div className="sub" style={{color: s.balance < 0 ? '#ef4444' : '#10b981'}}>
                      {s.balance.toLocaleString()} so'm
                    </div>
                  </div>
                </td>
                {[...Array(15)].map((_, i) => {
                  const status = attendance[`${s.id}-${i+1}`];
                  return (
                    <td key={i} onClick={() => handleToggle(s.id, i+1)}>
                      <S.StatusCell status={status}>
                        {status === 'check' ? '✅' : status === 'cross' ? '❌' : '—'}
                      </S.StatusCell>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.TableWrapper>

      {modalOpen && (
        <AddStudentModal 
          groups={groups} 
          defaultGroup={selectedGroup}
          onClose={() => setModalOpen(false)} 
          onSave={(newStudent) => {
            setStudents([...students, newStudent]);
            setModalOpen(false);
            toast.success("Yangi talaba qo'shildi!");
          }} 
        />
      )}
    </S.Container>
  );
};

export default Davomat;