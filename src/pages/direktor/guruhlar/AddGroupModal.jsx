import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const slideUp = keyframes`from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; }`;

const Overlay = styled.div`
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(15, 23, 42, 0.5); backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center; z-index: 1000;
  animation: ${fadeIn} 0.2s ease;
`;

const ModalContent = styled.div`
  background: white; width: 100%; max-width: 500px; border-radius: 16px;
  padding: 32px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
  animation: ${slideUp} 0.3s ease-out;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
  label { display: block; margin-bottom: 6px; font-size: 13px; font-weight: 600; color: #475569; }
  input, select { 
    width: 100%; padding: 10px; border: 1px solid #E2E8F0; border-radius: 8px; box-sizing: border-box; outline: none;
    &:focus { border-color: #3B82F6; }
  }
`;

const AddGroupModal = ({ onClose, onSave, teachers = [] }) => {
  const [form, setForm] = useState({
    name: '', 
    teacher: '', 
    days: 'Dush, Chor, Juma', 
    time: '', 
    status: 'Faol', 
    students: 0, 
    max: 15
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.teacher || !form.time) return alert("Asosiy maydonlarni to'ldiring!");
    
    onSave({
      ...form,
      id: Date.now(),
      icon: '📚',
      color: '#E0F2FE',
      students: Number(form.students),
      max: Number(form.max)
    });
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <h2 style={{marginTop: 0, marginBottom: '20px'}}>Yangi guruh qo'shish</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <label>Guruh nomi</label>
            <input 
              placeholder="Masalan: Frontend #13" 
              value={form.name} 
              onChange={e => setForm({...form, name: e.target.value})} 
              autoFocus
            />
          </FormGroup>

          <FormGroup>
            <label>O'qituvchi</label>
            <select 
              value={form.teacher} 
              onChange={e => setForm({...form, teacher: e.target.value})}
            >
              <option value="">O'qituvchini tanlang...</option>
              {teachers.map(t => (
                <option key={t.id} value={t.name}>{t.name} ({t.subject})</option>
              ))}
            </select>
          </FormGroup>

          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
            <FormGroup>
              <label>Kunlar</label>
              <select value={form.days} onChange={e => setForm({...form, days: e.target.value})}>
                <option value="Dush, Chor, Juma">Dush, Chor, Juma</option>
                <option value="Sesh, Pay, Shan">Sesh, Pay, Shan</option>
                <option value="Har kuni">Har kuni</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label>Vaqt</label>
              <input type="time" value={form.time} onChange={e => setForm({...form, time: e.target.value})} />
            </FormGroup>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'12px'}}>
            <FormGroup>
              <label>Holati</label>
              <select value={form.status} onChange={e => setForm({...form, status: e.target.value})}>
                <option value="Faol">Faol</option>
                <option value="Kutilmoqda">Kutilmoqda</option>
                <option value="Yakunlangan">Yakunlangan</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label>Talabalar (hozir)</label>
              <input type="number" value={form.students} onChange={e => setForm({...form, students: e.target.value})} />
            </FormGroup>
            <FormGroup>
              <label>Maks. sig'im</label>
              <input type="number" value={form.max} onChange={e => setForm({...form, max: e.target.value})} />
            </FormGroup>
          </div>

          <div style={{display:'flex', gap:'12px', marginTop:'10px'}}>
            <button 
              type="button" 
              onClick={onClose} 
              style={{flex:1, padding:'12px', border:'none', borderRadius:'8px', cursor:'pointer', background: '#F1F5F9'}}
            >
              Bekor qilish
            </button>
            <button 
              type="submit" 
              style={{flex:1, padding:'12px', background:'#3B82F6', color:'white', border:'none', borderRadius:'8px', cursor:'pointer', fontWeight:'bold'}}
            >
              Saqlash
            </button>
          </div>
        </form>
      </ModalContent>
    </Overlay>
  );
};

export default AddGroupModal;