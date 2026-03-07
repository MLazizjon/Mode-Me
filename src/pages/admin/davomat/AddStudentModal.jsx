import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Анимации для плавного появления
const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const slideUp = keyframes`from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; }`;

const Overlay = styled.div`
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(15, 23, 42, 0.5); backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center; z-index: 2000;
  animation: ${fadeIn} 0.2s ease;
`;

const Modal = styled.div`
  background: white; width: 100%; max-width: 450px; padding: 30px; border-radius: 20px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  animation: ${slideUp} 0.3s ease-out;
  h2 { margin: 0 0 20px 0; color: #1e293b; font-size: 24px; }
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
  label { display: block; font-size: 13px; font-weight: 600; color: #64748b; margin-bottom: 6px; }
  input, select { 
    width: 100%; padding: 12px; border: 1px solid #e2e8f0; border-radius: 10px; 
    outline: none; box-sizing: border-box; transition: border-color 0.2s;
    &:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); }
    &:disabled { background: #f8fafc; cursor: not-allowed; }
  }
`;

const AddStudentModal = ({ onClose, onSave, groups, defaultGroup }) => {
  const [form, setForm] = useState({ 
    name: '', 
    phone: '', 
    group: defaultGroup || '', 
    balance: '' // Используем пустую строку для удобства ввода в числовое поле
  });

  // Закрытие по нажатию Esc
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const submit = (e) => {
    e.preventDefault();
    
    // Валидация
    if (!form.name.trim()) return alert("Talaba ismini kiriting!");
    if (!form.group) return alert("Guruhni tanlang!");

    // Подготовка данных
    const newStudent = {
      ...form,
      id: Date.now(),
      balance: Number(form.balance) || 0, // Превращаем в число, если пусто - 0
      name: form.name.trim()
    };

    onSave(newStudent);
  };

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>
        <h2>Yangi talaba qo'shish</h2>
        <form onSubmit={submit}>
          <InputGroup>
            <label>F.I.SH</label>
            <input 
              autoFocus
              placeholder="Masalan: Alisher Karimov" 
              value={form.name} 
              onChange={e => setForm({...form, name: e.target.value})} 
            />
          </InputGroup>

          <InputGroup>
            <label>Telefon</label>
            <input 
              type="tel"
              placeholder="+998 90 123 45 67" 
              value={form.phone} 
              onChange={e => setForm({...form, phone: e.target.value})} 
            />
          </InputGroup>

          <InputGroup>
            <label>Guruh</label>
            <select 
              value={form.group} 
              onChange={e => setForm({...form, group: e.target.value})}
              disabled={!!defaultGroup} // Если зашли из конкретной группы, менять её нельзя
            >
              <option value="">Guruhni tanlang...</option>
              {groups.map(g => (
                <option key={g.id} value={g.name}>{g.name}</option>
              ))}
            </select>
          </InputGroup>

          <InputGroup>
            <label>Boshlang'ich balans (so'm)</label>
            <input 
              type="number" 
              placeholder="0"
              value={form.balance} 
              onChange={e => setForm({...form, balance: e.target.value})} 
            />
          </InputGroup>

          <div style={{display:'flex', gap:'10px', marginTop:'25px'}}>
            <button 
              type="button" 
              onClick={onClose} 
              style={{
                flex:1, padding:'12px', border:'1px solid #e2e8f0', 
                background: 'white', borderRadius:'10px', cursor:'pointer',
                fontWeight:'600', color: '#64748b'
              }}
            >
              Bekor qilish
            </button>
            <button 
              type="submit" 
              style={{
                flex:1, padding:'12px', background:'#3b82f6', 
                color:'white', border:'none', borderRadius:'10px', 
                cursor:'pointer', fontWeight:'600'
              }}
            >
              Saqlash
            </button>
          </div>
        </form>
      </Modal>
    </Overlay>
  );
};

export default AddStudentModal;