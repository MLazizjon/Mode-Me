import styled from "styled-components";

export const DashboardSection = styled.section`
  position: absolute;
  left: 300px; /* Sidebar kengligi */
  top: 80px;   /* Header balandligi */
  right: 0;
  bottom: 0;
  padding: 25px;
  background-color: #f4f7fe;
  font-family: 'Inter', sans-serif;
  overflow-y: auto; /* Asosiy sahifa scroll bo'lishi uchun */
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    left: 0; /* Mobil versiyada sidebar yopilganda */
  }
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;

  header {
    margin-bottom: 25px;
    h1 { 
      font-size: 26px; 
      color: #1B2559; 
      font-weight: 700; 
      letter-spacing: -0.5px;
    }
    p { 
      color: #A3AED0; 
      font-size: 14px; 
      margin-top: 4px;
    }
  }

  /* --- STATISTIKA KARTALARI --- */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
    margin-bottom: 25px;
  }

  .stat-card {
    background: white;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 18px;
    box-shadow: 0px 18px 40px rgba(112, 144, 176, 0.08);
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-5px);
    }

    .icon-box {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      
      &.blue { background: #F4F7FE; color: #4318FF; }
      &.green { background: #E6FAF5; color: #05CD99; }
      &.orange { background: #FFF5E9; color: #FFB547; }
      &.red { background: #FEEfEf; color: #EE5D50; }
    }

    .info {
      p { color: #A3AED0; font-size: 14px; margin: 0; font-weight: 500; }
      h3 { color: #1B2559; font-size: 22px; margin: 2px 0; font-weight: 700; }
      .up { 
        font-size: 12px; 
        font-weight: 700; 
        color: #05CD99; 
        background: #E6FAF5;
        padding: 2px 8px;
        border-radius: 20px;
      }
    }
  }

  /* --- DIAGRAMMA QISMI --- */
  .chart-section {
    margin-bottom: 25px;
    
    .panel-box {
      background: white;
      padding: 25px;
      border-radius: 20px;
      box-shadow: 0px 18px 40px rgba(112, 144, 176, 0.08);
      
      h2 {
        font-size: 18px;
        color: #1B2559;
        margin-bottom: 20px;
        font-weight: 700;
      }
    }
  }

  /* --- PAZKI ASOSIY CONTENT --- */
  .main-content {
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    gap: 20px;
    margin-bottom: 40px;

    @media (max-width: 1024px) { 
      grid-template-columns: 1fr; 
    }

    .panel-box {
      background: white;
      padding: 25px;
      border-radius: 20px;
      box-shadow: 0px 18px 40px rgba(112, 144, 176, 0.08);
      
      h2 { 
        font-size: 18px; 
        color: #1B2559; 
        margin-bottom: 20px; 
        font-weight: 700;
      }
    }

    .debtors-list {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .debtor-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 0;
      border-bottom: 1px solid #F4F7FE;
      
      &:last-child { border-bottom: none; }

      .user {
        display: flex;
        align-items: center;
        gap: 12px;
        
        .avatar { 
          width: 42px; 
          height: 42px; 
          background: linear-gradient(135deg, #4318FF 0%, #707EAE 100%);
          color: white; 
          border-radius: 14px; 
          display: flex; 
          align-items: center; 
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
        }
        
        div {
          strong { color: #1B2559; font-size: 15px; display: block; }
          span { color: #A3AED0; font-size: 13px; font-weight: 400; }
        }
      }
      
      .amount { 
        color: #EE5D50; 
        font-weight: 700; 
        font-size: 15px;
        background: #FEEfEf;
        padding: 4px 12px;
        border-radius: 8px;
      }
    }

    .group-row {
      margin-bottom: 22px;
      
      &:last-child { margin-bottom: 0; }

      .group-info {
        display: flex; 
        justify-content: space-between; 
        margin-bottom: 10px;
        span { 
          font-size: 14px; 
          color: #1B2559; 
          font-weight: 600; 
        }
      }

      .bar-bg {
        height: 10px; 
        background: #EFF4FB; 
        border-radius: 12px; 
        overflow: hidden;
        
        .bar-fill { 
          height: 100%; 
          border-radius: 12px; 
          transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1); 
        }
      }
    }
  }
`;