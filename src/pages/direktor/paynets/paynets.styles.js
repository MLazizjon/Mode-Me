import styled from "styled-components";

export const PaynetSection = styled.section`
  width: calc(100% - 300px);
  height: calc(100vh - 82px);
  background: #f5f7fb;
  padding: 34px;
  position: absolute;
  left: 300px;
  top: 82px;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Wrapper = styled.div`
  background: white;
  width: 700px;
  padding: 30px;
  border-radius: 16px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);

  h2 { font-size: 24px; margin-bottom: 10px; }
  p { margin: 6px 0; font-size: 16px; }

  .payment-form, .edit-account {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
    padding: 15px;
    border: 1px solid #cbd5e1;
    border-radius: 12px;
    background: #f8fafc;
  }

  .payment-form input, .edit-account input {
    padding: 10px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    outline: none;
  }

  .payment-form input:focus, .edit-account input:focus {
    border-color: #1e90ff;
    box-shadow: 0 0 0 2px rgba(30,144,255,0.2);
  }

  .payment-form button, .edit-account button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #1e90ff;
    color: white;
    cursor: pointer;
    font-weight: 500;
    transition: 0.2s;
  }

  .payment-form button:hover, .edit-account button:hover { background: #187bdb; }

  .edit-actions {
    display: flex;
    gap: 10px;
  }

  .account-actions {
    display: flex;
    gap: 10px;
    margin-top: 15px;
  }

  .account-actions button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: 0.2s;
    color: white;
  }

  .account-actions button:first-child { background: #1e90ff; }
  .account-actions button.delete { background: #dc2626; }

  .back-btn {
    margin-top: 20px;
    padding: 10px 20px;
    background: #e2e8f0;
    color: #334155;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  .back-btn:hover { background: #cbd5e1; }

  .cancel {
    background: #e2e8f0;
    color: #334155;
  }
`;
