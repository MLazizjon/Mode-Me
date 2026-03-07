import styled from "styled-components";

export const TalabalarSection = styled.section`
  position: fixed;
  top: 80px; /* header balandligi */
  left: ${(props) => props.sidebarWidth || 280}px;
  width: calc(100% - ${(props) => props.sidebarWidth || 280}px);
  height: calc(100vh - 80px);
  background: #f8fafc;
  padding: 40px;
  overflow-x: auto; /* kichik ekranlarda horizontal scroll */
  overflow-y: auto;
  box-sizing: border-box;
  transition: all 0.3s ease;

  @media (max-width: 1300px) {
    left: ${(props) => (props.sidebarWidth ? props.sidebarWidth : 240)}px;
    width: calc(100% - ${(props) => (props.sidebarWidth ? props.sidebarWidth : 240)}px);
    padding: 35px;
  }

  @media (max-width: 1024px) {
    left: ${(props) => (props.sidebarWidth ? props.sidebarWidth : 220)}px;
    width: calc(100% - ${(props) => (props.sidebarWidth ? props.sidebarWidth : 220)}px);
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
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;

  /* TOP BAR */
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    select {
      padding: 10px 15px;
      border-radius: 10px;
      border: 1px solid #e2e8f0;
      background: white;
      font-weight: 500;
      color: #64748b;
      outline: none;

      @media (max-width: 600px) {
        padding: 8px 12px;
        font-size: 12px;
      }
    }
  }

  .addBtn {
    background: #1e90ff;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: translateY(-2px);
    }

    @media (max-width: 600px) {
      padding: 8px 16px;
      font-size: 14px;
    }
  }

  /* TABLE */
  .tableWrapper {
    background: white;
    border-radius: 20px;
    padding: 10px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    overflow-x: auto; /* horizontal scroll kichik ekranlar uchun */
  }

  table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    min-width: 700px;

    th {
      padding: 18px;
      background: #f8fafc;
      color: #64748b;
      font-weight: 600;
      font-size: 14px;

      @media (max-width: 600px) {
        padding: 12px;
        font-size: 12px;
      }
    }

    td {
      padding: 18px;
      border-bottom: 1px solid #f1f5f9;
      color: #334155;
      font-size: 15px;

      @media (max-width: 600px) {
        padding: 12px;
        font-size: 13px;
      }
    }
  }

  /* BADGES */
  .badge {
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;

    @media (max-width: 600px) {
      padding: 4px 8px;
      font-size: 11px;
    }
  }

  .greenBadge {
    background: #dcfce7;
    color: #15803d;
  }

  .redBadge {
    background: #fee2e2;
    color: #b91c1c;
  }

  /* ACTION BUTTONS */
  .action {
    cursor: pointer;
    margin-right: 15px;
    font-size: 18px;
    transition: 0.2s;

    &:hover {
      opacity: 0.7;
    }

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  /* MODAL */
  .modalOverlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal {
    background: white;
    padding: 30px;
    border-radius: 24px;
    width: 400px;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    h3 {
      font-size: 18px;
      text-align: center;
      margin-bottom: 10px;

      @media (max-width: 600px) {
        font-size: 16px;
      }
    }

    .inputs {
      display: flex;
      flex-direction: column;
      gap: 12px;

      input {
        height: 44px;
        padding: 0 12px;
        border: 1.5px solid #e2e8f0;
        border-radius: 10px;
        font-size: 14px;
        transition: 0.2s;

        &:focus {
          border-color: #4f46e5;
          outline: none;
        }

        @media (max-width: 600px) {
          height: 40px;
          font-size: 13px;
        }
      }
    }

    .modalButtons {
      display: flex;
      gap: 10px;

      button {
        flex: 1;
        height: 44px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        font-weight: 600;

        @media (max-width: 600px) {
          height: 40px;
          font-size: 13px;
        }
      }

      .cancelBtn {
        background: #e5e7eb;
      }

      .saveBtn {
        background: #4f46e5;
        color: white;
      }
    }
  }

  /* PHONE INPUT */
  .react-tel-input {
    width: 100% !important;
  }

  .react-tel-input .form-control {
    width: 100% !important;
    height: 44px !important;
    border-radius: 10px !important;
    border: 1.5px solid #e2e8f0 !important;
    font-size: 14px !important;
    padding-left: 52px !important;

    &:focus {
      border-color: #4f46e5 !important;
      box-shadow: none !important;
    }

    @media (max-width: 600px) {
      height: 40px !important;
      font-size: 13px !important;
    }
  }

  .react-tel-input .flag-dropdown {
    border: 1.5px solid #e2e8f0 !important;
    border-radius: 10px 0 0 10px !important;
    background: white !important;
  }
`;