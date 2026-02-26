import styled from 'styled-components';

export const DashboardSection = styled.section`
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
display: flex;
flex-direction: column;

  header h1 {
    color: #1e293b;
    font-size: 28px;
    margin-bottom: 30px;
    font-weight: 800;
  }
  .main{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    /* margin-bottom: 30px; */

    .card {
      background: #fff;
      padding: 24px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

      .icon {
        width: 45px;
        height: 45px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;

        &.blue {
          /* background: #eff6ff; */
          color: #1e90ff;
        }
        &.green {
          /* background: #f0fdf4; */
          color: #22c55e;
        }
        &.red {
          /* background: #fef2f2; */
          color: #ef4444;
        }
      }

      p {
        color: #64748b;
        font-size: 14px;
        /* margin-top: 15px; */
        /* margin-bottom: 5px; */
        font-weight: 500;
      }

      h3 {
        font-size: 26px;
        color: #1e293b;
        margin: 0;
        font-weight: 700;
      }

      .redText {
        color: #ef4444;
      }
    }
  }

  .content-grid {
    display: grid;
    grid-template-columns: 350px 1fr;
    gap: 25px;

    .panel {
      background: #fff;
      padding: 25px;
      border-radius: 20px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);

      h2 {
        font-size: 18px;
        color: #1e293b;
        margin-bottom: 20px;
        font-weight: 700;
      }
    }
  }

  .debtors .list-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px 0;
    border-bottom: 1px solid #f1f5f9;

    .avatar {
      background: #fef2f2;
      padding: 8px;
      border-radius: 10px;
    }

    .info strong {
      display: block;
      color: #1e293b;
      font-size: 14px;
    }

    .info span {
      color: #64748b;
      font-size: 12px;
    }

    .amount {
      color: #ef4444;
      font-weight: 700;
      margin-left: auto;
      font-size: 14px;
    }
  }

  .teachers {
    .panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;

      .addBtn {
        background: #1e90ff;
        color: #ffffff;
        border: none;
        padding: 8px 16px;
        border-radius: 10px;
        font-weight: 600;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          background: #1c7ed6;
        }
      }
    }

    table {
      width: 100%;
      border-collapse: collapse;

      th {
        text-align: left;
        color: #64748b;
        padding-bottom: 12px;
        font-size: 13px;
        border-bottom: 1px solid #f1f5f9;
      }

      td {
        padding: 15px 0;
        border-bottom: 1px solid #f1f5f9;
        color: #334155;
        font-size: 14px;
      }

      .statusBtn {
        padding: 6px 12px;
        border-radius: 8px;
        font-size: 11px;
        font-weight: 700;
        border: none;
        cursor: pointer;
        transition: 0.2s;
        min-width: 90px;

        &.active {
          background: #dcfce7;
          color: #15803d;
        }

        &.frozen {
          background: #f1f5f9;
          color: #475569;
        }

        &:hover {
          opacity: 0.8;
        }
      }

      .action {
        cursor: pointer;
        font-size: 16px;
        margin-left: 10px;
      }
    }
  }

  .modalOverlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal {
    background: #ffffff;
    padding: 30px;
    border-radius: 24px;
    width: 380px;

    h3 {
      margin-bottom: 20px;
      color: #1e293b;
    }

    input {
      width: 100%;
      padding: 12px;
      margin-bottom: 15px;
      border: 1.5px solid #e2e8f0;
      border-radius: 10px;
      box-sizing: border-box;
      font-size: 15px;

      &:focus {
        border-color: #1e90ff;
        outline: none;
      }
    }

    .modalButtons {
      display: flex;
      gap: 10px;

      button {
        flex: 1;
        padding: 12px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        font-weight: 600;
      }

      .saveBtn {
        background: #1e90ff;
        color: #ffffff;
      }
    }
  }
`;