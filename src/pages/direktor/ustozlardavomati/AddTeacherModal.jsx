import React, { useState, useEffect } from 'react';
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
  background: white; width: 100%; max-width: 450px; border-radius: 16px;
  padding: 32px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
  animation: ${slideUp} 0.3s ease-out;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  label { display: block; margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #475569; }
  input, select { 
    width: 100%; padding: 10px 12px; border: 1px solid #E2E8F0; border-radius: 8px; 
    font-size: 14px; outline: none; transition: border-color 0.2s;
    &:focus { border-color: #3B82F6; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); }
  }
`;

const BtnGroup = styled.div`
  display: flex; gap: 12px; margin-top: 24px;
  button { flex: 1; padding: 12px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
`;

export const AddTeacherModal = ({ onClose, onSave, initialData }) => {
  // Инициализируем форму данными если мы редактируем (initialData)
  const [form, setForm] = useState({
    name: '',
    subject: '',
    status: 'Kelgan',
    hours: ''
  });

  // Если открываем модалку для редактирования, заполняем поля данными учителя
  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || '',
        subject: initialData.subject || '',
        status: initialData.status || 'Kelgan',
        hours: initialData.hours || ''
      });
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.subject) return alert("Iltimos, barcha maydonlarni to'ldiring!");
    
    onSave({
      ...form,
      // Если редактируем — сохраняем старый ID и Аватар, если новый — создаем
      id: initialData ? initialData.id : Date.now(),
      avatar: initialData ? initialData.avatar : `https://i.pravatar.cc/150?u=${Date.now()}`
    });
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <h2 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '800' }}>
          {initialData ? "Ma'lumotni tahrirlash" : "Yangi ustoz qo'shish"}
        </h2>
        
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <label>F.I.SH (Ism va Familiya)</label>
            <input 
              autoFocus
              placeholder="Masalan: Alisher G'ofurov" 
              value={form.name}
              onChange={e => setForm({...form, name: e.target.value})}
            />
          </FormGroup>

          <FormGroup>
            <label>Fan yo'nalishi</label>
            <select 
              value={form.subject} 
              onChange={e => setForm({...form, subject: e.target.value})}
            >
              <option value="">Tanlang...</option>
              <option value="Matematika">Matematika</option>
              <option value="Ingliz tili">Ingliz tili</option>
              <option value="Dasturlash">Dasturlash</option>
              <option value="Fizika">Fizika</option>
            </select>
          </FormGroup>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <FormGroup>
              <label>Ish holati</label>
              <select value={form.status} onChange={e => setForm({...form, status: e.target.value})}>
                <option value="Kelgan">Kelgan</option>
                <option value="Kechikkan">Kechikkan</option>
                <option value="Kelmagan">Kelmagan</option>
              </select>
            </FormGroup>

            <FormGroup>
              <label>Ish soati</label>
              <input 
                type="number" 
                placeholder="0" 
                value={form.hours}
                onChange={e => setForm({...form, hours: e.target.value})}
              />
            </FormGroup>
          </div>

          <BtnGroup>
            <button 
              type="button" 
              onClick={onClose}
              style={{ background: '#F1F5F9', border: 'none', color: '#475569' }}
            >
              Bekor qilish
            </button>
            <button 
              type="submit"
              style={{ background: '#3B82F6', border: 'none', color: 'white' }}
            >
              {initialData ? "Saqlash" : "Qo'shish"}
            </button>
          </BtnGroup>
        </form>
      </ModalContent>
    </Overlay>
  );
};