import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './GuruhlarStyles';
import AddGroupModal from './AddGroupModal';

// ДОБАВЛЯЕМ students в пропсы
const Guruhlar = ({ groups, setGroups, teachers, students }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Faol');
  const [search, setSearch] = useState('');
  const [filterGroup, setFilterGroup] = useState('Barchasi');
  const [modalOpen, setModalOpen] = useState(false);

  const filteredGroups = useMemo(() => {
    if (!groups) return [];
    return groups.filter(g => {
      if (g.status !== activeTab) return false;
      if (search && !g.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (filterGroup !== 'Barchasi' && !g.name.includes(filterGroup)) return false;
      return true;
    });
  }, [groups, activeTab, search, filterGroup]);

  const toggleStatus = (id) => {
    const states = ['Faol', 'Yakunlangan', 'Kutilmoqda'];
    setGroups(prev => prev.map(g => {
      if (g.id === id) {
        const nextIndex = (states.indexOf(g.status) + 1) % states.length;
        return { ...g, status: states[nextIndex] };
      }
      return g;
    }));
  };

  const handleAddGroup = (newGroup) => {
    setGroups([{ ...newGroup, id: Date.now(), students: 0 }, ...groups]);
    setModalOpen(false);
    setActiveTab(newGroup.status);
  };

  return (
    <S.Container>
      <S.Header>
        <div>
          <h1>Guruhlar Boshqaruvi</h1>
          <p>Barcha faol va yakunlangan o'quv guruhlari ro'yxati</p>
        </div>
        <S.PrimaryBtn onClick={() => setModalOpen(true)}>
          ➕ Yangi guruh qo'shish
        </S.PrimaryBtn>
      </S.Header>

      <S.FilterSection>
        <S.Tabs>
          <S.Tab active={activeTab === 'Faol'} onClick={() => setActiveTab('Faol')}>Faol guruhlar</S.Tab>
          <S.Tab active={activeTab === 'Yakunlangan'} onClick={() => setActiveTab('Yakunlangan')}>Yakunlanganlar</S.Tab>
          <S.Tab active={activeTab === 'Kutilmoqda'} onClick={() => setActiveTab('Kutilmoqda')}>Kutilmoqda</S.Tab>
        </S.Tabs>

        <S.Controls>
          <input 
            placeholder="🔍 Guruh nomi bo'yicha qidirish..." 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
          />
          <select value={filterGroup} onChange={e => setFilterGroup(e.target.value)}>
            <option value="Barchasi">Hamma Guruhlar</option>
            <option value="Bootcamp">Bootcamp</option>
            <option value="Dizayn">Dizayn</option>
            <option value="IELTS">IELTS</option>
          </select>
        </S.Controls>
      </S.FilterSection>

      <S.Grid>
        {filteredGroups.length > 0 ? filteredGroups.map(g => {
          
          // !!! ИСПРАВЛЕНИЕ: Считаем реальных студентов из массива students !!!
          const realStudentCount = students.filter(s => s.group === g.name).length;
          const percent = Math.min(Math.round((realStudentCount / g.max) * 100), 100);

          return (
            <S.Card 
              key={g.id} 
              // Используем encodeURIComponent для безопасности URL
              onClick={() => navigate(`/admin/guruh/${encodeURIComponent(g.name)}`)}
              style={{ cursor: 'pointer' }} 
            >
              <S.CardHeader>
                <div className="icon-box" style={{background: g.color || '#F1F5F9'}}>{g.icon || '📚'}</div>
                <div className="info">
                  <h3>{g.name}</h3>
                  <S.Badge s={g.status} onClick={(e) => { e.stopPropagation(); toggleStatus(g.id); }}>
                    {g.status} 🔄
                  </S.Badge>
                </div>
              </S.CardHeader>

              <S.CardDetails>
                <div className="item">👤 {g.teacher}</div>
                <div className="item">🗓 {g.days}</div>
                <div className="item">⏰ {g.time}</div>
              </S.CardDetails>

              <S.ProgressBar percent={percent}>
                <div className="head">
                  <span>To'liqlik darajasi</span>
                  {/* Выводим реальное число студентов */}
                  <span style={{color: '#3B82F6', fontWeight: 'bold'}}>{realStudentCount}/{g.max} talaba</span>
                </div>
                <div className="bar">
                  <div className="fill" />
                </div>
              </S.ProgressBar>
            </S.Card>
          )
        }) : (
          <div style={{gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#64748B'}}>
            Guruhlar topilmadi
          </div>
        )}
      </S.Grid>

      {modalOpen && (
        <AddGroupModal 
          onClose={() => setModalOpen(false)} 
          onSave={handleAddGroup} 
          teachers={teachers} 
        />
      )}
    </S.Container>
  );
};

export default Guruhlar;