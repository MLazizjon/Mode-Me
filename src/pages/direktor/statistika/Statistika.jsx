import React from "react";
import * as S from "./statistika.styles";
import { IoPeople, IoWallet, IoLayers, IoAlertCircle } from "react-icons/io5";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Diagramma uchun vaqtinchalik ma'lumotlar (Buni backenddan olishingiz mumkin)
const chartData = [
  { name: 'Yan', tushum: 4000 },
  { name: 'Feb', tushum: 3000 },
  { name: 'Mar', tushum: 5000 },
  { name: 'Apr', tushum: 2780 },
  { name: 'May', tushum: 1890 },
  { name: 'Iyun', tushum: 6390 },
];

const Panel = ({ students, groups }) => {
  // --- 1. Dinamik hisob-kitoblar ---
  const totalStudents = students.length;
  
  // Faqat balansi minus bo'lganlar (Qarzdorlar)
  const debtors = students.filter((s) => s.balance < 0);
  
  // Umumiy qarz summasi
  const totalDebt = debtors.reduce((acc, curr) => acc + Math.abs(curr.balance), 0);
  
  // Jami tushum (App.js dagi 'balance' ijobiy bo'lsa yoki 'paid' maydoni bo'lsa)
  // Agarda sizda paid maydoni bo'lmasa, student.balance > 0 larni qo'shish mumkin
  const totalRevenue = students.reduce((acc, curr) => acc + (curr.paid || 0), 0);

  return (
    <S.DashboardSection>
      <S.Wrapper>
        <header>
          <h1>Asosiy Panel</h1>
          <p>IT-Markaz ko'rsatkichlari tahlili</p>
        </header>

        {/* --- STATISTIKA KARTALARI --- */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="icon-box blue"><IoPeople /></div>
            <div className="info">
              <p>Talabalar</p>
              <h3>{totalStudents} ta</h3>
              <span className="up">+4% oylik</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="icon-box green"><IoWallet /></div>
            <div className="info">
              <p>Umumiy tushum</p>
              <h3>{totalRevenue.toLocaleString()} so'm</h3>
            </div>
          </div>

          <div className="stat-card">
            <div className="icon-box orange"><IoLayers /></div>
            <div className="info">
              <p>Guruhlar</p>
              <h3>{groups.length} ta</h3>
            </div>
          </div>

          <div className="stat-card">
            <div className="icon-box red"><IoAlertCircle /></div>
            <div className="info">
              <p>Umumiy qarz</p>
              <h3 style={{color: '#EE5D50'}}>{totalDebt.toLocaleString()} so'm</h3>
            </div>
          </div>
        </div>

        {/* --- DIAGRAMMA QISMI --- */}
        <div className="chart-section">
          <div className="panel-box">
            <h2>Oylik daromad tahlili</h2>
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorTushum" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4318FF" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#4318FF" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#A3AED0', fontSize: 12}} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{borderRadius: '15px', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.1)'}} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="tushum" 
                    stroke="#4318FF" 
                    fillOpacity={1} 
                    fill="url(#colorTushum)" 
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="main-content">
          {/* --- QARZDORLAR RO'YXATI (REAL ISHLAYDI) --- */}
          <div className="panel-box">
            <h2>Qarzdorlar ro'yxati</h2>
            <div className="debtors-list">
              {debtors.length > 0 ? (
                debtors.map((s) => (
                  <div key={s.id} className="debtor-item">
                    <div className="user">
                      <div className="avatar">{s.name[0]}</div>
                      <div>
                        <strong>{s.name}</strong>
                        <span>{s.group}</span>
                      </div>
                    </div>
                    <div className="amount">-{Math.abs(s.balance).toLocaleString()} UZS</div>
                  </div>
                ))
              ) : (
                <p style={{textAlign: 'center', color: '#A3AED0', padding: '20px'}}>Hozircha qarzdorlar yo'q</p>
              )}
            </div>
          </div>

          {/* --- GURUHLAR HOLATI (REAL ISHLAYDI) --- */}
          <div className="panel-box">
            <h2>Guruhlar to'liqligi</h2>
            {groups.map((g) => {
              // App.js dagi students'ni guruh nomi bo'yicha filtrlaymiz
              const currentCount = students.filter(s => s.group === g.name).length;
              const percent = Math.min((currentCount / g.max) * 100, 100);
              
              return (
                <div key={g.id} className="group-row">
                  <div className="group-info">
                    <span>{g.name}</span>
                    <span>{currentCount}/{g.max}</span>
                  </div>
                  <div className="bar-bg">
                    <div 
                      className="bar-fill" 
                      style={{ 
                        width: `${percent}%`, 
                        background: g.color || '#4318FF' 
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </S.Wrapper>
    </S.DashboardSection>
  );
};

export default Panel;