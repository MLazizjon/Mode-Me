import styled from "styled-components";

export const TalabalarSection = styled.section`
  position: fixed;
  left: 300px;
  top: 80px;
  width: calc(100% - 300px);
  height: calc(100vh - 78px);
  background: #f8fafc;
  padding: 40px;
  overflow-y: auto;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;

  /* TOP */
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    select {
      padding: 10px 15px;
      border-radius: 10px;
      border: 1px solid #e2e8f0;
      background: white;
      font-weight: 500;
      color: #64748b;
      outline: none;
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
  }

  /* CARDS */
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }

  .card {
    background: white;
    padding: 24px;
    border-radius: 20px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

    h4 {
      color: #64748b;
      font-size: 14px;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    h2 {
      font-size: 28px;
      color: #1e293b;
    }

    .red {
      color: #ef4444;
    }
  }

  /* TABLE */
  .tableWrapper {
    background: white;
    border-radius: 20px;
    padding: 10px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;

    th {
      padding: 18px;
      background: #f8fafc;
      color: #64748b;
      font-weight: 600;
      font-size: 14px;
    }

    td {
      padding: 18px;
      border-bottom: 1px solid #f1f5f9;
      color: #334155;
      font-size: 15px;
    }
  }

  /* BADGE */
  .badge {
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
  }

  .greenBadge {
    background: #dcfce7;
    color: #15803d;
  }

  .redBadge {
    background: #fee2e2;
    color: #b91c1c;
  }

  /* ACTION */
  .action {
    cursor: pointer;
    margin-right: 15px;
    font-size: 18px;
    transition: 0.2s;

    &:hover {
      opacity: 0.7;
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
    display: flex;
    flex-direction: column;
    gap: 15px;

    h3 {
      font-size: 18px;
      text-align: center;
      margin-bottom: 10px;
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
      }
    }

    .modalButtons {
      display: flex;
      gap: 10px;
      margin-top: 10px;

      button {
        flex: 1;
        height: 44px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        font-weight: 600;
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

  /* ✅ PHONE INPUT FULL FIX */
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
    transition: 0.2s;
  }

  .react-tel-input .form-control:focus {
    border-color: #4f46e5 !important;
    box-shadow: none !important;
  }

  .react-tel-input .flag-dropdown {
    border: 1.5px solid #e2e8f0 !important;
    border-radius: 10px 0 0 10px !important;
    background: white !important;
  }
`;