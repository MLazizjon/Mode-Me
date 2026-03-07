import styled from "styled-components";

export const DashboardSection = styled.section`
  position: fixed;
  top: 80px; /* header height */
  left: ${(props) => props.sidebarWidth}px;
  width: calc(100% - ${(props) => props.sidebarWidth}px);
  height: calc(100vh - 80px);
  background: #f8fafc;
  padding: 40px;
  overflow-y: auto;
  box-sizing: border-box;
  transition: all 0.3s ease;

  @media (max-width: 1300px) {
    left: ${(props) => (props.sidebarWidth > 240 ? 240 : props.sidebarWidth)}px;
    width: calc(100% - ${(props) => (props.sidebarWidth > 240 ? 240 : props.sidebarWidth)}px);
    padding: 35px;
  }

  @media (max-width: 1024px) {
    left: ${(props) => (props.sidebarWidth > 220 ? 220 : props.sidebarWidth)}px;
    width: calc(100% - ${(props) => (props.sidebarWidth > 220 ? 220 : props.sidebarWidth)}px);
    padding: 30px;
  }

  @media (max-width: 900px) {
    left: 0;
    width: 100%;
    padding: 20px;
  }

  @media (max-width: 600px) {
    padding: 15px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;

  header h1 {
    color: #1e293b;
    font-size: 28px;
    margin-bottom: 30px;
    font-weight: 800;

    @media (max-width: 1024px) { font-size: 24px; }
    @media (max-width: 600px) { font-size: 20px; margin-bottom: 20px; }
  }

  .main {
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-height: calc(100% - 80px);
  }

  /* --- Stats Cards --- */
  .stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 600px) { grid-template-columns: 1fr; }

    .card {
      background: #fff;
      padding: 24px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .icon {
        width: 45px;
        height: 45px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        margin-bottom: 10px;
      }

      p { color: #64748b; font-size: 14px; font-weight: 500; }
      h3 { font-size: 26px; color: #1e293b; font-weight: 700; }
      .redText { color: #ef4444; }
    }
  }

  /* --- Content Grid --- */
  .content-grid {
    display: grid;
    grid-template-columns: minmax(300px, 1fr) 2fr;
    gap: 25px;

    @media (max-width: 1024px) { grid-template-columns: 1fr 1fr; }
    @media (max-width: 768px) { grid-template-columns: 1fr; }

    .panel {
      background: #fff;
      padding: 25px;
      border-radius: 20px;
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
      width: 100%;
      min-height: 150px;
      box-sizing: border-box;

      h2 {
        font-size: 18px;
        color: #1e293b;
        margin-bottom: 20px;
        font-weight: 700;
        @media (max-width: 600px) { font-size: 16px; margin-bottom: 15px; }
      }

      .panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;

        .addBtn {
          background: #1e90ff;
          color: #fff;
          border: none;
          padding: 8px 16px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
          &:hover { background: #1c7ed6; }
        }
      }
    }
  }

  /* --- Debtors List --- */
  .debtors .list-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px 0;
    border-bottom: 1px solid #f1f5f9;
    box-sizing: border-box;

    .info strong { font-size: 14px; color: #1e293b; }
    .info span { font-size: 12px; color: #64748b; }
    .amount { color: #ef4444; font-weight: 700; margin-left: auto; font-size: 14px; }
  }

  /* --- Teachers Table --- */
  .teachers .tableWrapper { overflow-x: auto; }

  .teachers table {
    width: 100%;
    border-collapse: collapse;
    th, td { text-align: left; padding: 12px; font-size: 14px; border-bottom: 1px solid #f1f5f9; }

    .statusBtn {
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 700;
      border: none;
      cursor: pointer;
      min-width: 90px;
      &.active { background: #dcfce7; color: #15803d; }
      &.frozen { background: #f1f5f9; color: #475569; }
    }

    .action { cursor: pointer; font-size: 16px; margin-left: 10px; }
  }

  /* --- Modal --- */
  .modalOverlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .modal {
    background: #fff;
    padding: 30px;
    border-radius: 24px;
    width: 380px;
    max-width: 90%;
    box-sizing: border-box;

    h3 { margin-bottom: 20px; color: #1e293b; font-size: 20px; text-align: center; }

    form {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    input {
      width: 100%;
      padding: 12px;
      border: 1.5px solid #e2e8f0;
      border-radius: 10px;
      font-size: 15px;
      box-sizing: border-box;
      &:focus { border-color: #1e90ff; outline: none; }
    }

    .modalButtons {
      display: flex;
      gap: 10px;
      button { flex: 1; padding: 12px; border-radius: 10px; border: none; cursor: pointer; font-weight: 600; }
      .saveBtn { background: #1e90ff; color: #fff; }
    }
  }
`;